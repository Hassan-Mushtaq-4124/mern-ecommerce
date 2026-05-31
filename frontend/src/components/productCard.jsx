import { useDispatch } from "react-redux";
import { addToCart } from "../features/cart/cartSlice";
import API from "../services/api";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";

const ProductCard = ({ product }) => {
  const dispatch = useDispatch();

  const addToCartHandler = async () => {
    try {
      const qty = 1;

      // 🔥 FIX: send qty properly to backend
      await API.put(`/products/reduce/${product._id}`, {
        qty,
      });

      dispatch(addToCart({ ...product, qty }));

      toast.success("Added to cart");
    } catch (err) {
      toast.error("Error updating stock");
      console.log(err.response?.data || err.message);
    }
  };

  return (
    <div className="card product-card">

      <Link to={`/product/${product._id}`}>
        <img
          src={product.image}
          className="card-img-top"
        />
      </Link>

      <div className="card-body">

        <h5>
          <Link to={`/product/${product._id}`}>
            {product.name}
          </Link>
        </h5>

        <p>{product.description}</p>

        <p>
          ⭐ {product.rating || 0} (
          {product.numReviews || 0})
        </p>

        <h6>Rs. {product.price}</h6>

        <button
          className="btn btn-primary w-100"
          onClick={addToCartHandler}
        >
          Add To Cart
        </button>

      </div>
    </div>
  );
};

export default ProductCard;
