import { useState } from "react";

import { useDispatch } from "react-redux";

import { useNavigate, Link } from "react-router-dom";

import {
  loginSuccess,
} from "../features/auth/authSlice";

const Login = () => {

  const dispatch = useDispatch();

  const navigate = useNavigate();

  const [email, setEmail] = useState("");

  const [password, setPassword] =
    useState("");

  const submitHandler = (e) => {

    e.preventDefault();

    const fakeUser = {
      email,
      name: "Demo User",
    };

    dispatch(loginSuccess(fakeUser));

    navigate("/");
  };

  return (

    <div className="auth-page">

      <div className="auth-card">

        <h2>Login</h2>

        <form onSubmit={submitHandler}>

          <input
            type="email"
            placeholder="Email"
            required
            value={email}
            onChange={(e) =>
              setEmail(e.target.value)
            }
          />

          <input
            type="password"
            placeholder="Password"
            required
            value={password}
            onChange={(e) =>
              setPassword(e.target.value)
            }
          />

          <button type="submit">
            Login
          </button>

        </form>

        <p className="mt-3">

          Don't have an account?

          <Link to="/register">
            Register
          </Link>

        </p>

      </div>

    </div>
  );
};

export default Login;