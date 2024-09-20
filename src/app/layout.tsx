import { Metadata, MetadataRoute } from 'next/types';
import { Viewport } from 'next';
import dynamic from 'next/dynamic';
import Script from 'next/script';

/* Instruments */
// import { Providers } from '~/lib/providers';
import ToastProvider from '~/lib/react-toastify/toast.provider';

// lib
import Analytics from '~/lib/google-tag-manager/Analytics';
import ClarityScripts from '~/lib/clarity/clarity';

import GlobalSetting from '~/settings/GlobalSetting';
import { metaParams } from '~/constants/meta';
import { viewPortParams } from '~/constants/viewport';
import { notoSansJP } from '~/constants/fonts';

// import styles from './styles/layout.module.css';
import BaseCSS from '~/components/foundation/baseCSS';

import { Providers } from '~/lib/providers';

/* Components */
import '~/app/styles/reset.css';
import '~/app/styles/globals.css';
import '~/app/styles/color.css';
// import '~/app/styles/prohibition.css'; // コピー禁止スタイル

import '~/app/styles/lib/embla/embla.css';
import '~/app/styles/lib/embla/embla.parallax.css';
import '~/app/styles/lib/embla/embla.thumb.css';

import '~/app/styles/layout.css';
import '~/app/styles/space.css';
import '~/app/styles/typography.css';
import '~/app/styles/flex.css';
import '~/app/styles/grid.css';

import QueryProviders from './query.provider';

const myEnv = process.env.NEXT_PUBLIC_MY_ENV;
myEnv != 'production' && GlobalSetting;

export const metadata: Metadata = metaParams;
export const viewport: Viewport = viewPortParams;

const DynamicStyledComponentsRegistry = dynamic(() => import('~/lib/styled-components/registry'));
// const DynamicEmblaCarouselCSS = dynamic(() => import('~/components/foundation/emblaCarouselCSS'));
const DynamicReactConfirmAlertCSS = dynamic(() => import('~/components/foundation/reactConfirmAlertCSS'));

// NOTE: <Providers></Providers> は htmlタグ、bodyタグの中に入れないと開発環境の hot reloadでエラーが発生します。
export default function RootLayout(props: React.PropsWithChildren) {
  return (
    <html lang='ja' className={notoSansJP.variable} id='hbc'>
      <Analytics />
      {/* <ClarityScripts /> */}

      {/* <Script id='twitter-widgets'>{`window.twttr = (function(d, s, id) {
  var js, fjs = d.getElementsByTagName(s)[0],
    t = window.twttr || {};
  if (d.getElementById(id)) return t;
  js = d.createElement(s);
  js.id = id;
  js.src = "https://platform.twitter.com/widgets.js";
  fjs.parentNode.insertBefore(js, fjs);

  t._e = [];
  t.ready = function(f) {
    t._e.push(f);
  };

  return t;
}(document, "script", "twitter-wjs"));`}</Script> */}

      <Script
        id='adsbygoogle'
        async
        src='https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js'
        crossOrigin='anonymous'></Script>

      <Script
        id='adbfonts-hbc'
        dangerouslySetInnerHTML={{
          __html: `
              (function(d) {
                var config = {
                  kitId: 'hkw1zqw',
                  scriptTimeout: 3000,
                  async: true
                },
                    h=d.documentElement,t=setTimeout(function(){h.className=h.className.replace(/\bwf-loading\b/g,"")+" wf-inactive";},config.scriptTimeout),tk=d.createElement("script"),f=false,s=d.getElementsByTagName("script")[0],a;h.className+=" wf-loading";tk.src='https://use.typekit.net/'+config.kitId+'.js';tk.async=true;tk.onload=tk.onreadystatechange=function(){a=this.readyState;if(f||a&&a!="complete"&&a!="loaded")return;f=true;clearTimeout(t);try{Typekit.load(config)}catch(e){}};s.parentNode.insertBefore(tk,s)
              })(document);
            `,
        }}
      />

      <link rel='preconnect' href='https://fonts.googleapis.com' />
      <link rel='preconnect' href='https://fonts.gstatic.com' />
      <link href='https://fonts.googleapis.com/css2?family=Quicksand:wght@300..700&display=swap' rel='stylesheet' />

      <body>
        {/* NOTE: ここで Providers を使用するとページ読み込み時の初期画面が真っ白になるため、カウンセリングフォームのフォルダのlayoutで定義しています。 */}
        <ToastProvider>
          <DynamicStyledComponentsRegistry>
            <BaseCSS />
            <DynamicReactConfirmAlertCSS />

            <main style={{ position: 'relative', zIndex: 0, height: '100%' }}>
              <QueryProviders>
                <Providers>{props.children}</Providers>
              </QueryProviders>
            </main>
          </DynamicStyledComponentsRegistry>
        </ToastProvider>
      </body>

      {/* {myEnv != 'production' && <GlobalSetting />} */}
    </html>
  );
}
