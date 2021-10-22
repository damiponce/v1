import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import NavLink from '../components/NavLink.js';

import styles from '../styles/index.module.css';

export default function Home() {
    return (
        <div className='container'>
            <Head>
                <title>Portfolio de Damián</title>
                <link rel='shortcut icon' href='/favicon.ico' />
                <meta
                    name='viewport'
                    content='width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0'
                />
            </Head>

            <main className={styles.main} id='main_home'>
                <h1 className='title'>Hola, soy Damián</h1>

                <p className='description'>
                    Soy un desarrollador aficionado, y un diseñador gráfico y
                    fotógrafo por diversión.
                </p>

                <div className={styles.pageLinksGroup}>
                    {/* // @ts-ignore */}
                    <NavLink>
                        <Link href='/photography'>
                            <a className={styles.pageLink}>Fotografía</a>
                        </Link>
                    </NavLink>
                    <NavLink>
                        <Link href='/design'>
                            <a className={styles.pageLink}>Diseño</a>
                        </Link>
                    </NavLink>
                    <NavLink>
                        <Link href='/coding'>
                            <a className={styles.pageLink}>Programación</a>
                        </Link>
                    </NavLink>
                    <NavLink>
                        <Link href='/about'>
                            <a className={styles.pageLink}>Sobre mí</a>
                        </Link>
                    </NavLink>
                </div>

                <div className={styles.socialLinks}>
                    <NavLink>
                        <a
                            href='mailto:dami.ponce8@gmail.com'
                            target='_blank'
                            rel='noreferrer'
                            className={styles.socialIcon}
                        >
                            Email
                        </a>
                    </NavLink>
                    <NavLink>
                        <a
                            href='https://www.linkedin.com/in/damianponce/'
                            target='_blank'
                            rel='noreferrer'
                            className={styles.socialIcon}
                        >
                            LinkedIn
                        </a>
                    </NavLink>
                    <NavLink>
                        <a
                            href='https://github.com/damiponce/cv/raw/main/cv.pdf'
                            target='_blank'
                            rel='noreferrer'
                            className={styles.socialIcon}
                        >
                            CV
                        </a>
                    </NavLink>
                    <NavLink>
                        <a
                            href='https://github.com/damiponce'
                            target='_blank'
                            rel='noreferrer'
                            className={styles.socialIcon}
                        >
                            GitHub
                        </a>
                    </NavLink>
                    {/* <NavLink  style={{padding: 8}}>
                    <a
                        href='https://www.behance.net/damianarielponce'
                        target='_blank'
                        rel="noreferrer"
                        className={styles.socialIcon}
                    >
                        B
                    </a></NavLink> */}
                    <NavLink>
                        <a
                            href='https://www.instagram.com/damiponce28/'
                            target='_blank'
                            rel='noreferrer'
                            className={styles.socialIcon}
                        >
                            Instagram
                        </a>
                    </NavLink>
                    <NavLink>
                        <a
                            href='https://twitter.com/damiponce28'
                            target='_blank'
                            rel='noreferrer'
                            className={styles.socialIcon}
                        >
                            Twitter
                        </a>
                    </NavLink>
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
