import {FontAwesomeIconProps} from '@fortawesome/react-fontawesome';
import {CSSProperties} from 'react';

export interface SpinnerProps {
  size?: FontAwesomeIconProps['size']
  color?: CSSProperties['color'],
  className?: string
}
