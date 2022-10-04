import styles from '@styles/pages/Home.module.css';

import type { NextPage } from 'next';

import Head from 'next/head';

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Chime</title>
        <meta name="description" content="Chime clone home page" />
      </Head>

      blah
    </div>
  )
}

export default Home
