import  "../styles/pages/login.scss";
import clsx from "clsx";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();
  const [showFirst, setShowFirst] = useState(true);

  function handleClick(){
    navigate('/home')
  }

  return (
    <div className="login-container">
      <div className="slide-image half-screen">
        <p>loalololo</p>
      </div>
      <div
        className="form-login-wrapper half-screen"
      >
        {showFirst ? (
          <form action="" className="form-login">
            <span className="form-title">Login</span>
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
              className="button--login" onClick={handleClick}
            />
            <br />
            <div className="form-optinal">
              <span>You dont have a account?</span>
              <span
                className="signup-link"
                onClick={() => setShowFirst(!showFirst)}
              >
                Sign up now?
              </span>
            </div>
          </form>
        ) : (
          <div className="form-signup">
            <span className="form-title">Sign up</span>
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
              className="button--signup"
            />
            <br />
            <div className="form-optinal">
              <span>You already have a account?</span>
              <span
                className="login-link"
                onClick={() => setShowFirst(!showFirst)}
              >
                {" "}
                Go back !
              </span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Login;
