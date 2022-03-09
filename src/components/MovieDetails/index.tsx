import { format } from 'date-fns';
import Image from 'next/image';
import { buildStyles, CircularProgressbar } from 'react-circular-progressbar';
import { config } from '../../config';
import styles from './MovieDetails.module.css'

interface MovieProp {
  poster_path?: string;
  vote_average?: number;
  title?: string;
  release_date?: Date;
  overview?: string;
  genres?: Array<any>;
  tagline?: string;
  homepage?: string;
}

interface DetailsProp {
  movie: MovieProp;
}

const MovieDetails = ({ movie }: DetailsProp) => {
  return (
    <div className={styles.details}>
      <Image
        src={`${config.imageDetailsUrl}${movie.poster_path}`}
        alt="Poster"
        width={320}
        height={470}
      />
      <section>
        <h2>
          {movie.title}
          {movie.release_date && ` (${format(new Date(movie.release_date), 'yyyy')})`}
          {movie.release_date && <small>{format(new Date(movie.release_date), 'dd/MM/yyyy')}</small>}
        </h2>
        <div className={styles.progress}>
          <CircularProgressbar
            value={(movie.vote_average || 0) * 10}
            text={`${movie.vote_average}`}
            styles={buildStyles({
              textSize: '36px',
              pathColor: 'var(--color-green)',
              textColor: 'var(--color-white)',
              trailColor: '#d6d6d6',
            })}
          />
        </div>
        <div className={styles.tag}>
          <p>{movie.tagline}</p>
          <small>{movie.homepage}</small>
        </div>
        <article>
          <h3>Overview</h3>
          <p>{movie.overview}</p>
        </article>
        <article>
          <h3>Gêneros</h3>
          <p>{movie.genres?.map(({id, name}) => <em key={id}> {name}</em>)}</p>
        </article>
      </section>
    </div>
  );
}

export default MovieDetails;