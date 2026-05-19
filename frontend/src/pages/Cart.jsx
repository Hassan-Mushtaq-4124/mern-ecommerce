import {
  removeFromCart,
  increaseQty,
  decreaseQty,
} from "../features/cart/cartSlice";

import { useDispatch, useSelector } from "react-redux";

import { Link } from "react-router-dom";

const Cart = () => {

  const dispatch = useDispatch();

  const cartItems = useSelector(
    (state) => state.cart.cartItems
  );

  const totalPrice = cartItems.reduce(
    (acc, item) =>
      acc + item.price * item.qty,
    0
  );

  return (
    <div className="container py-5">

      <h2 className="section-title">
        Shopping Cart
      </h2>

      {cartItems.map((item) => (

        <div
          key={item._id}
          className="cart-item"
        >

          <div>

            <h4>{item.name}</h4>

            <div className="qty-controls">

              <button
                onClick={() =>
                  dispatch(
                    decreaseQty(item._id)
                  )
                }
              >
                -
              </button>

              <span>{item.qty}</span>

              <button
                onClick={() =>
                  dispatch(
                    increaseQty(item._id)
                  )
                }
              >
                +
              </button>

            </div>

          </div>

          <div>

            <h5>
              Rs. {item.price * item.qty}
            </h5>

            <button
              className="remove-btn"
              onClick={() =>
                dispatch(
                  removeFromCart(item._id)
                )
              }
            >
              Remove
            </button>

          </div>

        </div>
      ))}

      <div className="cart-summary">

        <h3>Total: Rs. {totalPrice}</h3>

        <Link
          to="/checkout"
          className="checkout-btn"
        >
          Checkout
        </Link>

      </div>

    </div>
  );
};

export default Cart;