import React from "react";
import { IButton } from "./types";

import styles from './styles/button.module.scss';

const Button: React.FC<IButton> = ({ children, variant = 'primary', size = 'md', className, fullWidth = false, ...rest }) => {
  return (
    <button
      {...rest}
      className={`${styles['btn']} ${styles[`btn-${variant}`]} ${styles[`btn-${size}`]} ${fullWidth ? 'btn-full-width' : ''} ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;