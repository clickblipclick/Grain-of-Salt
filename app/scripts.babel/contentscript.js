const distrubutors = [
  /(www.)?facebook.com/gi
];
console.log('running');
const badPages = [{
  page: 'associatedmediacoverage',
  type: 'misleading'
},{
  page: 'beingliberal.org',
  type: 'misleading'
},{
  page: 'LiberalAmerica.org',
  type: 'misleading'
},{
  page: 'NahaDaily',
  type: 'misleading'
},{
  page: 'NahaDailycom',
  type: 'misleading'
},{
  page: 'NewsBuzzDaily',
  type: 'misleading'
},{
  page: 'newswatch28',
  type: 'misleading'
},{
  page: 'TheStatelyHarold',
  type: 'misleading'
},{
  page: 'super7news',
  type: 'misleading'
},{
  page: 'TheOther98',
  type: 'misleading'
},{
  page: 'WinningDemocrats',
  type: 'misleading'
},{
  page: 'WNDNews',
  type: 'misleading'
},{
  page: 'worldnewsdailyreport',
  type: 'misleading'
},{
  page: 'clickhole',
  type: 'satire'
},{
  page: 'theblaze',
  type: 'misleading'
}];

const badSites = [{
  url: createRegex('thebostontribune.com'),
  type: 'misleading'
},{
  url: createRegex('associatedmediacoverage.com'),
  type: 'misleading'
},{
  url: createRegex('100percentFedup.com'),
  type: 'misleading'
},{
  url: createRegex('21stCenturyWire.com'),
  type: 'misleading'
},{
  url: createRegex('70news.wordpress.com'),
  type: 'misleading'
},{
  url: createRegex('abcnews.com.co'),
  type: 'misleading'
},{
  url: createRegex('activistpost.com'),
  type: 'misleading'
},{
  url: createRegex('addictinginfo.org'),
  type: 'misleading'
},{
  url: createRegex('americannewsx.com'),
  type: 'misleading'
},{
  url: createRegex('americannews.com'),
  type: 'misleading'
},{
  url: createRegex('anonnews.co'),
  type: 'misleading'
},{
  url: createRegex('BeforeItsNews.com'),
  type: 'misleading'
},{
  url: createRegex('BigAmericanNews.com'),
  type: 'misleading'
},{
  url: createRegex('BigPZone.com'),
  type: 'misleading'
},{
  url: createRegex('bipartisanreport.com'),
  type: 'misleading'
},{
  url: createRegex('bizpacreview.com'),
  type: 'misleading'
},{
  url: createRegex('bluenationreview.com'),
  type: 'misleading'
},{
  url: createRegex('breitbart.com'),
  type: 'misleading'
},{
  url: createRegex('cap-news.com'),
  type: 'satire'
},{
  url: createRegex('christwire.org'),
  type: 'satire'
},{
  url: createRegex('enduringvision.com'),
  type: 'misleading'
},{
  url: createRegex('FPRNradio.com'),
  type: 'misleading'
},{
  url: createRegex('thefreethoughtproject.com'),
  type: 'misleading'
},{
  url: createRegex('geoengineeringwatch.com'),
  type: 'misleading'
},{
  url: createRegex('globalresearch.ca'),
  type: 'misleading'
},{
  url: createRegex('govtslaves.info'),
  type: 'misleading'
},{
  url: createRegex('gulagbound.com'),
  type: 'misleading'
},{
  url: createRegex('hangthebankers.com'),
  type: 'misleading'
},{
  url: createRegex('humansarefree.com'),
  type: 'misleading'
},{
  url: createRegex('ifyouonlynews.com'),
  type: 'misleading'
},{
  url: createRegex('ijr.com'),
  type: 'misleading'
},{
  url: createRegex('infowars.com'),
  type: 'misleading'
},{
  url: createRegex('intellihub.com'),
  type: 'misleading'
},{
  url: createRegex('inquisitor.com'),
  type: 'misleading'
},{
  url: createRegex('jonesreport.com'),
  type: 'misleading'
},{
  url: createRegex('lewrockwell.com'),
  type: 'misleading'
},{
  url: createRegex('pakalertpress.com'),
  type: 'misleading'
},{
  url: createRegex('politicalblindspot.com'),
  type: 'misleading'
},{
  url: createRegex('politicalears.com'),
  type: 'misleading'
},{
  url: createRegex('politicalo.com'),
  type: 'misleading'
},{
  url: createRegex('politicususa.com'),
  type: 'misleading'
},{
  url: createRegex('prisonplanet.com'),
  type: 'misleading'
},{
  url: createRegex('private-eye.co.uk'),
  type: 'satire'
},{
  url: createRegex('projectveritas.com'),
  type: 'misleading'
},{
  url: createRegex('rawstory.com'),
  type: 'misleading'
},{
  url: createRegex('react365.com'),
  type: 'misleading'
},{
  url: createRegex('RealFarmacy.com'),
  type: 'misleading'
},{
  url: createRegex('RealNewsRightNow.com'),
  type: 'misleading'
},{
  url: createRegex('RedFlagNews.com'),
  type: 'misleading'
},{
  url: createRegex('redstate.com'),
  type: 'misleading'
},{
  url: createRegex('reductress.com'),
  type: 'satire'
},{
  url: createRegex('rilenews.com'),
  type: 'misleading'
},{
  url: createRegex('satiratribune.com'),
  type: 'satire'
},{
  url: createRegex('sprotspickle.com'),
  type: 'misleading'
},{
  url: createRegex('theblaze.com'),
  type: 'misleading'
},{
  url: createRegex('chronicle.su'),
  type: 'misleading'
},{
  url: createRegex('civictribune.com'),
  type: 'misleading'
},{
  url: createRegex('clickhole.com'),
  type: 'satire'
},{
  url: createRegex('clckhl.co'),
  type: 'satire'
},{
  url: createRegex('coasttocoastam.com'),
  type: 'misleading'
},{
  url: createRegex('collective-evolution.com'),
  type: 'misleading'
},{
  url: createRegex('consciouslifenews.com'),
  type: 'misleading'
},{
  url: createRegex('conservativeoutfitters.com'),
  type: 'misleading'
},{
  url: createRegex('wideawakeamerica.com'),
  type: 'misleading'
},{
  url: createRegex('countdowntozerotime.com'),
  type: 'misleading'
},{
  url: createRegex('counterpsyops.com'),
  type: 'misleading'
},{
  url: createRegex('creambmp.com'),
  type: 'misleading'
},{
  url: createRegex('crooksandliars.com'),
  type: 'misleading'
},{
  url: createRegex('dailybuzzlive.com'),
  type: 'misleading'
},{
  url: createRegex('dailycurrant.com'),
  type: 'satire'
},{
  url: createRegex('dailynewsbin.com'),
  type: 'misleading'
},{
  url: createRegex('dailywire.com'),
  type: 'misleading'
},{
  url: createRegex('DCClothesLine.com'),
  type: 'misleading'
},{
  url: createRegex('DCGazette.com'),
  type: 'misleading'
},{
  url: createRegex('DenverGuardian.com'),
  type: 'misleading'
},{
  url: createRegex('derfmagazine.com'),
  type: 'misleading'
},{
  url: createRegex('disclose.tv'),
  type: 'misleading'
},{
  url: createRegex('DrudgeReport.com.co'),
  type: 'misleading'
},{
  url: createRegex('duffleblog.com'),
  type: 'satire'
},{
  url: createRegex('duhprogressive.com'),
  type: 'misleading'
},{
  url: createRegex('embols.com'),
  type: 'misleading'
},{
  url: createRegex('empireherald.com'),
  type: 'misleading'
},{
  url: createRegex('empirenews.com'),
  type: 'misleading'
},{
  url: createRegex('endingthefed.com'),
  type: 'misleading'
},{
  url: createRegex('libertytalk.fm'),
  type: 'misleading'
},{
  url: createRegex('libertyunyielding.com'),
  type: 'misleading'
},{
  url: createRegex('libertyvideos.org'),
  type: 'misleading'
},{
  url: createRegex('libertymovementradio.com'),
  type: 'misleading'
},{
  url: createRegex('mediamass.net'),
  type: 'misleading'
},{
  url: createRegex('megynkelly.us'),
  type: 'misleading'
},{
  url: createRegex('MSNBC.com.co'),
  type: 'misleading'
},{
  url: createRegex('MSNBC.website'),
  type: 'misleading'
},{
  url: createRegex('Naha Daily'),
  type: 'misleading'
},{
  url: createRegex('NationalReport.net'),
  type: 'misleading'
},{
  url: createRegex('NaturalNews.com'),
  type: 'misleading'
},{
  url: createRegex('ncscooper.com'),
  type: 'misleading'
},{
  url: createRegex('newcenturytimes.com'),
  type: 'misleading'
},{
  url: createRegex('newsexaminer.com'),
  type: 'misleading'
},{
  url: createRegex('news-hound.com'),
  type: 'misleading'
},{
  url: createRegex('newsbiscuit.com'),
  type: 'misleading'
},{
  url: createRegex('newslo.com'),
  type: 'misleading'
},{
  url: createRegex('NewsMutiny.com'),
  type: 'misleading'
},{
  url: createRegex('newswatch33.com'),
  type: 'misleading'
},{
  url: createRegex('NewsWire-24.com'),
  type: 'misleading'
},{
  url: createRegex('NoDisInfo.com'),
  type: 'misleading'
},{
  url: createRegex('now8news.com'),
  type: 'misleading'
},{
  url: createRegex('NowTheEndBegins.com'),
  type: 'misleading'
},{
  url: createRegex('occupydemocrats.com'),
  type: 'misleading'
},{
  url: createRegex('thefreethoughtproject.com'),
  type: 'misleading'
},{
  url: createRegex('newyorker.com\\/humor\\/borowitz-report'),
  type: 'satire'
},{
  url: createRegex('theonion.com'),
  type: 'satire'
},{
  url: createRegex('other98.com'),
  type: 'misleading'
},{
  url: createRegex('thereporterz.com'),
  type: 'misleading'
},{
  url: createRegex('thedailysheeple.com'),
  type: 'misleading'
},{
  url: createRegex('thenewsnerd.com'),
  type: 'misleading'
},{
  url: createRegex('therundownlive.com'),
  type: 'misleading'
},{
  url: createRegex('theuspatriot.com'),
  type: 'misleading'
},{
  url: createRegex('truthfrequencyradio.com'),
  type: 'misleading'
},{
  url: createRegex('twitchy.com'),
  type: 'misleading'
},{
  url: createRegex('unconfirmedsources.com'),
  type: 'misleading'
},{
  url: createRegex('upworthy.com'),
  type: 'misleading'
},{
  url: createRegex('u.pw'),
  type: 'misleading'
},{
  url: createRegex('usasupreme.com'),
  type: 'misleading'
},{
  url: createRegex('us.blastingnews.com'),
  type: 'misleading'
},{
  url: createRegex('usuncut.com'),
  type: 'misleading'
},{
  url: createRegex('veteranstoday.com'),
  type: 'misleading'
},{
  url: createRegex('walkingtimes.com'),
  type: 'misleading'
},{
  url: createRegex('wakingupwisconsin.com'),
  type: 'misleading'
},{
  url: createRegex('WitScience.org'),
  type: 'misleading'
},{
  url: createRegex('wnd.com'),
  type: 'misleading'
},{
  url: createRegex('worldnewsdailyreport.com'),
  type: 'misleading'
},{
  url: createRegex('WorldTruth.tv'),
  type: 'misleading'
},{
  url: createRegex('zerohedge.com'),
  type: 'misleading'
}];

