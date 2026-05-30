import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import API from "../services/api";
import { useDispatch } from "react-redux";
import { addToCart } from "../features/cart/cartSlice";

const ProductDetails = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const dispatch = useDispatch();

  useEffect(() => {
    fetchProduct();
  }, []);

  const fetchProduct = async () => {
    const { data } = await API.get(`/products/${id}`);
    setProduct(data);
  };

  if (!product) return <h2>Loading...</h2>;

  return (
    <div className="container">
      <div className="product-details">

        <img src={product.image} alt="" />

        <div>
          <h2>{product.name}</h2>
          <h3>Rs {product.price}</h3>
          <p>{product.description}</p>

          <button
            onClick={() =>
              dispatch(addToCart(product))
            }
          >
            Add to Cart
          </button>
        </div>

      </div>
    </div>
  );
};

export default ProductDetails;