import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useTheme } from "../../context/Theme";

interface Product {
  _id: string;
  title: string;
  price: number;
  brand: string;
  category: string;
  quantity: number;
  fits: string;
}

const ManageProductsPage = () => {
  const { theme } = useTheme();
  const isDark = theme === "dark";
  const navigate = useNavigate();
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  const fetchProducts = async () => {
    try {
      const res = await fetch("http://localhost:3000/api/products");
      const data = await res.json();
      setProducts(data.products);
    } catch (error) {
      alert("Failed to fetch products.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const handleDelete = async (id: string) => {
    const confirm = window.confirm(
      "Are you sure you want to delete this product?"
    );
    if (!confirm) return;

    try {
      const res = await fetch(
        `http://localhost:3000/api/products/${id}/delete`,
        {
          method: "DELETE",
        }
      );

      if (res.ok) {
        setProducts((prev) => prev.filter((p) => p._id !== id));
        alert("Product deleted.");
      } else {
        alert("Failed to delete.");
      }
    } catch (error) {
      alert("Delete failed.");
    }
  };

  return (
    <main
      className={`min-h-screen px-6 py-10 ${
        isDark ? "bg-zinc-900 text-zinc-100" : "bg-zinc-100 text-zinc-900"
      }`}
    >
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">Manage Products</h1>
        <button
          onClick={() => navigate("/admin/products/create")}
          className="bg-sky-600 hover:bg-sky-700 text-white py-2 px-4 rounded-md font-semibold text-sm"
        >
          + Create Product
        </button>
      </div>

      {loading ? (
        <p className="animate-pulse text-center">Loading products...</p>
      ) : (
        <div className="overflow-x-auto">
          <table className="w-full table-auto text-sm border-collapse">
            <thead>
              <tr className="bg-zinc-200 dark:bg-zinc-800">
                <th className="p-2 text-left">Title</th>
                <th className="p-2 text-left">Price</th>
                <th className="p-2 text-left">Brand</th>
                <th className="p-2 text-left">Category</th>
                <th className="p-2 text-left">Fits</th>
                <th className="p-2 text-left">Actions</th>
              </tr>
            </thead>
            <tbody>
              {products.map((product) => (
                <tr
                  key={product._id}
                  className="border-b border-zinc-300 dark:border-zinc-700"
                >
                  <td className="p-2">{product.title}</td>
                  <td className="p-2">￡{product.price.toFixed(2)}</td>
                  <td className="p-2">{product.brand}</td>
                  <td className="p-2">{product.category}</td>
                  <td className="p-2">{product.fits}</td>
                  <td className="p-2">{product.quantity}</td>
                  <td className="p-2 space-x-2">
                    <button
                      onClick={() =>
                        navigate(`/admin/products/edit/${product._id}`)
                      }
                      className="bg-indigo-600 hover:bg-indigo-700 text-white py-1 px-3 rounded text-xs"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => handleDelete(product._id)}
                      className="bg-rose-600 hover:bg-rose-700 text-white py-1 px-3 rounded text-xs"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
              {products.length === 0 && (
                <tr>
                  <td colSpan={6} className="text-center py-4 text-zinc-500">
                    No products found.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      )}
    </main>
  );
};

export default ManageProductsPage;
