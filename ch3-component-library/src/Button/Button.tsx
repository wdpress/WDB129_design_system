import React from 'react';
import clsx from 'clsx';
import styles from './Button.module.css';

type Props = {
  outlined?: boolean;
  size?: 'small' | 'medium';
  children: React.ReactNode;
  onClick?: () => void;
}

export const Button: React.FC<Props> = ({
  outlined = false,
  size = 'medium',
  children,
  onClick
}) => {
  return (
    <button
      type="button"
      className={clsx(styles.button, outlined && styles.outlined, styles[size])}
      onClick={onClick}
    >
      {children}
    </button>
  );
};
