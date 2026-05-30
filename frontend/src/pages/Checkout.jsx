import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import API from "../services/api";
import { useNavigate } from "react-router-dom";
import { clearCart } from "../features/cart/cartSlice";
import { toast } from "react-toastify";

const Checkout = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const cartItems = useSelector(
    (state) => state.cart.cartItems
  );

  const [customerName, setCustomerName] = useState("");
  const [address, setAddress] = useState("");

  const totalPrice = cartItems.reduce(
    (acc, item) =>
      acc + item.price * item.qty,
    0
  );

  const placeOrder = async () => {
    try {
      await API.post("/orders", {
        customerName,
        address,
        items: cartItems,
        totalPrice,
      });

      // ⭐ CLEAR CART AFTER SUCCESS
      dispatch(clearCart());

      toast.success("Order placed successfully!");

      navigate("/success");
    } catch (err) {
      toast.error("Order failed");
    }
  };

  return (
    <div className="container mt-5">
      <h2>Checkout</h2>

      <input
        type="text"
        placeholder="Name"
        className="form-control mb-3"
        value={customerName}
        onChange={(e) =>
          setCustomerName(e.target.value)
        }
      />

      <textarea
        placeholder="Address"
        className="form-control mb-3"
        value={address}
        onChange={(e) =>
          setAddress(e.target.value)
        }
      />

      <button
        className="btn btn-primary"
        onClick={placeOrder}
        disabled={cartItems.length === 0}
      >
        Place Order
      </button>
    </div>
  );
};

export default Checkout;