import Head from 'next/head';
import Link from 'next/link';
import Layout from '../components/layout';
import {
    BrowserView,
    MobileView,
    isBrowser,
    isMobile,
} from 'react-device-detect';

export default function Work() {
    return (
        <Layout>
            <Head>
                <title>Coding - Damián Ponce</title>
            </Head>

            <h1 className='title'>WIP</h1>
        </Layout>
    );
}
