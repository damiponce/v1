import Head from 'next/head';
import Link from 'next/link';
import Layout from '../components/layout';

export default function Work() {
    return (
        <Layout>
            <Head>
                <title>Programación - Damián Ponce</title>
                <meta
                    name='viewport'
                    content='width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0'
                />
            </Head>

            <h1 className='big-title'>En desarrollo.</h1>
        </Layout>
    );
}
