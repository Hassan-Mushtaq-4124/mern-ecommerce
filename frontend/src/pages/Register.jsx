import { useState } from "react";

import {
  Link,
  useNavigate,
} from "react-router-dom";

import {
  useDispatch,
} from "react-redux";

import API from "../services/api";

import {
  setCredentials,
} from "../features/auth/authSlice";

const Register = () => {

  const navigate =
    useNavigate();

  const dispatch =
    useDispatch();

  const [name, setName] =
    useState("");

  const [email, setEmail] =
    useState("");

  const [password,
    setPassword
  ] = useState("");

  const [error,
    setError
  ] = useState("");

  const submitHandler =
    async (e) => {

    e.preventDefault();

    try {

      const { data } =
        await API.post(
          "/users/register",
          {
            name,
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
        "Registration failed"
      );
    }
  };

  return (

    <div className="auth-page">

      <div className="auth-card">

        <h2>
          Register
        </h2>

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
            type="text"
            placeholder="Name"
            value={name}
            onChange={(e)=>
              setName(
                e.target.value
              )
            }
            required
          />

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
            Register
          </button>

        </form>

        <p>

          Already have account?

          <Link to="/login">
            Login
          </Link>

        </p>

      </div>
    </div>
  );
};

export default Register;