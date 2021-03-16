import Head from 'next/head';
import Link from 'next/link';
import Layout from '../components/layout';
import Image from 'next/image';
import { customLoader } from '../components/utils';
import styles from '../styles/about.module.css';
import * as social from '../styles/index.module.css';

export default function Work() {
    return (
        <Layout>
            <Head>
                <title>Sobre mí - Damián Ponce</title>
            </Head>

            {/* <h1 className='big-title'>En desarrollo.</h1> */}

            <div className={styles.section + ' section'}>
                <div
                    className={styles.picture + ' section-title'}
                    style={{ marginBottom: '15px', marginInline: '2rem' }}
                >
                    <Image
                        loader={customLoader}
                        src='/images/designs/dam-headshot-1.png' // <--- /dam-headshot-1.png
                        width={400}
                        height={400}
                        quality={100}
                    />
                </div>
                <div className={styles.intro + ' section-intro'}>
                    <div className={styles.name}>Hola, soy Damián Ponce</div>
                    <div className={styles.subname}>
                        Soy un técnico aviónico con intereses en la
                        programación, el diseño y la fotografía. Actualmente
                        estoy estudiando ingeniería aeronáutica.
                    </div>
                </div>
                {/* <div>
                    <div className={styles.name}></div>
                    <div className={styles.subname}>
                        
                    </div>
                </div> */}
            </div>
        </Layout>
    );
}
