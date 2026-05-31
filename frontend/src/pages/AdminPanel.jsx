import { useEffect, useState } from "react";
import API from "../services/api";
import { toast } from "react-toastify";

const AdminPanel = () => {
  const [products, setProducts] = useState([]);

  const [form, setForm] = useState({
    name: "",
    price: "",
    category: "",
    image: "",
    description: "",
    stock: 10,
  });

  useEffect(() => {
    loadProducts();
  }, []);

  const loadProducts = async () => {
    const { data } = await API.get("/products");
    setProducts(data);
  };

  const updateStock = async (id, stock) => {
    await API.put(`/products/update-stock/${id}`, { stock });

    loadProducts();
  };

  const deleteProduct = async (id) => {
    await API.delete(`/products/delete/${id}`);
    toast.success("Deleted");
    loadProducts();
  };

  const createProduct = async () => {
    await API.post("/products/create", form);

    toast.success("Product added");

    setForm({
      name: "",
      price: "",
      category: "",
      image: "",
      description: "",
      stock: 10,
    });

    loadProducts();
  };

  return (
    <div className="container mt-4">
      <h2>Admin Panel</h2>

      {/* ADD PRODUCT */}
      <div className="card p-3 mb-4">
        <h5>Add Product</h5>

        <input
          placeholder="Name"
          className="form-control mb-2"
          value={form.name}
          onChange={(e) =>
            setForm({ ...form, name: e.target.value })
          }
        />

        <input
          placeholder="Price"
          className="form-control mb-2"
          value={form.price}
          onChange={(e) =>
            setForm({ ...form, price: e.target.value })
          }
        />

        <input
          placeholder="Category"
          className="form-control mb-2"
          value={form.category}
          onChange={(e) =>
            setForm({ ...form, category: e.target.value })
          }
        />

        <input
          placeholder="Image URL"
          className="form-control mb-2"
          value={form.image}
          onChange={(e) =>
            setForm({ ...form, image: e.target.value })
          }
        />

        <textarea
          placeholder="Description"
          className="form-control mb-2"
          value={form.description}
          onChange={(e) =>
            setForm({ ...form, description: e.target.value })
          }
        />

        <button
          className="btn btn-success"
          onClick={createProduct}
        >
          Add Product
        </button>
      </div>

      {/* PRODUCT LIST */}
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
              - Stock
            </button>

            <button
              className="btn btn-success"
              onClick={() =>
                updateStock(p._id, p.stock + 1)
              }
            >
              + Stock
            </button>

            <button
              className="btn btn-dark"
              onClick={() => deleteProduct(p._id)}
            >
              Delete
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default AdminPanel;