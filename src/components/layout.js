import Head from 'next/head';
import Image from 'next/image';
import styles from './layout.module.scss';
import utilStyles from '../styles/utils.module.css';
import Link from 'next/link';
import { useEffect } from 'react';

export default function Layout({ children }) {
    useEffect(() => {
        let header = document.getElementById('js-header');
        let mainNav = document.getElementById('js-menu');
        let navBarToggle = document.getElementById('js-burger');
        navBarToggle.addEventListener('click', function () {
            mainNav.classList.toggle(styles.active);
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
                <link rel='icon' href='/favicon.ico' />
            </Head>
            <header className={styles.header} id='js-header'>
                <div className={styles.logo}>
                    <Link href='/'>
                        <img src='/dp-logo.svg' width='30' height='20' />
                    </Link>
                </div>
                <div className={styles.spacer} />
                <div className={styles.burger} id='js-burger'>
                    <img src='/burger-menu.svg' width='30' height='20' />
                </div>
                <div className={styles.links} id='js-menu'>
                    <Link href='/coding'>
                        <a meta='aul'>Coding</a>
                    </Link>
                    <Link href='/design'>
                        <a meta='aul'>Design</a>
                    </Link>
                    <Link href='/photography'>
                        <a meta='aul'>Photography</a>
                    </Link>
                    <Link href='/about'>
                        <a meta='aul'>About me</a>
                    </Link>
                </div>
            </header>
            <main>{children}</main>
            {/* <footer className={styles.footer}></footer> */}
        </div>
    );
}
