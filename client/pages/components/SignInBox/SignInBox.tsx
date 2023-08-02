import * as React from "react";
import styles from "./SignInBox.module.scss";
const SignInBox: React.FC = () => {
  return (
    <div className={styles.main}>
      <div className={styles.innerBox}>
        <h1>Sign in</h1>
      </div>
    </div>
  );
};

export default SignInBox;
