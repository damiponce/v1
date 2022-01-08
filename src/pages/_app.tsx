import React from 'react';
import App from 'next/app';
import Script from 'next/script'
import Script from 'next/script';
import Providers from '../components/Providers.js';
import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { GTM_ID, pageview } from '../components/gtm';
import '../styles/global.scss';

export default class MyApp extends App {
   render() {
      const { Component, pageProps } = this.props;
      return (
         <Providers>
            <style global jsx>{`
               html,
               body,
               body > div:first-child,
               div#__next {
                  height: 100%;
               }
            `}</style>
function App({ Component, pageProps }: { Component: any; pageProps: any }) {
   const router = useRouter();
   useEffect(() => {
      router.events.on('routeChangeComplete', pageview);
      return () => {
         router.events.off('routeChangeComplete', pageview);
      };
   }, [router.events]);

            <Script
   return (
      <Providers>
         <style global jsx>{`
            html,
            body,
            body > div:first-child,
            div#__next {
               height: 100%;
            }
         `}</style>

          gtag('config', 'G-YV5ZCWEK9T');
        `}
            </Script>
         <Script
            id="gtm-script"
            strategy="afterInteractive"
            dangerouslySetInnerHTML={{
               __html: `
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer', '${GTM_ID}');
          `,
            }}
         />

         <Component {...pageProps} />
      </Providers>
   );
}

export default App;
