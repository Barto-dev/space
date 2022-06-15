import React, { FormEvent, useState, useEffect } from 'react';

import { useNavigate } from 'react-router-dom';

import { EMAIL_PATTERN, MIN_EMAIL_LENGTH, MIN_PASSWORD_LENGTH } from '@app/config/patterns';
import { TOKEN } from '@app/config/token';
import Button from '@components/Button/Button';
import CustomInput from '@components/CustomInput/CustomInput';
import PasswordInput from '@components/PasswordInput/PasswordInput';

import styles from './Login.module.css';

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [emailValid, setEmailValid] = useState(false);
  const [passwordValid, setPasswordValid] = useState(false);

  useEffect(() => {
    if (emailValid && passwordValid) {
      localStorage.setItem('token', `Token ${TOKEN}`);
      navigate('/rockets');
    }
  }, [emailValid, passwordValid]);

  const onSubmitHandler = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();

    if (email.length < MIN_EMAIL_LENGTH) {
      setEmailError(`Email must be at least ${MIN_EMAIL_LENGTH} characters long`);
    } else if (!email.match(EMAIL_PATTERN)) {
      setEmailError('Enter valid email address, e.g. example@gmail.com');
    } else {
      setEmailError('');
      setEmailValid(true);
    }

    if (password.length < MIN_PASSWORD_LENGTH) {
      setPasswordError(`Password must be at least ${MIN_PASSWORD_LENGTH} characters long`);
    } else {
      setPasswordError('');
      setPasswordValid(true);
    }
  };

  return (
    <div className="wrapper">
      <div className={styles.row}>
        <h1 className={styles.title}>Login</h1>
        <form noValidate onSubmit={onSubmitHandler} className={styles.form}>
          <CustomInput
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            label="Email"
            type="email"
            error={emailError}
          />
          <PasswordInput
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            label="Password"
            error={passwordError}
          />
          <Button className={styles.submit} type="submit">Continue</Button>
        </form>
      </div>
    </div>
  );
};

export default Login;
