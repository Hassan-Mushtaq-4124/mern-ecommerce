import { useState } from "react";
import { useSelector } from "react-redux";
import API from "../services/api";
import { useNavigate } from "react-router-dom";

const Checkout = () => {
  const navigate = useNavigate();

  const cartItems = useSelector(
    (state) => state.cart.cartItems
  );

  const [customerName, setCustomerName] =
    useState("");

  const [address, setAddress] = useState("");

  const totalPrice = cartItems.reduce(
    (acc, item) => acc + item.price * item.qty,
    0
  );

  const placeOrder = async () => {
    await API.post("/orders", {
      customerName,
      address,
      items: cartItems,
      totalPrice,
    });

    navigate("/success");
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
      >
        Place Order
      </button>
    </div>
  );
};

export default Checkout;