import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import Layout from '../components/layout';
import Masonry from 'react-masonry-css';
import { customLoader, getAllPhotos } from '../components/utils';

import styles from '../styles/photography.module.css';
import * as d_styles from '../styles/design.module.css';

export async function getStaticProps() {
    var allPicturesData = getAllPhotos();
    allPicturesData = shuffle(allPicturesData);

    return {
        props: {
            allPicturesData,
        },
    };
}

function shuffle(array) {
    var currentIndex = array.length,
        temporaryValue,
        randomIndex;

    while (0 !== currentIndex) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;

        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }

    return array;
}

export default function Photography({ allPicturesData }) {
    return (
        <Layout>
            <Head>
                <title>Photography - Damián Ponce</title>
            </Head>

            <div className='section'>
                <div className='section-title'>
                    <div className='big-title'>fo•to•gra•fí•a</div>
                    <div className='big-title-spell'>sustantivo</div>
                    {/* /fəˈtɒɡ.rə.fi/ */}
                    <div className='definitions'>
                        1. El arte de congelar el tiempo en una imagen
                    </div>
                    <div className='separator' />
                </div>
                <div className='section-spacer' />
                <div className='section-intro'>
                    <p>
                        La fotografía es la herramienta que en ocasiones me
                        ayuda a comunicar historias y sentimientos libremente. A
                        veces me encuentro sacandole fotos a objetos cuando me
                        llama la atención una luz o simplemente cuando quiero
                        compartirlo con otras personas.
                    </p>
                    <p>
                        Desde una piedra hasta una nube rara, cualquier foto
                        puede tener una historia detrás, y eso es lo que me
                        encanta de este arte.
                    </p>
                </div>
            </div>

            <Masonry
                breakpointCols={{ default: 3, 1000: 2, 650: 1 }}
                className='masonry-grid'
                columnClassName='masonry-grid_column'
            >
                {allPicturesData.map((pic) => (
                    <div key={pic.index} className={styles.card}>
                        <Image
                            className={styles.image + ' no-touch'}
                            loader={customLoader}
                            src={pic.fullPath}
                            alt={pic.id}
                            width={650}
                            height={650 / pic.ratio}
                            quality={100}
                        />
                    </div>
                ))}
            </Masonry>
        </Layout>
    );
}
