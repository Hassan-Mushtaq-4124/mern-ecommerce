import { Link } from "react-router-dom";

import {
  FaShoppingCart,
  FaUser,
} from "react-icons/fa";

import {
  useDispatch,
  useSelector,
} from "react-redux";

import {
  logout,
} from "../features/auth/authSlice";



const Navbar = () => {

  const dispatch = useDispatch();

  const cartItems = useSelector(
    (state) => state.cart.cartItems
  );

  const { userInfo } = useSelector(
    (state) => state.auth
  );

  const totalItems = cartItems.reduce(
    (acc, item) => acc + item.qty,
    0
  );

  const logoutHandler = () => {

    dispatch(logout());
  };

  return (

    <nav className="navbar navbar-expand-lg custom-navbar">

      <div className="container">

        <Link
          className="navbar-brand logo"
          to="/"
        >
          HN Shop
        </Link>

        <div className="nav-right">

          {userInfo ? (

            <button
              className="logout-btn"
              onClick={logoutHandler}
            >
              Logout
            </button>

          ) : (

            <Link
              className="login-btn"
              to="/login"
            >
              <FaUser />

              <span>Login</span>
            </Link>

          )}

          <Link
            className="cart-btn"
            to="/cart"
          >
            <FaShoppingCart />

            <span>
              Cart ({totalItems})
            </span>
          </Link>

          <Link className="btn btn-info ms-2" to="/admin">
            Admin
          </Link>

        </div>

      </div>

    </nav>
  );
};

export default Navbar;