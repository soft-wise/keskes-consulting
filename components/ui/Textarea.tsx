import React from 'react';
import styles from './Input.module.css'; // Reusing Input styles for consistency

interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  // specific props
}

const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className = '', ...props }, ref) => {
    return (
      <textarea
        className={`${styles.input} ${className}`}
        ref={ref}
        style={{ minHeight: '120px', resize: 'vertical' }}
        {...props}
      />
    );
  }
);
Textarea.displayName = "Textarea";

export default Textarea;
