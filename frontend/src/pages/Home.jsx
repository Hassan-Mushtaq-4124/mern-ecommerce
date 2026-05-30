import { useEffect, useState } from "react";
import API from "../services/api";
import ProductCard from "../components/ProductCard";

const Home = () => {
  const [products, setProducts] = useState([]);

  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("");
  const [sort, setSort] = useState("");

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    const { data } = await API.get("/products");
    setProducts(data);
  };

  // FILTER
  const filteredProducts = products
    .filter((p) =>
      p.name.toLowerCase().includes(search.toLowerCase())
    )
    .filter((p) =>
      category ? p.category === category : true
    );

  // SORT
  const sortedProducts = [...filteredProducts].sort(
    (a, b) => {
      if (sort === "low") return a.price - b.price;
      if (sort === "high") return b.price - a.price;
      return 0;
    }
  );

  return (
    <div className="container mt-4">

      {/* SEARCH */}
      <input
        type="text"
        placeholder="Search..."
        className="form-control mb-3"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      {/* CATEGORY */}
      <select
        className="form-control mb-3"
        onChange={(e) =>
          setCategory(e.target.value)
        }
      >
        <option value="">All Categories</option>
        <option value="Electronics">
          Electronics
        </option>
        <option value="Accessories">
          Accessories
        </option>
      </select>

      {/* SORT */}
      <select
        className="form-control mb-4"
        onChange={(e) =>
          setSort(e.target.value)
        }
      >
        <option value="">Sort By</option>
        <option value="low">
          Price: Low → High
        </option>
        <option value="high">
          Price: High → Low
        </option>
      </select>

      {/* PRODUCTS */}
      <div className="row">
        {sortedProducts.map((product) => (
          <div
            className="col-md-4 mb-4"
            key={product._id}
          >
            <ProductCard product={product} />
          </div>
        ))}
      </div>

    </div>
  );
};

export default Home;