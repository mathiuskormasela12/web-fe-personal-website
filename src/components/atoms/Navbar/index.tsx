import React from "react";
import Link from "next/link";
import styles from './styles/navbar.module.scss';

const Navbar: React.FC = () => {
  return (
    <nav className={styles.navbar}>
      <div className={styles.container}>
        <div className={styles.brand}>
          <Link href={'/'} className={styles['brand-content']}>
            Mathius
          </Link>
        </div>
        <ul className={styles['navbar-item-list']}>
          <li className={styles['navbar-items']}>
            <Link href={'/'}>
              Home
            </Link>
          </li>
          <li className={styles['navbar-items']}>
            <Link href={'/'}>
              Experiences
            </Link>
          </li>
          <li className={styles['navbar-items']}>
            <Link href={'/portfolios'}>
              Portofolios
            </Link>
          </li>
          <li className={styles['navbar-items']}>
            <Link href={'/blog'}>
              Blog
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar;