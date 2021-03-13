import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import Layout from '../components/layout';
import Masonry from 'react-masonry-css';
import { customLoader, getAllPhotos } from '../components/utils';

import styles from '../styles/photography.module.css';

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

            <div className='big-title'>pho•to•gra•phy</div>
            <div className='big-title-spell'>/fəˈtɒɡ.rə.fi/ noun</div>
            <div className='definitions'>1. A silly definition</div>

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
                        ></Image>
                    </div>
                ))}
            </Masonry>
        </Layout>
    );
}
