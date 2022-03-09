import Image from 'next/image';
import { format } from 'date-fns';
import { config } from '../../config';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import Loading from "react-loading";
import 'react-circular-progressbar/dist/styles.css';
import styles from './MoviesList.module.css'

interface MovieProp {
  id: number;
  poster_path: string;
  vote_average: number;
  title: string;
  release_date: Date;
}

interface DataProp {
  page?: number;
  results?: Array<MovieProp>;
  total_pages?: number;
  total_results?: number;
}

interface MoviesListProp {
  data: DataProp;
  status: string;
  onClick: Function;
}

const MoviesList = ({ data, status, onClick }: MoviesListProp) => {
  if (status === 'loading') {
    return (
      <div className={styles.grid}>
        <Loading type='cylon' color='#fff' />
      </div>
    );
  }

  return (
    <section className={styles.movies}>
      <div className={styles.grid}>
        {(data.results || []).map((movie: MovieProp) => (
          <div className={styles.card} key={movie.id} onClick={() => onClick(movie)}>
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
              {movie.release_date && (
                <span>{format(new Date(movie.release_date), 'MMM, LL yyyy')}</span>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default MoviesList;