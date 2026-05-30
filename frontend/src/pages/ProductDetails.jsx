import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import API from "../services/api";
import { useDispatch } from "react-redux";
import { addToCart } from "../features/cart/cartSlice";
import { toast } from "react-toastify";

const ProductDetails = () => {
  const { id } = useParams();

  const [product, setProduct] = useState({});
  const [rating, setRating] = useState(0);

  const dispatch = useDispatch();

  useEffect(() => {
    const fetchProduct = async () => {
      const { data } = await API.get("/products");

      const singleProduct = data.find(
        (p) => p._id === id
      );

      setProduct(singleProduct);
    };

    fetchProduct();
  }, [id]);

  const addToCartHandler = () => {
    dispatch(addToCart(product));
    toast.success("Added to cart!");
  };

  return (
    <div className="container mt-5">
      <div className="row">

        <div className="col-md-6">
          <img
            src={product.image}
            className="img-fluid rounded"
          />
        </div>

        <div className="col-md-6">
          <h2>{product.name}</h2>

          <p>{product.description}</p>

          <h4>Rs. {product.price}</h4>

          <p>
            ⭐ {product.rating || 0} (
            {product.numReviews || 0})
          </p>

          <button
            className="btn btn-success w-100"
            onClick={addToCartHandler}
          >
            Add To Cart
          </button>

          {/* Rating */}
          <div className="mt-4">
            <h5>Rate Product</h5>

            <select
              className="form-control"
              onChange={(e) =>
                setRating(e.target.value)
              }
            >
              <option value="0">Select</option>
              <option value="1">1 ⭐</option>
              <option value="2">2 ⭐</option>
              <option value="3">3 ⭐</option>
              <option value="4">4 ⭐</option>
              <option value="5">5 ⭐</option>
            </select>

            <button
              className="btn btn-warning mt-2"
              onClick={() =>
                toast.success(
                  `You rated ${rating} stars`
                )
              }
            >
              Submit Rating
            </button>
          </div>

        </div>

      </div>
    </div>
  );
};

export default ProductDetails;