import React from 'react';
import Link from 'next/link';
import { cn } from '@/lib/utils';

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
  const variants = {
    primary: "bg-gold-700 hover:bg-gold-800 text-white shadow-md hover:shadow-lg",
    secondary: "bg-neutral-100 hover:bg-neutral-200 text-neutral-900",
    outline: "bg-transparent border border-neutral-300 text-neutral-900 hover:bg-neutral-50"
  };

  const baseStyles = "inline-flex items-center justify-center px-6 py-3 rounded-md font-medium transition-all duration-200 active:scale-95 focus:outline-none focus:ring-2 focus:ring-gold-500/50";
  
  const cnClasses = cn(baseStyles, variants[variant], className);

  if (href) {
    return (
      <Link href={href} className={cnClasses}>
        {children}
      </Link>
    );
  }

  return (
    <button className={cnClasses} {...props}>
      {children}
    </button>
  );
};

export default Button;
