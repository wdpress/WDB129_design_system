import React from 'react';
import styles from './TextInput.module.css'

type Props = {
  children: React.ReactNode;
}

export const TextInput: React.FC<Props> = ({ children }) => (
  <div>{children}</div>
);