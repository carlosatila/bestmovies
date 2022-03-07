import type { NextPage } from 'next'
import Head from 'next/head'
import { useEffect, useState } from 'react'
import Header from '../components/Header'
import MoviesList from '../components/MoviesList'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const result = await fetch('api/movies');
      const data = await result.json();

      setMovies(data?.results);
    };

    fetchData();
  }, []);

  return (
    <div className={styles.container}>
      <Head>
        <title>Best Movies</title>
        <meta name="description" content="Filmes mais populares do momento" />
      </Head>

      <main className={styles.main}>
        <Header />
        <MoviesList data={movies} />
      </main>
    </div>
  )
}

export default Home
