import { useDispatch } from "react-redux";
import { addToCart } from "../features/cart/cartSlice";
import { Link } from "react-router-dom";

const ProductCard = ({ product }) => {
  const dispatch = useDispatch();

  return (
    
    <div className="product-card">
      <div className="product-image">
        <img
          src={product.image}
          alt={product.name}
        />
      </div>

      <div className="product-info">
        <h4>{product.name}</h4>

        <p>{product.description}</p>

        <div className="product-bottom">
          <h5>Rs. {product.price}</h5>

          <button
            onClick={() =>
              dispatch(addToCart(product))
            }
          >
            Add To Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;