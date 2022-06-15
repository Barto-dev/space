import React, { FC } from 'react';

import cn from 'classnames';

import styles from './Button.module.css';
import { ButtonProps } from './Button.props';

const Button: FC<ButtonProps> = ({
  variant = 'primary',
  type = 'button',
  onClick,
  children,
  id,
  className,
  ...props
}) => {

  return (
    <button
      className={cn(styles.button, styles[variant], className)}
      type={type}
      onClick={onClick}
      {...props}
    >
      <span className={styles.wrapper}>{children}</span>
    </button>
  );
};

export default Button;
