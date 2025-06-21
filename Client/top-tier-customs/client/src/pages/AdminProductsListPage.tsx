import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
// import axios from "axios";

const AdminProductListPage = () => {
  const [products, setProducts] = useState([]);

  const fetchProducts = async () => {
    const res = await fetch("http://localhost:3000/api/products", {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    });
    const data = await res.json();
    setProducts(data.products);
  };

  const deleteProduct = async (id: string) => {
    if (confirm("Are you sure you want to delete this product?")) {
      await fetch(`http://localhost:3000/api/products/${id}/delete`, {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
      });
      fetchProducts(); // Refresh list
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div className="max-w-7xl mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6">Admin Product Management</h1>

      <div className="overflow-x-auto bg-white shadow rounded-lg">
        <table className="min-w-full text-left text-sm">
          <thead className="bg-zinc-800 text-white uppercase">
            <tr>
              <th className="px-6 py-3">Title</th>
              <th className="px-6 py-3">Brand</th>
              <th className="px-6 py-3">Price</th>
              <th className="px-6 py-3">Images</th>
              <th className="px-6 py-3">Actions</th>
            </tr>
          </thead>
          <tbody>
            {products.map((p: any) => (
              <tr
                key={p._id}
                className="border-b hover:bg-zinc-50 transition-all"
              >
                <td className="px-6 py-4">{p.title}</td>
                <td className="px-6 py-4">{p.brand}</td>
                <td className="px-6 py-4">${p.price}</td>
                <td className="px-6 py-4">
                  {p.images?.length} image{p.images?.length !== 1 && "s"}
                </td>
                <td className="px-6 py-4 flex gap-2">
                  <Link
                    to={`/admin/products/edit/${p._id}`}
                    className="bg-blue-600 hover:bg-blue-700 text-white px-3 py-1 rounded text-sm"
                  >
                    Edit
                  </Link>
                  <button
                    onClick={() => deleteProduct(p._id)}
                    className="bg-red-600 hover:bg-red-700 text-white px-3 py-1 rounded text-sm"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AdminProductListPage;
