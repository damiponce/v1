import React from 'react';
import App from 'next/app';
import Script from 'next/script'
import Providers from '../components/Providers.js';
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

            <Script
               src="https://www.googletagmanager.com/gtag/js?id=G-YV5ZCWEK9T"
               strategy="afterInteractive"
            />
            <Script id="google-analytics" strategy="afterInteractive">
               {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'G-YV5ZCWEK9T');
        `}
            </Script>

            <Component {...pageProps} />
         </Providers>
      );
   }
}
