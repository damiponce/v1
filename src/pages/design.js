import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import Layout from '../components/layout';
import {
    BrowserView,
    MobileView,
    isBrowser,
    isMobile,
} from 'react-device-detect';
import { getAllPictures } from '../lib/pictures';
// import Masonry, { ResponsiveMasonry } from 'react-responsive-masonry';
import Masonry from 'react-masonry-css';
import { customLoader } from '../components/utils';

import styles from '../styles/photography.module.css';

// function importAll(r) {
//     console.log(r);
//     return r.keys().forEach(r);
// }

export async function getStaticProps() {
    var allPicturesData = getAllPictures();
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
    // var listOfImages = [];

    // listOfImages = importAll(
    //     require.context(
    //         '../public/images/photos',
    //         false,
    //         /\.(png|jpe?g|svg)$/i,
    //     ),
    // );

    return (
        <Layout>
            <Head>
                <title>Design - Damián Ponce</title>
            </Head>

            <div className='big-title'>de•sign</div>
            <div className='big-title-spell'>/dɪˈzʌɪn/ noun</div>
            <div className='definitions'>1. A silly definition</div>

            {/* <ResponsiveMasonry
                columnsCountBreakPoints={{ 400: 1, 650: 2, 1000: 3 }}
            > */}
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
            {/* </ResponsiveMasonry> */}

            {/* <div className={styles.grid}>
                {allPicturesData.map((pic) => (
                    <div className={styles.card}>
                        <Image
                            className={styles.image}
                            src={pic.fullPath}
                            alt={pic.id}
                            width={500}
                            height={500 / pic.ratio}
                            quality={100}
                        ></Image>
                    </div>
                ))}
            </div> */}
        </Layout>
    );
}
