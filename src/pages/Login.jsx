import React from "react";
import { Link } from "react-router";

const Login = () => {
  return (
    <div>
      <div className="card mt-20 mx-auto bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
        <h2 className="font-bold text-2xl text-center pt-10 ">
          Login Your Account
        </h2>
        <div className="card-body">
          <fieldset className="fieldset">
            <label className="label">Email</label>
            <input type="email" className="input" placeholder="Email" />
            <label className="label">Password</label>
            <input type="password" className="input" placeholder="Password" />
            <div>
              <a className="link link-hover">Forgot password?</a>
            </div>
            <button className="btn btn-neutral mt-4">Login</button>
            <p className="font-semibold text-center text-lg pt-3">
              Don't have an account ?{" "}
              <Link className="text-red-900" to="/auth/register">
                Register
              </Link>
            </p>
          </fieldset>
        </div>
      </div>
    </div>
  );
};

export default Login;
