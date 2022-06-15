import { DetailedHTMLProps, InputHTMLAttributes } from 'react';

export interface PasswordInputProps extends DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>{
  label: string;
  isRequired?: boolean;
  error?: string;
  // If we showed the password by changing the password input into a text input,
  // browser remember its contents with autocomplete after form submit.
  // for prevent this, before submit form we force enable password type field
  isSubmitClicked?: boolean;
}
