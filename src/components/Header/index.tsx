import type { NextPage } from "next"
import { ChangeEvent, MouseEvent, useEffect, useState } from "react"
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { searchAsync, selectedMovie, setSelectedMovie } from "../../modules/movies/moviesSlice";
import styles from './Header.module.css'

const Header: NextPage = () => {
  const dispatch = useAppDispatch();
  const movie = useAppSelector(selectedMovie);

  const [search, setSearch] = useState('');

  useEffect(() => {
    if (search.length > 0) {
      dispatch(setSelectedMovie({}));
    }

    dispatch(searchAsync(search));
  }, [dispatch, search]);

  const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setSearch(value);
  }

  const handleBackToList = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    dispatch(setSelectedMovie({}));
  }

  return (
    <section className={styles.header}>
      <div className={styles.logo}>Best Movies</div>
      <div className={styles.search_wrapper}>
        {(movie && !!Object.keys(movie).length) && (
          <button onClick={handleBackToList}>
            Voltar para listagem
          </button>
        )}
        <input
          type='search'
          placeholder='Buscar filme'
          value={search}
          onChange={handleSearch}
        />
      </div>
    </section>
  )
}

export default Header;