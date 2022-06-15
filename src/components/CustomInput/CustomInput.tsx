import React from 'react';

import cn from 'classnames';

import styles from './CustomInput.module.css';
import { CustomInputProps } from './CustomInput.props';

const CustomInput = ({
  className,
  label,
  showTooltip,
  tooltipText,
  error,
  isRequired,
  placeholder,
  type = 'text',
  ...props
}: CustomInputProps) => {
  const requiredClass = {
    [styles.required]: isRequired,
  };
  return (
    <section className={cn(styles.field, className)}>
      <label className={styles.label}>
        <span className={cn(styles.fieldName, requiredClass)}>{label}</span>
        <input
          className={styles.input}
          type={type}
          placeholder={placeholder}
          {...props}
        />
        {error && <small aria-live="polite" className={styles.error}>{error}</small>}
      </label>
    </section>
  );
};

export default CustomInput;
