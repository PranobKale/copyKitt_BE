import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Copykitt from '../components/copykitt'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Tagline Generator | AI Generated Marketing</title>
        <meta name="description" content="Generat branding snippets for your product" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Copykitt/>
    </div>
  )
}

export default Home
