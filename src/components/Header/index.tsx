import type { NextPage } from "next"
import styles from './Header.module.css'

const Header: NextPage = () => {
  return (
    <section className={styles.header}>
      <div className={styles.logo}>Best Movies</div>
      <input type='search' placeholder='Buscar filme' />
    </section>
  )
}

export default Header;