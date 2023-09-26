import * as React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import styles from "./SignUpBox.module.scss";
import { Grid } from "@mui/material";

const SignInBox: React.FC = () => {
  return (
    <body>
      <div className={styles.main}>
        <h1 className={styles.loginheading}>Sign Up for SocialFinds</h1>
        <div className={styles.logincontent}>
          <form className={styles.loginform} noValidate>
            <p> NAME</p>
            <TextField
              className={styles.input}
              id='name'
              name='name'
              color='primary'
              placeholder='Name'
              sx={{ input: { color: "grey" } }}

              // value={email}
            />
            <p> EMAIL ADDRESS</p>
            <TextField
              className={styles.input}
              id='email'
              name='email'
              color='primary'
              placeholder='Email'
              sx={{ input: { color: "grey" } }}

              // value={email}
            />
            <p> PASSWORD</p>
            <TextField
              className={styles.input}
              id='password'
              name='password'
              color='primary'
              placeholder='Create Password'
              sx={{ input: { color: "grey" } }}
              // value={password}
            />
            <button className={styles.loginButton}>Submit</button>
            <Grid container>
              <Grid item xs></Grid>
            </Grid>
          </form>

          <span>OR</span>

          <div className={styles.socialL}>
            <button className={styles.googleL}>Continue with Google</button>
            <button className={styles.facebookL}>Continue with Facebook</button>
            <button className={styles.appleL}>Continue with Apple</button>
          </div>
        </div>
      </div>
    </body>
  );
};

export default SignInBox;
