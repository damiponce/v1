import styles from '../styles/404.module.css';
import Image from 'next/image';
import Head from 'next/head';

export default function Custom404() {
    return (
        <div className={styles.body + ' no-touch'}>
            <Head>
                <title>Oops!</title>
            </Head>
            <img
                className={styles.oops}
                src='/oops.svg'
                viewbox='0 0 100% 100%'
            />
        </div>
    );
}
