import { GetStaticProps } from 'next';
import { useState, useEffect } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import Layout from '../components/layout';
import Viewer from '../components/viewer';
import { customLoader, getAllPhotos, PicType } from '../components/utils';
import Masonry from 'react-masonry-css';
import styles from '../styles/photography.module.css';

export const getStaticProps: GetStaticProps = async (context) => {
    var allPicturesData = getAllPhotos();
    allPicturesData = shuffle(allPicturesData);

    return {
        props: {
            allPicturesData,
        },
    };
};

function shuffle(array: PicType[]) {
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
    console.log(array);
    return array;
}

export default function Photography({
    allPicturesData,
}: {
    allPicturesData: PicType[];
}) {
    const [viewer, setViewer] = useState<PicType[] | null>();
    const [index, setIndex] = useState<number>(69);

    // Disables scroll when viewer is open
    useEffect(() => {
        viewer
            ? (document.body.style.overflow = 'hidden')
            : (document.body.style.overflow = 'unset');
        return;
    }, [viewer]);

    return (
        <Layout>
            <Head>
                <title>Photography - Damián Ponce</title>
                <meta
                    name='viewport'
                    content='width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0'
                />
            </Head>
            {viewer ? (
                <Viewer
                    onClick={() => setViewer(null)}
                    pic={viewer}
                    index={index}
                />
            ) : null}
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
                {allPicturesData.map((value: PicType, index: number) => (
                    <div key={value.index} className={styles.card}>
                        <Image
                            onClick={() => (
                                setViewer(allPicturesData), setIndex(index)
                            )}
                            className={styles.image + ' no-touch'}
                            loader={customLoader}
                            src={value.fullPath}
                            alt={value.id}
                            width={650}
                            height={650 / value.ratio}
                            quality={100}
                        />
                    </div>
                ))}
            </Masonry>
        </Layout>
    );
}
