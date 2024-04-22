import React from "react";
import Link from "next/link";
import {CiMenuBurger} from "react-icons/ci"
import { VscChromeClose } from "react-icons/vsc";
import useNavbar from "./hooks/useNavbar";

import styles from './styles/navbar.module.scss';
import Button from "@/components/atoms/Button";

const Navbar: React.FC = () => {
  const {
    navbar, 
    navbarItemList, 
    isOpen, 
    handleToggle
  } = useNavbar();

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
        <div className={styles['navbar-side']}>
          <div className={styles['navbar-side-button']}>
            <Button variant="primary" size="lg">
              Hire Me
            </Button>
          </div>
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