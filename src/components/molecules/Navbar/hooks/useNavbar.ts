'use client'
import {useState, useCallback, useMemo} from 'react';
import { NavbarHook } from './types';
import styles from '../styles/navbar.module.scss';

const useNavbar: NavbarHook = () => {
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

  return {
    isOpen,
    navbar,
    navbarItemList,
    handleToggle
  }
};

export default useNavbar;