import React from 'react';

import { faCircleNotch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { SpinnerProps } from './Spinner.props';

const Spinner = ({
  size = 'lg',
  color = 'var(--accent-color)',
  className,
}: SpinnerProps): JSX.Element => {
  return (
    <FontAwesomeIcon
      color={color}
      className={className}
      icon={faCircleNotch}
      size={size}
      spin
    />
  );
};

export default Spinner;
