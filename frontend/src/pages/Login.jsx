import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import { useDispatch } from "react-redux";

import API from "../services/api";

import {
  setCredentials,
} from "../features/auth/authSlice";

const Login = () => {

  const navigate = useNavigate();

  const dispatch = useDispatch();

  const [email, setEmail] =
    useState("");

  const [password, setPassword] =
    useState("");

  const [error, setError] =
    useState("");

  const submitHandler = async (e) => {

    e.preventDefault();

    try {

      const { data } =
        await API.post(
          "/users/login",
          {
            email,
            password,
          }
        );

      dispatch(
        setCredentials(data)
      );

      navigate("/");

    } catch (err) {

      setError(
        err.response?.data?.message ||
        "Login failed"
      );
    }
  };

  return (
    <div className="auth-page">

      <div className="auth-card">

        <h2>Login</h2>

        {error && (
          <p style={{
            color:"red"
          }}>
            {error}
          </p>
        )}

        <form
          onSubmit={
            submitHandler
          }
        >

          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e)=>
              setEmail(
                e.target.value
              )
            }
            required
          />

          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e)=>
              setPassword(
                e.target.value
              )
            }
            required
          />

          <button
            type="submit"
          >
            Login
          </button>

        </form>

        <p>
          Don't have account?

          <Link
            to="/register"
          >
            Register
          </Link>
        </p>

      </div>
    </div>
  );
};

export default Login;