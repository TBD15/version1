import * as React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import styles from "./SignInBox.module.scss";
import { Grid } from "@mui/material";
import Link from "@mui/material/Link";

const SignInBox: React.FC = () => {
  return (
    <body>
      <div className={styles.main}>
        <h1 className={styles.loginheading}>Log into SocialFinds</h1>
        <div className={styles.logincontent}>
          <form className={styles.loginform} noValidate>
            <p> EMAIL ADDRESS</p>
            <TextField
              className={styles.input}
              id='email'
              name='email'
              color='primary'
              placeholder='name@example.com'
              sx={{ input: { color: "grey" } }}

              // value={email}
            />
            <p> PASSWORD</p>
            <TextField
              className={styles.input}
              id='password'
              name='password'
              color='primary'
              placeholder='Password'
              sx={{ input: { color: "grey" } }}
              // value={password}
            />
            <button className={styles.loginButton}>Log In</button>
            <Grid container>
              <Grid item xs>
                <Link href='#' variant='body2' color='textPrimary'>
                  CAN'T LOG IN?
                </Link>
              </Grid>
            </Grid>
          </form>

          <div className={styles.separator}>Or</div>

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
