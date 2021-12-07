import { GetStaticProps } from 'next';
import { useState, useEffect } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import Layout from '../components/layout';
import Viewer from '../components/viewer';
import {
   customLoader,
   getAllDesigns,
   GroupPicsType,
   PicType,
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
   const [viewer, setViewer] = useState<GroupPicsType | null>();
   const [index, setIndex] = useState<number>(69);
   const [title, setTitle] = useState<string>('');
   const [group, setGroup] = useState<number>(0);

   useEffect(() => {
      viewer
         ? (document.body.style.overflow = 'hidden')
         : (document.body.style.overflow = 'unset');
      return;
   }, [viewer]);

   // split the string tag at the § symbol into an array of two strings. if no symbol is found, let the second item be the first item. make sure the second item is all lowercase and every non-alphanumeric character is an underline. then return the two item array
   function parseTopic(tag: string) {
      let topic = tag.split('§');
      if (topic.length === 1) {
         topic = [topic[0], topic[0]];
      }
      topic[1] = topic[1].replace(/[^a-z0-9ñ]/gi, '_').toLowerCase();
      return topic;
   }

   return (
      <Layout>
         <Head>
            <title>Diseño - Damián Ponce</title>
            <meta
               name="viewport"
               content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0"
            />
         </Head>
         {viewer ? (
            <Viewer
               onClick={() => setViewer(null)}
               pic={viewer}
               index={index}
               title={title}
               group={group}
            />
         ) : null}
         <div className="section">
            <div className="section-title">
               <div className="big-title">di•se•ño</div>
               <div className="big-title-spell">sustantivo</div>
               {/* /dɪˈzʌɪn/ */}
               <div className="definitions">
                  1. Actividad que une la creatividad y la técnica con el fin de
                  crear objetos útiles y bellos.
               </div>
               <div className="separator" />
            </div>
            <div className="section-spacer" />
            <div className="section-intro">
               <p>
                  El diseño está en todos lados, nos rodea día a día. A veces se
                  nota, y hasta llegamos a quejarnos de los que están mal
                  realizados.
               </p>
               <p>
                  Pero hay ocasiones en las cuales un objeto o una herramienta
                  simplemente existe, y cumple su funcion. Esas cosas son
                  consecuencia de un buen diseño.
               </p>
               <p>
                  La meta del diseño como herramienta artística o técnica es
                  comunicar o realizar una tarea de la mejor manera posible. El
                  diseño de verdad y bien hecho no se ve como un diseño, es lo
                  que tiene que ser.
               </p>
            </div>
         </div>

         {Object.entries(designs).map((key) => {
            return (
               <div className={styles.topic} id="topic" key={key[0]}>
                  <div
                     className={styles.hashPadding}
                     id={parseTopic(key[0])[1]}
                  ></div>
                  <>
                     <a
                        className={styles.title}
                        href={'#' + parseTopic(key[0])[1]}
                     >
                        {parseTopic(key[0])[0]}{' '}
                        <img
                           className={styles.linkIcon + ' no-touch'}
                           src="/icons/link.svg"
                           width="30"
                           height="25"
                           alt="link"
                        />
                     </a>
                  </>
                  {Object.entries(key[1]).map((llave, index) => {
                     let cols = {};
                     switch (llave[1]['cols']) {
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
                              {llave[1]['desc']}
                           </div>

                           {/* <h2 className='big-title-spell'>
                                            {key[1]['cols']}
                                        </h2>

                                        <h2 className='big-title-spell'>
                                            {key[1]['pics']}
                                        </h2> */}

                           <Masonry
                              breakpointCols={cols}
                              className="masonry-grid"
                              columnClassName="masonry-grid_column"
                           >
                              {llave[1]['pics'].map((clef) => (
                                 <div key={clef} className={styles.card}>
                                    {allDesignsData[clef] ? (
                                       <Image
                                          onClick={() => (
                                             setViewer(allDesignsData),
                                             setIndex(index),
                                             setTitle(key[0]),
                                             setGroup(
                                                //  llave[1][
                                                //      'desc'
                                                //  ],
                                                index
                                             )
                                          )}
                                          className={styles.image + ' no-touch'}
                                          loader={customLoader}
                                          src={allDesignsData[clef].fullPath}
                                          alt={allDesignsData[clef].id}
                                          width={650}
                                          height={
                                             650 / allDesignsData[clef].ratio
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
