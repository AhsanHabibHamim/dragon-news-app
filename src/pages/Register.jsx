import React, { useContext } from "react";
import { Link, Navigate } from "react-router";
import { AuthContext } from "../provider/AuthProvider";

const Register = () => {
  const { createUser,setUser } = useContext(AuthContext);

  const handleRegister = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const photo = form.photo.value;
    const email = form.email.value;
    const password = form.password.value;

    console.log(name, photo, email, password);

    createUser(email, password)
      .then((result) => {
        const user = result.user;
        setUser(user);
        <Navigate to="/"></Navigate>
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        alert(`${errorCode}: ${errorMessage}`);
      });
  };

  return (
    <div>
      <div className="card mt-10 mx-auto bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
        <h2 className="font-bold text-2xl text-center pt-10">
          Register Your Account
        </h2>
        <form onSubmit={handleRegister} className="card-body">
          <fieldset className="fieldset">
            <label className="label">Name</label>
            <input
              required
              name="name"
              type="text"
              className="input"
              placeholder="Name"
            />

            <label className="label">Photo URL</label>
            <input
              required
              name="photo"
              type="text"
              className="input"
              placeholder="Photo URL"
            />

            <label className="label">Email</label>
            <input
              required
              name="email"
              type="email"
              className="input"
              placeholder="Email"
            />

            <label className="label">Password</label>
            <input
              required
              name="password"
              type="password"
              className="input"
              placeholder="Password"
            />
            <button type="submit" className="btn btn-neutral mt-4">
              Register
            </button>
            <p className="font-semibold text-center text-lg pt-3">
              Already have an account?{" "}
              <Link className="text-red-900" to="/auth/login">
                Login
              </Link>
            </p>
          </fieldset>
        </form>
      </div>
    </div>
  );
};

export default Register;
