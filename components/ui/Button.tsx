import React from 'react';
import Link from 'next/link';
import styles from './Button.module.css';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline';
  href?: string;
}

const Button = ({ 
  children, 
  variant = 'primary', 
  href, 
  className = '', 
  ...props 
}: ButtonProps) => {
  const cn = `${styles.btn} ${styles[variant]} ${className}`;

  if (href) {
    return (
      <Link href={href} className={cn}>
        {children}
      </Link>
    );
  }

  return (
    <button className={cn} {...props}>
      {children}
    </button>
  );
};

export default Button;
