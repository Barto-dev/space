import { ButtonHTMLAttributes, DetailedHTMLProps, MouseEvent } from 'react';

export interface ButtonProps extends DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
  variant?: 'primary'|'alert',
  onClick?: (e: MouseEvent<HTMLButtonElement>) => void,
}
