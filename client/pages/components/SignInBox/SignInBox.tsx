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
        <form className={styles.form} noValidate>
          <h1>Log into SocialFinds</h1>
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
          <button className={styles.googleL}>Login with Google</button>
          <button className={styles.facebookL}>Login with Facebook</button>
          <button className={styles.appleL}>Login with Apple</button>
        </div>
      </div>
    </body>
  );
};

export default SignInBox;
