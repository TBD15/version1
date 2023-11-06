import * as React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import styles from "./SignUpBox.module.scss";
import { Grid } from "@mui/material";
import { useNavigate } from "react-router-dom";

//empty interface for props becayse the component doesnt expect any additional pros other than the ones provided by React.FC
const SignInBox: React.FC = () => {
  //create a state for the name, email and password
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  //use the useNavigate hook to navigate to the home page
  const navigate = useNavigate();

  //create a function that will handle the submit event
  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const body = JSON.stringify({
      name,
      email,
      password,
    });
    console.log(body);
    //fetch the data from the backend
    const response = await fetch("/auth/register", {
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

              // value={name}
            />
            <p> EMAIL ADDRESS</p>
            <TextField
              className={styles.input}
              id='email'
              name='email'
              color='primary'
              placeholder='Email'
              sx={{
                input: { color: "goldenrod", backgroundColor: "white" },
              }}
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

          <span className={styles.input}>OR</span>

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
