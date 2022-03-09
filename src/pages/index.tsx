import type { NextPage } from 'next'
import Head from 'next/head'
import { useEffect } from 'react'
import { useAppSelector, useAppDispatch } from '../app/hooks'
import {
  fetchAsync,
  selectMovies,
  statusMovie,
  selectedMovie,
  fetchDetailsAsync,
} from '../modules/movies/moviesSlice'
import Header from '../components/Header'
import MoviesList from '../components/MoviesList'
import MovieDetails from '../components/MovieDetails'
import styles from '../styles/Home.module.css'

interface MovieProp {
  id: number;
  poster_path: string;
  vote_average: number;
  title: string;
  release_date: Date;
}

const Home: NextPage = () => {
  const dispatch = useAppDispatch();
  const movie = useAppSelector(selectedMovie);
  const movies = useAppSelector(selectMovies);
  const status = useAppSelector(statusMovie);

  useEffect(() => {
    dispatch(fetchAsync())
  }, [dispatch]);

  const handleSelectMovie = (movie: MovieProp) => {
    dispatch(fetchDetailsAsync(movie.id.toString()));
  }

  return (
    <div className={styles.container}>
      <Head>
        <title>Best Movies</title>
        <meta name="description" content="Filmes mais populares do momento" />
      </Head>

      <main className={styles.main}>
        <Header />
        {(movie && !!Object.keys(movie).length)
          ? <MovieDetails movie={movie} />
          : <MoviesList
              data={movies}
              status={status}
              onClick={(movie: MovieProp) => handleSelectMovie(movie)}
            />
        }
      </main>
    </div>
  )
}

export default Home
