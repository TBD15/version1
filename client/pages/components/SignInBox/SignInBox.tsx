import * as React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import styles from "./SignInBox.module.scss";
const SignInBox: React.FC = () => {
  return (
    <div className={styles.main}>
      <header> CREATE ACCOUNT</header>
      <div className={styles.innerBox}>
        <h1>Log into [our name]</h1>
        <form className={styles.form} noValidate>
          <p> EMAIL ADDRESS</p>
          <TextField
            className={styles.input}
            id='email'
            name='email'
            color='primary'
            placeholder='name@example.com'
          />
          <p> PASSWORD</p>
          <TextField
            className={styles.input}
            id='password'
            name='password'
            color='primary'
            placeholder='Password'
          />
          <button>Log In</button>
        </form>

        <p>OR</p>
        <button>Continue with Google</button>
        <button>Continue with Apple</button>
        <button>Continue with Facebook</button>
        <p>CAN'T LOG IN?</p>
      </div>
    </div>
  );
};

export default SignInBox;
