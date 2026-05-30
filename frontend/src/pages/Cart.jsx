import { useSelector, useDispatch } from "react-redux";
import {
  removeFromCart,
  decreaseQty,
} from "../features/cart/cartSlice";
import API from "../services/api";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";

const Cart = () => {
  const dispatch = useDispatch();

  const cartItems = useSelector(
    (state) => state.cart.cartItems
  );

  // REMOVE FULL ITEM (RESTORE FULL QTY)
  const removeItemHandler = async (item) => {
    try {
      await API.put(`/products/restore/${item._id}`, {
        qty: item.qty,
      });

      dispatch(removeFromCart(item._id));

      toast.success("Item removed");
    } catch (err) {
      toast.error("Error removing item");
    }
  };

  // REMOVE SINGLE QUANTITY
  const decreaseItemHandler = async (item) => {
    try {
      await API.put(`/products/restore/${item._id}`, {
        qty: 1,
      });

      dispatch(decreaseQty(item._id));

      toast.success("Item quantity decreased");
    } catch (err) {
      toast.error("Error updating item");
    }
  };

  const totalPrice = cartItems.reduce(
    (acc, item) =>
      acc + item.price * item.qty,
    0
  );

  return (
    <div className="container mt-4">
      <h2>Your Cart</h2>

      {cartItems.map((item) => (
        <div key={item._id} className="card p-3 mb-3">

          <h5>{item.name}</h5>

          <p>
            Quantity: <b>{item.qty}</b>
          </p>

          <p>
            Price: Rs. {item.price * item.qty}
          </p>

          {/* QUANTITY CONTROLS */}
          <div className="mb-2">
            <button
              className="btn btn-warning me-2"
              onClick={() =>
                decreaseItemHandler(item)
              }
              disabled={item.qty <= 1}
            >
              - Remove 1
            </button>

            <button
              className="btn btn-danger"
              onClick={() =>
                removeItemHandler(item)
              }
            >
              Remove All
            </button>
          </div>
        </div>
      ))}

      <h3>
        Total: Rs. {totalPrice}
      </h3>

      <Link
        to="/checkout"
        className="btn btn-success"
      >
        Proceed to Checkout
      </Link>
    </div>
  );
};

export default Cart;