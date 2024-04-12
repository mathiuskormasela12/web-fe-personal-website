'use client'
import React from "react";
import { Navbar } from "@/components";
import styles from './styles/homePage.module.scss';

const HomePage: React.FC = () => {
  return (
    <div className={styles.hero}>
      <Navbar />
    </div>
  )
}

export default HomePage;