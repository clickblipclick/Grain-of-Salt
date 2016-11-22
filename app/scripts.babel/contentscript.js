import publications from './publications';
import find from 'lodash/find';
import $ from 'jquery';
const { sites, pages } = publications;

$(function() {
  class GrainOfSalt {
    constructor(hostname) {
      this.posts = [];
      this.initCheck();
    }

    initCheck() {
      this.timeout = window.setTimeout(this.checkPosts.bind(this), 500);
    }

    checkPosts() {
      const $posts = $('.userContentWrapper');
      if (this.posts.length !== $posts.length) {
        $posts.each(this.checkPost.bind(this));
        this.posts = $posts;
      }
      this.timeout = window.setTimeout(this.checkPosts.bind(this), 500);
    }

    createWarning(array) {
      return $('<div />').addClass('gos-ext-banner').html(this.getText(array));
    }

    getScore(array) {
      var pointArray = {
        1: 6,
        2: 3,
        3: 2,
        4: 1
      };

      return array.reduce((a, b) => {
        return a + pointArray[b];
      }, 0);
    }

    getClass(points) {
      if (points >= 6) {
        return 'gos-ext-flagged--max';
      }
      if (points >= 4) {
        return 'gos-ext-flagged--medium';
      }
      if (points >= 2) {
        return 'gos-ext-flagged--low';
      }
      if (points > 0) {
        return 'gos-ext-flagged--min';
      }
    }

    getText(array) {
      var obj = {
        1: 'false',
        2: 'misleading/unreliable',
        3: 'clickbait-y',
        4: 'satirical/comedic'
      };

      const title = `This post may contain ${toSentence(array.map(num => obj[num]))} content.`;
      const note = (this.getScore(array) >= 6)
        ? 'Please check other sources to confirm, and share with caution.'
        : 'Please keep that in mind while reading.';
      function toSentence(arr) {
        return arr.slice(0, -2).join(', ') +
          (arr.slice(0, -2).length ? ', ' : '') +
          arr.slice(-2).join(' and ');
      }
      return `<h1>${title}</h1><p>${note}</p>`;
    }

    checkPost(i, post) {
      const $post = $(post);

      $post.find('a').each((i, link) => {
        const linkResult = this.checkLink($(link).attr('href'));
        if (linkResult && !$post.data('gos-ext-flagged')) {
          if (!$post.parents('.userContentWrapper').length) {
            $post.prepend(this.createWarning(linkResult)).data('gos-ext-flagged', 'true').addClass(this.getClass(this.getScore(linkResult)));
          }
        }
      });

      $post.find('.fcg').find('a').each((i, link) => {
        const $link = $(link);
        if ($link.data('hovercard') && $link.data('hovercard').indexOf('page.php') > -1) {
          const matches = $link.attr('href').match(/^(http|https):\/\/(www\.)?facebook\.com\/([^\/]*)\/?/i);
          const page = matches[matches.length - 1];
          const pageResult = this.checkPage(page);

          if (pageResult && !$post.data('gos-ext-flagged')) {
            $post.prepend(this.createWarning(pageResult)).data('gos-ext-flagged', 'true').addClass(this.getClass(this.getScore(pageResult)));
          }
        }
      });
    }

    checkPage(page) {
      if (typeof page === 'string') {
        var pageObj = find(pages, (pageObj) => {
          return (pageObj.page.toLowerCase() === page.toLowerCase());
        });
        return (typeof pageObj !== 'undefined') ? pageObj.types : false;
      }
    }

    checkLink(url) {
      if (typeof url === 'string') {
        return sites.reduce((acc, item) => {
          if (url.match(item.url)) {
            return item.types;
          }
          return acc;
        }, false);
      }
      return false;
    }
  }

  new GrainOfSalt(window.location.hostname);
});
