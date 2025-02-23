import Head from 'next/head';
import styles from '../styles/layout.module.scss';
import indexStyles from '../styles/index.module.scss';
import Link from 'next/link';
import { useEffect } from 'react';

export default function Layout({ children }) {
   useEffect(() => {
      let header = document.getElementById('js-header');
      let mainNav = document.getElementById('js-menu');
      let navBarToggle = document.getElementById('js-burger');
      navBarToggle.addEventListener('click', function () {
         mainNav.classList.contains(styles.active)
            ? setTimeout(() => mainNav.classList.toggle(styles.active), 150) // change (in ms) with .header <layout.module.scss> transition
            : mainNav.classList.toggle(styles.active);

         header.classList.toggle(styles.height);
      });

      window.onscroll = function () {
         stickNavBar();
      };

      // Get the offset position of the navbar
      var sticky = header.offsetTop;

      // Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
      function stickNavBar() {
         if (window.pageYOffset >= sticky) {
            header.classList.add('sticky');
         } else {
            header.classList.remove('sticky');
         }
      }
   }, []);

   return (
      <div className={styles.container}>
         <Head>
            <link rel="icon" href="/favicon.ico" />
         </Head>
         <header className={styles.header} id="js-header">
            <div className={styles.logo}>
               <Link href="/" passHref>
                  <img src="/dp-logo.svg" width="30" height="20" alt="" />
               </Link>
            </div>
            <div className={styles.spacer} />
            <div className={styles.burger} id="js-burger">
               <img src="/burger-menu.svg" width="30" height="20" alt="" />
            </div>
            <div className={styles.links} id="js-menu">
               {/* IMPORTANTE: usar mismas CAPS en data-text y en el contenido (bold hover shift prevention)*/}
               <Link href="/photography" passHref>
                  <a className={styles.link} data-text="fotografía">
                     fotografía
                  </a>
               </Link>

               <Link href="/design" passHref>
                  <a className={styles.link} data-text="diseño">
                     diseño
                  </a>
               </Link>

               <Link href="/coding" passHref>
                  <a className={styles.link} data-text="programación">
                     programación
                  </a>
               </Link>

               <Link href="/about" passHref>
                  <a className={styles.link} data-text="sobre mí">
                     sobre mí
                  </a>
               </Link>
            </div>
         </header>
         <main>{children}</main>
         <div className="footer">
            <div className={indexStyles.socialIcon + ' ' + styles.copy}>
               © Damián Ponce 2021 {/* COPYRIGHT */}
            </div>
            <div className={indexStyles.socialLinks}>
               <a
                  href="mailto:dami.ponce8@gmail.com"
                  target="_blank"
                  rel="noreferrer"
                  className={indexStyles.socialIcon}
               >
                  Email
               </a>

               <a
                  href="https://github.com/damiponce"
                  target="_blank"
                  rel="noreferrer"
                  className={indexStyles.socialIcon}
               >
                  GitHub
               </a>

               <a
                  href="https://www.linkedin.com/in/damianponce/"
                  target="_blank"
                  rel="noreferrer"
                  className={indexStyles.socialIcon}
               >
                  LinkedIn
               </a>

               <a
                  href="https://github.com/damiponce/cv/raw/main/cv.pdf"
                  target="_blank"
                  rel="noreferrer"
                  className={indexStyles.socialIcon}
               >
                  CV
               </a>

               {/*
                    <a
                        href='https://www.behance.net/damianarielponce'
                        target='_blank'
                      rel="noreferrer"
                        className={indexStyles.socialIcon}
                    >
                        B
                    </a> */}

               <a
                  href="https://www.instagram.com/damiponce28/"
                  target="_blank"
                  rel="noreferrer"
                  className={indexStyles.socialIcon}
               >
                  Instagram
               </a>

               <a
                  href="https://twitter.com/damiponce28"
                  target="_blank"
                  rel="noreferrer"
                  className={indexStyles.socialIcon}
               >
                  Twitter
               </a>
            </div>
         </div>
      </div>
   );
}
