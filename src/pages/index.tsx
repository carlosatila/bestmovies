import type { NextPage } from 'next'
import Head from 'next/head'
import Header from '../components/Header'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Best Movies</title>
        <meta name="description" content="Filmes mais populares do momento" />
      </Head>

      <main className={styles.main}>
        <Header />
      </main>
    </div>
  )
}

export default Home