function createRegex(url) {
  const escapedUrl = url.replace('.','\\.');
  const regexString = `^((http|https):\\/\\/l\\.facebook\\.com\\/l\\.php\\?u=(http|https)%3A%2F%2F(www\\.)?${encodeURIComponent(url)}|(http|https):\\/\\/(www\\.)?${escapedUrl})`;
  return new RegExp(regexString, 'i');
}

$(function() {
  class GrainOfSalt {
    constructor(hostname) {
      if (this.checkHost(hostname)) {
        this.initCheck();
      }
    }

    checkHost(hostname) {
      return distrubutors.reduce((acc, item) => (acc || Boolean(hostname.match(item))), false);
    }

    initCheck() {
      this.timeout = window.setTimeout(this.checkPosts.bind(this), 500);
    }

    checkPosts() {
      this.timeout = window.setTimeout(this.checkPosts.bind(this), 500);
      const $posts = $('.userContentWrapper');
      $posts.each(this.checkPost.bind(this));
    }

    checkPost(i, post) {
      const $post = $(post);

      // if (!$post.find('.userContentWrapper').length) {
        $post.find('a').each((i, link) => {
          const linkResult = this.checkLink($(link).attr('href'));
          if (linkResult && !$post.data('gos-ext-flagged')) {
            $post.data('gos-ext-flagged', 'true').addClass('gos-ext--'+linkResult);
          }
        });
        $post.find('.fcg').find('a').each((i, link) => {
          const $link = $(link);
          if ($link.data('hovercard') && $link.data('hovercard').indexOf('page.php') > -1) {
            const matches = $link.attr('href').match(/^(http|https):\/\/(www\.)?facebook\.com\/([^\/]*)\/?/i);
            const page = matches[matches.length - 1];
            const pageResult = this.checkPage(page);

            if (pageResult && !$post.data('gos-ext-flagged')) {
              console.log($link.data('hovercard'), 'flagged');
              $post.data('gos-ext-flagged', 'true').addClass('gos-ext--'+pageResult);
            }
          }
        });
      // }
    }

    checkPage(page) {
      if (typeof page === 'string') {
        var pageObj = _.find(badPages, (pageObj) => {
          return (pageObj.page.toLowerCase() === page.toLowerCase());
        });
        return (typeof pageObj !== 'undefined') ? pageObj.type : false;
      }
    }

    checkLink(url) {
      if (typeof url === 'string') {
        return badSites.reduce((acc, item) => {
          if (url.match(item.url)) {
            return item.type;
          }
          return acc;
        }, false)
      }
      return false;
    }
  }

  new GrainOfSalt(window.location.hostname);
});
