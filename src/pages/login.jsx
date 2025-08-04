import styles from "../styles/pages/login.module.scss";
import clsx from "clsx";
import { useState } from "react";

function Login() {
  const [showFirst, setShowFirst] = useState(true);
  return (
    <div className={styles["login-container"]}>
      <div className={clsx(styles["slide-image"], styles["half-screen"])}>
        <p>loalololo</p>
      </div>
      <div
        className={clsx(styles["form-login-wrapper"], styles["half-screen"])}
      >
        {showFirst? (<form action="" className={clsx(styles["form-login"])}>
          <span className={clsx(styles["form-title"])}>Login</span>
          <br />
          <label htmlFor="email">Enter your email</label>

          <input type="text" className="email" />
          <br />
          <label htmlFor="password">Password</label>

          <input type="password" className="password" />
          <br />
          <input
            type="submit"
            value="Login"
            className={clsx(styles["button--login"])}
          />
          <br />
          <div className={clsx(styles["form-optinal"])}>
            <span>You dont have a account?</span>
            <span className={clsx(styles["signup-link"])} onClick={() => setShowFirst(!showFirst)}>Sign up now?</span>
          </div>
        </form>):(
          <div className={clsx(styles["form-signup"])}>
            <span className={clsx(styles["form-title"])}>Sign up</span>
          <br />
          <label htmlFor="email">Enter your email</label>

          <input type="text" className="email" />
          <br />
          <label htmlFor="password">Password</label>

          <input type="password" className="password" />
          <br />
          <label htmlFor="password">Confirm Password</label>
          <input type="password" className="confirm-password" />
          <br />
          <input
            type="submit"
            value="Sign up"
            className={clsx(styles["button--signup"])}
          />
          <br />
          <div className={clsx(styles["form-optinal"])}>
            <span>You already have a account?</span>
            <span className={clsx(styles["login-link"])} onClick={() => setShowFirst(!showFirst)}> Go back !</span>
          </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Login;
