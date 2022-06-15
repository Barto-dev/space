import React, { useEffect, useState } from 'react';

import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import cn from 'classnames';

import styles from './PasswordInput.module.css';
import { PasswordInputProps } from './PasswordInput.props';

const PasswordInput = ({
  label,
  isRequired = false,
  isSubmitClicked,
  error,
  ...props
}: PasswordInputProps) => {
  const [showPassword, setShowPassword] = useState(false);
  const requiredClass = { [styles.requiredField]: isRequired };
  const ariaLabel = showPassword
    ? 'Hide password'
    : 'Show password? Attention Your password will be displayed on the screen!';

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const toggleInputType = () => {
    // explanation in comment to props isSubmitClicked
    if (showPassword && !isSubmitClicked) {
      return 'text';
    }
    return 'password';
  };

  // explanation: we need to track if user click on submit button ant hide all passwords
  useEffect(() => {
    setShowPassword(false);
  }, [isSubmitClicked]);

  return (
    <section className={styles.field}>
      <label className={styles.label}>
        <span className={cn(styles.fieldName, requiredClass)}>{label}</span>
        <div className={styles.inputWrapper}>
          <input className={styles.input} {...props} type={toggleInputType()} aria-label={label} />
          <button
            type="button"
            className={styles.togglePassword}
            onClick={toggleShowPassword}
            aria-label={ariaLabel}
          >
            <FontAwesomeIcon icon={showPassword ? faEye : faEyeSlash} color="var(--text-color)" />
          </button>
        </div>
        {error && <small aria-live="polite" className={styles.error}>{error}</small>}
      </label>
    </section>
  );
};

export default PasswordInput;
