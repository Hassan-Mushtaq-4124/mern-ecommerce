import { Link } from "react-router-dom";

const Register = () => {

  return (

    <div className="auth-page">

      <div className="auth-card">

        <h2>Create Account</h2>

        <input
          type="text"
          placeholder="Full Name"
        />

        <input
          type="email"
          placeholder="Email"
        />

        <input
          type="password"
          placeholder="Password"
        />

        <button>Register</button>

        <p>
          Already have an account?

          <Link to="/login">
            Login
          </Link>
        </p>

      </div>

    </div>
  );
};

export default Register;