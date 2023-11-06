import * as React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import styles from "./SignInBox.module.scss";
import { Grid } from "@mui/material";
import Link from "@mui/material/Link";
import { useRouter } from "next/router";
import { useNavigate } from "react-router-dom";

//empty interface for props becayse the component doesnt expect any additional pros other than the ones provided by React.FC
interface SignInProps {}
//PropsWithChildren: typscript utilites provied by React that is used to create a new type by adding children to the existing props type
const SignInBox: React.FC<React.PropsWithChildren<SignInProps>> = () => {
  //create a state for the name, email and password
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  //use the useNavigate hook to navigate to the home page
  const navigate = useNavigate();
  //create a function that will handle the submit event
  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    //prevent the default behaviour of the form
    event.preventDefault();
    //create a body variable that will store the data from the form
    const body = JSON.stringify({
      email,
      password,
    });
    //fetch the data from the backend
    const response = await fetch("/auth/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body,
    });
    //if the response is 200, then navigate to the home page
    if (response.status === 200) {
      navigate("/");
    }
  };
  //return the form
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
              //onChange={(e) => setEmail(e.target.value)}
            />
            <p> PASSWORD</p>
            <TextField
              className={styles.input}
              id='password'
              name='password'
              color='primary'
              placeholder='Password'
              sx={{ input: { color: "grey" } }}
              //value={password}
              //onChange={(e) => setPassword(e.target.value)}
            />
            <button className={styles.loginButton}>Log In</button>
            <Grid container>
              <Grid item xs>
                <Link className={styles.linkStyle} href='#' color='textPrimary'>
                  Don't have an account? Please Sign up!
                </Link>
              </Grid>
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
