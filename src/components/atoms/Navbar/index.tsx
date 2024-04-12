'use client'
import React, { useCallback, useMemo, useState } from "react";
import Link from "next/link";
import {CiMenuBurger} from "react-icons/ci"
import { VscChromeClose } from "react-icons/vsc";
import styles from './styles/navbar.module.scss';

const Navbar: React.FC = () => {
  const [isToggle, setIsToggle] = useState<boolean>(true);
  const navbarWrapper: string = useMemo(() => {
    if(isToggle) {
      return `${styles['navbar-wrapper']} ${styles['navbar-wrapper-collapse']}`;
    } else {
      return `${styles['navbar-wrapper']}`;
    }
  }, [isToggle])

  const handleToggle = useCallback(() => {
    setIsToggle(currentIsToggle => !currentIsToggle);;
  }, [])

  return (
    <div className={navbarWrapper}>
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
          <div className={styles['navbar-burger']}>
            {!isToggle ? (
              <VscChromeClose 
                className={styles.burger} 
                onClick={handleToggle} 
              />
            ) : (
              <CiMenuBurger 
                className={styles.burger} 
                onClick={handleToggle} 
              />
            )}
          </div>
        </div>
      </nav>
    </div>
  )
}

export default Navbar;