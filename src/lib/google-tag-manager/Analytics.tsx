'use client';

// core
import Script from 'next/script';

const myEnv = process.env.NEXT_PUBLIC_MY_ENV || '';

export default function Analytics() {
  /* eslint-disable @next/next/no-img-element,jsx-a11y/alt-text */
  return (
    <>
      {myEnv == 'production' && (
        <>
          <Script id='gtmv4-core' src='https://www.googletagmanager.com/gtag/js?id=AW-16579832988' />
          <Script id='gtmv4-script'>
            {`window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());

        gtag('config', 'AW-16579832988');`}
          </Script>
        </>
      )}
    </>
  );
  /* eslint-enable @next/next/no-img-element,jsx-a11y/alt-text */
}
