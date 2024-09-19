import { useEffect } from 'react';

const myEnv = process.env.NEXT_PUBLIC_MY_ENV;

const AdTonefuseComponent = () => {
  useEffect(() => {
    const songName = document.getElementById('js-song-name')?.innerText;
    const artistName = document.getElementById('js-artist-name')?.innerText;
    const articleTitle = document.getElementById('js-article-title')?.innerText;

    // NOTE: spotifyのデータと関連づいていないときは記事タイトルから取得
    let match = ['', '', ''];
    if (!!articleTitle) {
      match = articleTitle.match(/(.*)【(.*)】/);
    }

    const matchArtistName = match != null && match?.length > 0 ? match[2] : '';
    const matchSongName = match != null && match?.length > 0 ? match[1] : '';

    const opts = {
      artist: artistName || matchArtistName || '',
      song: songName || matchSongName || '',
      adunit_id: 100005313,
      div_id: 'cf_async_' + Math.floor(Math.random() * 999999999),
    };

    const target = document.getElementById('js-insert-ad-element');

    if (target == null) {
      return;
    }

    const lyrics_tonefuse_ad = document.querySelector('.c-music-ad-player');

    if (lyrics_tonefuse_ad != null) {
      // turboでページ移動時に挿入したHTMLを削除
      lyrics_tonefuse_ad.remove();
    }

    target.insertAdjacentHTML('afterbegin', '<div id="' + opts.div_id + '" class="c-music-ad-player"></div>');

    if (myEnv == 'production') {
      const c = function () {
        cf.showAsyncAd(opts);
      };

      if (typeof window.cf !== 'undefined') {
        c();
      } else {
        window.cf_async = !0;
        const r = document.createElement('script'),
          s = document.getElementsByTagName('script')[0];
        r.async = !0;
        r.src = '//srv.tunefindforfans.com/fruits/apricots.js';

        r.readyState
          ? (r.onreadystatechange = function () {
              if ('loaded' == r.readyState || 'complete' == r.readyState) (r.onreadystatechange = null), c();
            })
          : (r.onload = c);

        s.parentNode.insertBefore(r, s);
      }
    }

    setTimeout(() => {
      const elements = document.querySelectorAll('.cf_class');
      elements.forEach(element => {
        element.style.setProperty('color', '#fff', 'important');
      });

      const songTitleElement = document.querySelectorAll(
        '.c-music-ad-player table tbody tr > td:nth-child(2) > .cf_class:first-child',
      );
      songTitleElement.forEach(element => {
        element.style.setProperty('font-size', '15px', 'important');
      });

      const songDescriptionElement = document.querySelectorAll(
        '.c-music-ad-player table tbody tr > td:nth-child(2) > .cf_class:last-child',
      );
      songDescriptionElement.forEach(element => {
        element.style.setProperty('font-size', '11px', 'important');
      });

      // const songBorder2 = document.querySelectorAll(
      //   '.c-music-ad-player table tbody tr > td:nth-child(2) > .cf_class:first-child',
      // );
      // songBorder2.forEach(element => {
      //   element.style.etProperty('border-top', '2px solid rgba(255, 255, 255, 0.3)', 'important');
      // });

      // const leftCircle = document.querySelectorAll(
      //   '.c-music-ad-player table tbody tr > td:nth-child(1) > .cf_class:first-child',
      // );
      // leftCircle.forEach(element => {
      //   element.style.setProperty('background-color', 'rgba(255, 255, 255, 0.3)', 'important');
      // });

      const leftCircle = document.querySelectorAll(
        'table tbody tr > td:nth-child(3) > .cf_class',
      );
      leftCircle.forEach(element => {
        element.style.setProperty('background-color', 'rgba(255, 255, 255, 0.3)', 'important');
      });

      const rightCircle = document.querySelectorAll(
        '.c-music-ad-player table tbody tr > td:nth-child(3) > .cf_class',
      );
      rightCircle.forEach(element => {
        element.style.setProperty('background-color', 'rgba(255, 255, 255, 0.3)', 'important');
      });

      const svgIcons = document.querySelectorAll(
        '.c-music-ad-player table tbody tr svg',
      );
      svgIcons.forEach(element => {
        element.style.setProperty('fill', '#fff', 'important');
      });

      const songRightCircleElement = document.querySelectorAll(
        '.c-music-ad-player table > tbody > tr > td:nth-child(3) > div',
      );
      songRightCircleElement.forEach(element => {
        element.style.setProperty('background-color', 'rgb(228, 228, 228)', 'important');
      });
    }, 1000);
  }, [1000]);

  return null;
};

export default AdTonefuseComponent;
