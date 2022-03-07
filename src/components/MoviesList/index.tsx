import Image from 'next/image';
import { config } from '../../config';
import styles from './MoviesList.module.css'

type MoviesProp = {
  data: Array<any>;
}

const MoviesList = (data: MoviesProp) => {
  return (
    <section className={styles.movies}>
      <div className={styles.grid}>
        {data.data.map(movie => (
          <div className={styles.card} key={movie.id}>
            <Image
              loading='lazy'
              src={`${config.imagesUrl}${movie.poster_path}`}
              alt='Poster'
              width={180}
              height={273}
            />
          </div>
        ))}
      </div>
    </section>
  )
}

export default MoviesList;