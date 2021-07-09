import { GetStaticProps } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import Layout from '../components/layout';
import {
    customLoader,
    getAllDesigns,
    GroupPicsType,
} from '../components/utils';
import Masonry from 'react-masonry-css';
import designs from '../public/designs.json';
import styles from '../styles/design.module.css';

export const getStaticProps: GetStaticProps = async (context) => {
    var allDesignsData = getAllDesigns();
    return {
        props: {
            allDesignsData,
        },
    };
};

export default function Design({
    allDesignsData,
}: {
    allDesignsData: GroupPicsType;
}) {
    return (
        <Layout>
            <Head>
                <title>Diseño - Damián Ponce</title>
                <meta
                    name='viewport'
                    content='width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0'
                />
            </Head>

            <div className='section'>
                <div className='section-title'>
                    <div className='big-title'>di•se•ño</div>
                    <div className='big-title-spell'>sustantivo</div>
                    {/* /dɪˈzʌɪn/ */}
                    <div className='definitions'>
                        1. Actividad que une la creatividad y la técnica con el
                        fin de crear objetos útiles y bellos.
                    </div>
                    <div className='separator' />
                </div>
                <div className='section-spacer' />
                <div className='section-intro'>
                    <p>
                        El diseño está en todos lados, nos rodea día a día. A
                        veces se nota, y hasta llegamos a quejarnos de los que
                        están mal realizados.
                    </p>
                    <p>
                        Pero hay ocasiones en las cuales un objeto o una
                        herramienta simplemente existe, y cumple su funcion.
                        Esas cosas son consecuencia de un buen diseño.
                    </p>
                    <p>
                        La meta del diseño como herramienta artística o técnica
                        es comunicar o realizar una tarea de la mejor manera
                        posible. El diseño de verdad y bien hecho no se ve como
                        un diseño, es lo que tiene que ser.
                    </p>
                </div>
            </div>

            {Object.entries(designs).map((key) => {
                return (
                    <div className={styles.topic} id='topic' key={key[0]}>
                        <div className={styles.title}>{key[0]}</div>
                        {Object.entries(key[1]).map((key) => {
                            let cols = {};
                            switch (key[1]['cols']) {
                                case 3:
                                    cols = {
                                        default: 3,
                                        1000: 2,
                                        650: 1,
                                    };
                                    break;
                                case 2:
                                    cols = {
                                        default: 2,
                                        800: 1,
                                    };
                                    break;
                                case 1:
                                    cols = {
                                        default: 1,
                                    };
                                    break;
                            }
                            return (
                                <>
                                    <div className={styles.subtitle}>
                                        {key[1]['desc']}
                                    </div>

                                    {/* <h2 className='big-title-spell'>
                                            {key[1]['cols']}
                                        </h2>

                                        <h2 className='big-title-spell'>
                                            {key[1]['pics']}
                                        </h2> */}
                                    <Masonry
                                        breakpointCols={cols}
                                        className='masonry-grid'
                                        columnClassName='masonry-grid_column'
                                    >
                                        {key[1]['pics'].map((key, value) => (
                                            <div
                                                key={key}
                                                className={styles.card}
                                            >
                                                {allDesignsData[key] ? (
                                                    <Image
                                                        className={
                                                            styles.image +
                                                            ' no-touch'
                                                        }
                                                        loader={customLoader}
                                                        src={
                                                            allDesignsData[key]
                                                                .fullPath
                                                        }
                                                        alt={
                                                            allDesignsData[key]
                                                                .id
                                                        }
                                                        width={650}
                                                        height={
                                                            650 /
                                                            allDesignsData[key]
                                                                .ratio
                                                        }
                                                        quality={100}
                                                    />
                                                ) : null}
                                            </div>
                                        ))}
                                    </Masonry>
                                </>
                            );
                        })}
                    </div>
                );
            })}
        </Layout>
    );
}

{
    /* <Masonry
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
</Masonry> */
}
