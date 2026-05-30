import { useDispatch } from "react-redux";
import { addToCart } from "../features/cart/cartSlice";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";

const ProductCard = ({ product }) => {
  const dispatch = useDispatch();

const addToCartHandler = async () => {
  try {
    if (product.stock <= 0) {
      toast.error("Out of stock!");
      return;
    }

    await API.put(`/products/reduce/${product._id}`);

    dispatch(addToCart(product));

    toast.success("Added to cart!");

    // optional: reload page data sync (simple solution)
    window.location.reload();

  } catch (error) {
    toast.error("Error updating stock");
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