import React, { useState } from "react"
import useForm from "./useForm"
import validate from "./ValidationRules"
import "./Login.module.css"
import { navigate } from "gatsby"

/**
 * function for login
 * @param {props} props
 * @returns JSX of login page
 */
const Login = props => {
  const { values, errors, handleChange, handleSubmit } = useForm(
    login,
    validate
  )
  const [loggedIn, setLoggedIn] = useState(false)

  function login() {
    setLoggedIn(true)
    // props.parentCallback(true)
    return navigate("/about")
  }

  return (
    <div className="main login-background">
      <div className="is-fullheight">
        {loggedIn && navigate("/about")}
        <div className="auth-container">
          <div className="column auth-content">
            <div className="box">
              <h1 className="auth-form-title">Admin Login</h1>
              <form onSubmit={handleSubmit} noValidate>
                <div className="field">
                  <label className="label">Username</label>
                  <div className="control">
                    <input
                      autoComplete="off"
                      className={`input ${errors.email && "is-danger"}`}
                      type="email"
                      name="email"
                      onChange={handleChange}
                      value={values.email || ""}
                      required
                    />
                    {errors.email && (
                      <p className="help is-danger">{errors.email}</p>
                    )}
                  </div>
                </div>
                <div className="field">
                  <label className="label">Password</label>
                  <div className="control">
                    <input
                      className={`input ${errors.password && "is-danger"}`}
                      type="password"
                      name="password"
                      onChange={handleChange}
                      value={values.password || ""}
                      required
                    />
                  </div>
                  {errors.password && (
                    <p className="help is-danger">{errors.password}</p>
                  )}
                </div>
                <div className="forgetPassword">
                  <a href="/forget-password">Forget Password?</a>
                </div>
                <span className="btnSpan">
                  <button type="submit" className="submitBtn btn btn-primary">
                    Login
                  </button>
                </span>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

Login.propTypes = {}
export default Login
