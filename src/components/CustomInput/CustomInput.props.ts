import { DetailedHTMLProps, InputHTMLAttributes } from 'react';

export interface CustomInputProps extends DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>{
  className?: string;
  label: string;
  showTooltip?: boolean;
  tooltipText?: string;
  error?: string;
  isRequired?: boolean;
  placeholder?: string;
}
