'use client';

const myEnv = process.env.NEXT_PUBLIC_MY_ENV;

// core
import Script from 'next/script';

export default function ClarityScripts() {
  return (
    <>
      {myEnv == 'production' && (
        <>
          <Script id='clarity-script' type='text/javascript'>
            {`(function(c,l,a,r,i,t,y){
          c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
          t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
          y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
      })(window, document, "clarity", "script", "njiyqc881q");`}
          </Script>
        </>
      )}
    </>
  );
}
