// generated on 2016-11-15 using generator-chrome-extension 0.6.1
import gulp from 'gulp';
import gulpLoadPlugins from 'gulp-load-plugins';
import del from 'del';
import runSequence from 'run-sequence';
import {stream as wiredep} from 'wiredep';
import watchify from 'watchify';
import browserify from 'browserify';
import babel from 'babelify';
import buffer from 'vinyl-buffer';
import source from 'vinyl-source-stream';
import es from 'event-stream';
import path from 'path';

const $ = gulpLoadPlugins();

function compile(watch) {
  const files = [
    './app/scripts.babel/background.js',
    './app/scripts.babel/chromereload.js',
    './app/scripts.babel/contentscript.js'
  ];

  files.forEach((file) => {
    const stream = watchify(browserify(file, { debug: true }).transform(babel));

    function rebundle() {
      stream.bundle()
        .pipe(source(path.basename(file)))
        // .pipe(buffer())
        .pipe(gulp.dest('./app/scripts'));
    }
    if (watch) {
      stream.on('update', () => {
        console.log('=> Bundling...');
        rebundle();
      });
    }

    rebundle();

  });



  // function rebundle() {
  //   stream.bundle()
  //     .on('error', function(err) { console.error(err); this.emit('end'); })
  //     .pipe(source('contentscript.js'))
  //     .pipe(buffer())
  //     .pipe($.sourcemaps.init({ loadMaps: true }))
  //     .pipe($.sourcemaps.write('./'))
  //     .pipe(gulp.dest('./app/scripts'));
  // }
  //
  // if (watch) {
  //   bundler.on('update', () => {
  //     console.log('=> Bundling...');
  //     rebundle();
  //   });
  // }

  // rebundle();
}

gulp.task('scss', () => {
  return gulp.src('./app/scss/*.scss')
    .pipe($.sass().on('error', $.sass.logError))
    .pipe(gulp.dest('./app/styles'));
})

gulp.task('extras', () => {
  return gulp.src([
    'app/*.*',
    'app/_locales/**',
    '!app/scripts.babel',
    '!app/*.json',
    '!app/*.html',
  ], {
    base: 'app',
    dot: true
  }).pipe(gulp.dest('dist'));
});

function lint(files, options) {
  return () => {
    return gulp.src(files)
      .pipe($.eslint(options))
      .pipe($.eslint.format());
  };
}

gulp.task('lint', lint('app/scripts.babel/**/*.js', {
  env: {
    es6: true
  }
}));

gulp.task('images', () => {
  return gulp.src('app/images/**/*')
    .pipe($.if($.if.isFile, $.cache($.imagemin({
      progressive: true,
      interlaced: true,
      // don't remove IDs from SVGs, they are often used
      // as hooks for embedding and styling
      svgoPlugins: [{cleanupIDs: false}]
    }))
    .on('error', function (err) {
      console.log(err);
      this.end();
    })))
    .pipe(gulp.dest('dist/images'));
});

gulp.task('html',  () => {
  return gulp.src('app/*.html')
    .pipe($.useref({searchPath: ['.tmp', 'app', '.']}))
    .pipe($.sourcemaps.init())
    .pipe($.if('*.js', $.uglify()))
    .pipe($.if('*.css', $.cleanCss({compatibility: '*'})))
    .pipe($.sourcemaps.write())
    .pipe($.if('*.html', $.htmlmin({removeComments: true, collapseWhitespace: true})))
    .pipe(gulp.dest('dist'));
});

gulp.task('chromeManifest', () => {
  return gulp.src('app/manifest.json')
    .pipe($.chromeManifest({
      buildnumber: false,
      background: {
        target: 'scripts/background.js',
        exclude: [
          'scripts/chromereload.js'
        ]
      }
  }))
  .pipe($.if('*.css', $.cleanCss({compatibility: '*'})))
  .pipe($.if('*.js', $.sourcemaps.init()))
  .pipe($.if('*.js', $.uglify()))
  .pipe($.if('*.js', $.sourcemaps.write('.')))
  .pipe(gulp.dest('dist'));
});

gulp.task('babel', () => {
  return compile();
  // return gulp.src('app/scripts.babel/**/*.js')
  //     .pipe($.babel({
  //       presets: ['es2015']
  //     }))
  //     .pipe(gulp.dest('app/scripts'));
});

gulp.task('clean', del.bind(null, ['.tmp', 'dist']));

gulp.task('watch', ['lint'], () => {
  $.livereload.listen();

  gulp.watch([
    'app/*.html',
    'app/scripts/**/*.js',
    'app/images/**/*',
    'app/styles/**/*',
    'app/_locales/**/*.json'
  ]).on('change', $.livereload.reload);

  gulp.watch('app/scss/*.scss', ['scss']);
  gulp.watch('app/scripts.babel/**/*.js', ['lint']);
  compile(true);
  gulp.watch('bower.json', ['wiredep']);
});

gulp.task('size', () => {
  return gulp.src('dist/**/*').pipe($.size({title: 'build', gzip: true}));
});

gulp.task('wiredep', () => {
  gulp.src('app/*.html')
    .pipe(wiredep({
      ignorePath: /^(\.\.\/)*\.\./
    }))
    .pipe(gulp.dest('app'));
});

gulp.task('package', function () {
  var manifest = require('./dist/manifest.json');
  return gulp.src('dist/**')
      .pipe($.zip('Grain of Salt-' + manifest.version + '.zip'))
      .pipe(gulp.dest('package'));
});

gulp.task('build', (cb) => {
  runSequence(
    'lint', 'babel', 'scss', 'chromeManifest',
    ['html', 'images', 'extras'],
    'size', cb);
});

gulp.task('default', ['clean'], cb => {
  runSequence('build', cb);
});
