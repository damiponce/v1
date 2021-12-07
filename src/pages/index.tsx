import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import NavLink from '../components/NavLink.js';

import styles from '../styles/index.module.scss';

export default function Home() {
   return (
      <div className="container">
         <Head>
            <title>Portfolio de Damián</title>
            <link rel="shortcut icon" href="/favicon.ico" />
            <meta
               name="viewport"
               content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0"
            />
         </Head>

         <main className={styles.main} id="main_home">
            <h1 className="title">Hola, soy Damián</h1>

            <p className="description">
               Soy un desarrollador aficionado, y un diseñador gráfico y
               fotógrafo por diversión.
            </p>
            <div className={styles.dividerContainer}>
               <div className={styles.divider}></div>
            </div>
            <div className={styles.pageLinksGroup}>
               {/* // @ts-ignore */}

               <Link href="/photography">
                  <a className={styles.pageLink}>{'>fotografía'}</a>
               </Link>

               <Link href="/design">
                  <a className={styles.pageLink}>{'>diseño'}</a>
               </Link>

               <Link href="/coding">
                  <a className={styles.pageLink}>{'>programación'}</a>
               </Link>

               <Link href="/about">
                  <a className={styles.pageLink}>{'>sobre mí'}</a>
               </Link>
            </div>

            <ul className={styles.socialLinks}>
               <li className={styles.socialListItem}>
                  <a
                     href="mailto:dami.ponce8@gmail.com"
                     target="_blank"
                     rel="noreferrer"
                     className={styles.socialIcon}
                  >
                     Email
                  </a>
               </li>
               <li className={styles.socialListItem}>
                  <a
                     href="https://github.com/damiponce"
                     target="_blank"
                     rel="noreferrer"
                     className={styles.socialIcon}
                  >
                     GitHub
                  </a>
               </li>

               <li className={styles.socialListItem}>
                  <a
                     href="https://www.linkedin.com/in/damianponce/"
                     target="_blank"
                     rel="noreferrer"
                     className={styles.socialIcon}
                  >
                     LinkedIn
                  </a>
               </li>

               <li className={styles.socialListItem}>
                  <a
                     href="https://github.com/damiponce/cv/raw/main/cv.pdf"
                     target="_blank"
                     rel="noreferrer"
                     className={styles.socialIcon}
                  >
                     CV
                  </a>
               </li>

               {/* <NavLink  style={{padding: 8}}>
                    <a
                        href='https://www.behance.net/damianarielponce'
                        target='_blank'
                        rel="noreferrer"
                        className={styles.socialIcon}
                    >
                        B
                    </a> */}

               <li className={styles.socialListItem}>
                  <a
                     href="https://www.instagram.com/damiponce28/"
                     target="_blank"
                     rel="noreferrer"
                     className={styles.socialIcon}
                  >
                     Instagram
                  </a>
               </li>

               <li className={styles.socialListItem}>
                  <a
                     href="https://twitter.com/damiponce28"
                     target="_blank"
                     rel="noreferrer"
                     className={styles.socialIcon}
                  >
                     Twitter
                  </a>
               </li>
            </ul>
            {/* <Image
                    src={'/../public/100_9671.JPG'}
                    layout='fill'
                    objectFit='cover'
                ></Image> */}
         </main>
      </div>
   );
}
