import { useEffect, useState } from "react";
import API from "../services/api";
import { toast } from "react-toastify";

const AdminPanel = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    loadProducts();
  }, []);

  const loadProducts = async () => {
    const { data } = await API.get("/products");
    setProducts(data);
  };

  const updateStock = async (id, stock) => {
    try {
      const { data } = await API.put(
        `/products/update-stock/${id}`,
        { stock }
      );

      setProducts((prev) =>
        prev.map((p) => (p._id === id ? data : p))
      );

      toast.success("Stock updated successfully");
    } catch (err) {
      toast.error("Error updating stock");
    }
  };

  return (
    <div className="container mt-4">
      <h2>Admin Panel - Stock Management</h2>

      {products.map((p) => (
        <div key={p._id} className="card p-3 mb-3">
          <h5>{p.name}</h5>
          <p>Stock: {p.stock}</p>

          <div className="d-flex gap-2">
            <button
              className="btn btn-danger"
              onClick={() =>
                updateStock(p._id, p.stock - 1)
              }
            >
              - Decrease
            </button>

            <button
              className="btn btn-success"
              onClick={() =>
                updateStock(p._id, p.stock + 1)
              }
            >
              + Increase
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default AdminPanel;