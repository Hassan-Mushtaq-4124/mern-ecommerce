import { useEffect, useState } from "react";
import API from "../services/api";

import Hero from "../components/Hero";
import Banner from "../components/Banner";
import Categories from "../components/Categories";
import ProductCard from "../components/ProductCard";
import Loader from "../components/Loader";

const Home = () => {
  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const { data } = await API.get("/products");

      setProducts(data);
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  const filteredProducts = products.filter(
    (product) =>
      product.name
        .toLowerCase()
        .includes(search.toLowerCase())
  );

  return (
    <>
      <Hero />

      <Banner />

      <div className="container py-5">

        <Categories />

        <div className="search-box">
          <input
            type="text"
            placeholder="Search products..."
            value={search}
            onChange={(e) =>
              setSearch(e.target.value)
            }
          />
        </div>

        {loading ? (
          <Loader />
        ) : (
          <div className="products-grid">
            {filteredProducts.map((product) => (
              <ProductCard
                key={product._id}
                product={product}
              />
            ))}
          </div>
        )}
      </div>
    </>
  );
};

export default Home;