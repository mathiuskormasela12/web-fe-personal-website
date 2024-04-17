'use client'
import React, { useCallback, useMemo, useState } from "react";
import Link from "next/link";
import {CiMenuBurger} from "react-icons/ci"
import { VscChromeClose } from "react-icons/vsc";
import styles from './styles/navbar.module.scss';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const navbar = useMemo(() => {
    if(isOpen) {
      return `${styles.navbar} ${styles['navbar-shadow']}`;
    } else {
      return `${styles.navbar}`;
    }
  }, [isOpen]);

  const navbarItemList: string = useMemo(() => {
    if(isOpen) {
      return `${styles['navbar-item-list']} ${styles['navbar-item-list-open']}`;
    } else {
      return `${styles['navbar-item-list']}`;
    }
  }, [isOpen])

  const handleToggle = useCallback(() => {
    setIsOpen(currentIsOpen => !currentIsOpen);;
  }, [])

  return (
    <nav className={navbar}>
      <div className={styles.container}>
        <div className={styles.brand}>
          <Link href={'/'} className={styles['brand-content']}>
            Mathius
          </Link>
        </div>
        <ul className={navbarItemList}>
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
          {isOpen ? (
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
  )
}

export default Navbar;