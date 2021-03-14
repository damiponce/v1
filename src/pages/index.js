import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import {
    BrowserView,
    MobileView,
    isBrowser,
    isMobile,
} from 'react-device-detect';

import styles from '../styles/index.module.css';

export default function Home() {
    return (
        <div className='container'>
            <Head>
                <title>Portfolio de Damián</title>
                <link rel='shortcut icon' href='/favicon.ico' />
            </Head>

            <main className={styles.main} id='main_home'>
                <h1 className='title'>Hola, soy Damián</h1>

                <p className='description'>
                    Soy un desarrollador aficionado, y un diseñador gráfico y
                    fotógrafo por diversión.
                </p>

                <div className={styles.pageLinksGroup}>
                    <Link href='/coding'>
                        <a meta='aul' className={styles.pageLink}>
                            > Programación
                        </a>
                    </Link>
                    <Link href='/design'>
                        <a meta='aul' className={styles.pageLink}>
                            > Diseño
                        </a>
                    </Link>
                    <Link href='/photography'>
                        <a meta='aul' className={styles.pageLink}>
                            > Fotografía
                        </a>
                    </Link>
                    <Link href='/about'>
                        <a meta='aul' className={styles.pageLink}>
                            > Sobre mí
                        </a>
                    </Link>
                </div>

                <div className={styles.socialLinks}>
                    <a
                        href='mailto:dami.ponce8@gmail.com'
                        target='_blank'
                        className={styles.socialIcon}
                    >
                        M
                    </a>
                    <a
                        href='https://github.com/damiponce'
                        target='_blank'
                        className={styles.socialIcon}
                    >
                        G
                    </a>
                    <a
                        href='https://www.linkedin.com/in/damianponce/'
                        target='_blank'
                        className={styles.socialIcon}
                    >
                        L
                    </a>
                    <a
                        href='https://www.behance.net/damianarielponce'
                        target='_blank'
                        className={styles.socialIcon}
                    >
                        B
                    </a>
                    <a
                        href='https://www.instagram.com/damiponce28/'
                        target='_blank'
                        className={styles.socialIcon}
                    >
                        I
                    </a>
                    <a
                        href='https://twitter.com/damiponce28'
                        target='_blank'
                        className={styles.socialIcon}
                    >
                        T
                    </a>
                </div>
                {/* <Image
                    src={'/../public/100_9671.JPG'}
                    layout='fill'
                    objectFit='cover'
                ></Image> */}
            </main>
        </div>
    );
}
