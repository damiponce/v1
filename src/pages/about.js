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
                    style={{ marginBottom: '30px', marginInline: '2rem' }}
                >
                    <Image
                        loader={customLoader}
                        src='/dam-headshot-1.png' // <--- /dam-headshot-1.png
                        width={400}
                        height={400}
                        quality={100}
                    />
                </div>
                <div className={styles.intro + ' section-intro'}>
                    <div className={styles.name}>
                        Hola, soy <br />
                        Damián Ponce
                    </div>
                    <div className={styles.subname}>
                        Soy un técnico en aviónica con intereses en la
                        programación, el diseño y la fotografía. Actualmente
                        estoy estudiando ingeniería aeronáutica. Soy una persona
                        autodidacta, y muy atenta a los detalles finos al
                        momento de trabajar en cualquier proyecto.
                    </div>
                </div>
            </div>
            <div className={styles.all_groups}>
                <div className={styles.group}>
                    <div className={styles.abilities_title}>Capacidades</div>
                    <div className={styles.abilities_text}>
                        Puedo manejar varias herramientas de imagen, audio y
                        video como{' '}
                        <b>
                            Adobe Photoshop, Illustrator, Lightroom y After
                            Effects.
                        </b>{' '}
                        También tengo experiencia con software de diseño 3D/CAD
                        como <b>Autodesk AutoCAD, Fusion 360 y Cinema4D.</b>
                    </div>
                </div>
                <div className={styles.group}>
                    <div className={styles.abilities_title}>Experiencias</div>
                    <div className={styles.abilities_text}>
                        Participé de la competencia internacional{' '}
                        <a
                            href='https://2019.spaceappschallenge.org/challenges/living-our-world/bloom-or-not-bloom/teams/quid-pro-algae/project'
                            target='_blank'
                            meta='wul'
                        >
                            NASA Space Apps Challenge 2019
                        </a>
                        ; en la cual ayudé al diseño parcial de los gráficos
                        para el proyecto y también a la realización del proyecto
                        en sí.
                    </div>
                </div>
            </div>
        </Layout>
    );
}
