import Image from 'next/image';
import { format } from 'date-fns';
import { config } from '../../config';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
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
            <div className={styles.image_wrapper}>
              <Image
                loading='lazy'
                src={`${config.imagesUrl}${movie.poster_path}`}
                alt='Poster'
                width={190}
                height={253}
              />
            </div>
            <div className={styles.card_content}>
              <div className={styles.average}>
                <CircularProgressbar
                  value={movie.vote_average * 10}
                  text={`${movie.vote_average}`}
                  styles={buildStyles({
                    textSize: '36px',
                    pathColor: 'var(--color-green)',
                    textColor: 'var(--color-white)',
                    trailColor: '#d6d6d6',
                  })}
                />
              </div>
              <h3>{movie.title}</h3>
              <span>{format(new Date(movie.release_date), 'MMM, LL yyyy')}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default MoviesList;