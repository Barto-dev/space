import React from 'react';

import styles from './Login.module.css';
import CustomInput from '@components/CustomInput/CustomInput';
import PasswordInput from '@components/PasswordInput/PasswordInput';
import Button from '@components/Button/Button';

const Login = () => {

  return (
    <div className="wrapper">
     <div className={styles.row}>
       <h1 className={styles.title}>Login</h1>
       <form className={styles.form}>
         <CustomInput label="Email"  type="email" />
         <PasswordInput label="Password" />
         <Button className={styles.submit} type="submit">Continue</Button>
       </form>
     </div>
    </div>
  );
};

export default Login;
