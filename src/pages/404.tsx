import styles from '../styles/404.module.css';
import Head from 'next/head';

export default function Custom404() {
   return (
      <div className={styles.body + ' no-touch'}>
         <Head>
            <title>Oops!</title>
            <meta
               name="viewport"
               content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0"
            />
         </Head>
         <img className={styles.oops} src="/oops.svg" alt="" />
      </div>
   );
}
