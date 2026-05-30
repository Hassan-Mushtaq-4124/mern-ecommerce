import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import API from "../services/api";
import { useDispatch } from "react-redux";
import { addToCart } from "../features/cart/cartSlice";
import { toast } from "react-toastify";

const ProductDetails = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  // ⭐ NEW: quantity state
  const [qty, setQty] = useState(1);

  const dispatch = useDispatch();

  useEffect(() => {
    fetchProduct();
  }, []);

  const fetchProduct = async () => {
    const { data } = await API.get(`/products/${id}`);
    setProduct(data);
  };

  // ⭐ INCREASE QTY
  const increaseQty = () => {
    if (qty < product.stock) {
      setQty(qty + 1);
    }
  };

  // ⭐ DECREASE QTY
  const decreaseQty = () => {
    if (qty > 1) {
      setQty(qty - 1);
    }
  };

  const addToCartHandler = async () => {
    try {
      if (product.stock <= 0) {
        toast.error("Out of stock");
        return;
      }

      // reduce stock by selected qty
      const { data } = await API.put(
        `/products/reduce/${product._id}`,
        { qty }
      );

      setProduct(data);

      // ⭐ send qty to cart
      dispatch(addToCart({ ...data, qty }));

      toast.success(`${qty} item(s) added to cart!`);

      setQty(1); // reset after adding
    } catch (err) {
      toast.error("Error occurred");
    }
  };

  if (!product) return <h3>Loading...</h3>;

  return (
    <div className="container mt-5">
      <div className="row">

        {/* IMAGE */}
        <div className="col-md-6">
          <img src={product.image} className="img-fluid" />
        </div>

        {/* DETAILS */}
        <div className="col-md-6">
          <h2>{product.name}</h2>
          <p>{product.description}</p>
          <h4>Rs {product.price}</h4>

          {/* STOCK */}
          {product.stock > 0 ? (
            <h5 style={{ color: "green" }}>
              In Stock ({product.stock})
            </h5>
          ) : (
            <h5 style={{ color: "red" }}>
              Out of Stock
            </h5>
          )}

          {/* ⭐ QUANTITY SELECTOR (NEW UI - minimal change) */}
          {product.stock > 0 && (
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "10px",
                marginBottom: "15px",
              }}
            >
              <button
                className="btn btn-secondary"
                onClick={decreaseQty}
              >
                -
              </button>

              <span style={{ fontSize: "18px" }}>
                {qty}
              </span>

              <button
                className="btn btn-secondary"
                onClick={increaseQty}
              >
                +
              </button>
            </div>
          )}

          {/* ADD TO CART */}
          <button
            className="btn btn-success w-100"
            disabled={product.stock === 0}
            onClick={addToCartHandler}
          >
            {product.stock === 0
              ? "Out of Stock"
              : `Add ${qty} To Cart`}
          </button>
        </div>

      </div>
    </div>
  );
};

export default ProductDetails;