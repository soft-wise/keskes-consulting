import React from 'react';
import styles from './Label.module.css';

interface LabelProps extends React.LabelHTMLAttributes<HTMLLabelElement> {
  children: React.ReactNode;
}

const Label = ({ children, className = '', ...props }: LabelProps) => {
  return (
    <label className={`${styles.label} ${className}`} {...props}>
      {children}
    </label>
  );
};

export default Label;
