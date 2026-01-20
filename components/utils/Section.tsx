import React from 'react';
import styles from './Section.module.css';

interface SectionProps {
  children: React.ReactNode;
  className?: string;
  background?: 'white' | 'muted';
}

const Section = ({ children, className = '', background = 'white' }: SectionProps) => {
  return (
    <section className={`${styles.section} ${styles[background]} ${className}`}>
      <div className="container">
        {children}
      </div>
    </section>
  );
};

export default Section;
