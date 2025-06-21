import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useTheme } from "../../context/Theme";

interface Product {
  _id: string;
  title: string;
  description: string;
  images: string[];
  price: number;
  discount: number;
  quantity: number;
  installable: boolean;
  category: string;
  type: string;
  brand: string;
  fits: string[];
  createdAt: string;
  updatedAt: string;
}

const EditProductPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { theme } = useTheme();
  const isDark = theme === "dark";

  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState(true);
  const [form, setForm] = useState<
    Omit<Product, "_id" | "createdAt" | "updatedAt">
  >({
    title: "",
    description: "",
    images: [],
    price: 0,
    discount: 0,
    quantity: 0,
    installable: false,
    category: "",
    type: "",
    brand: "",
    fits: [""],
  });

  const fetchProduct = async () => {
    try {
      const res = await fetch(`http://localhost:3000/api/products/${id}`);
      const data = await res.json();
      setProduct(data.product);
      const { _id, createdAt, updatedAt, ...rest } = data.product;
      setForm(rest);
    } catch (error) {
      alert("Failed to load product.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProduct();
  }, [id]);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value, type, checked } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleImageChange = (index: number, value: string) => {
    const updatedImages = [...form.images];
    updatedImages[index] = value;
    setForm((prev) => ({ ...prev, images: updatedImages }));
  };

  const addImageField = () => {
    setForm((prev) => ({ ...prev, images: [...prev.images, ""] }));
  };

  const handleUpdate = async () => {
    try {
      const res = await fetch(`http://localhost:3000/api/products/${id}/edit`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      console.log(res);

      if (res.ok) {
        alert("Product updated successfully!");
        navigate("/admin/products");
      } else {
        const errorData = await res.json();
        alert("Update failed: " + errorData.message);
      }
    } catch (error) {
      alert("Update failed: " + error);
    }
  };

  if (loading) {
    return (
      <div className="text-center py-20 text-xl animate-pulse">
        Loading product...
      </div>
    );
  }

  if (!product) {
    return <div className="text-center py-20 text-xl">Product not found.</div>;
  }

  return (
    <main
      className={`min-h-screen px-6 py-10 transition-all ${
        isDark ? "bg-zinc-900 text-zinc-100" : "bg-zinc-100 text-zinc-900"
      }`}
    >
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-8 text-center">Edit Product</h1>

        <div className="grid grid-cols-1 gap-6">
          {/* Basic Inputs */}
          {[
            { label: "Title", name: "title" },
            { label: "Brand", name: "brand" },
            { label: "Category", name: "category" },
            { label: "Type", name: "type" },
            { label: "Quantity", name: "quantity", type: "number" },
            { label: "Price", name: "price", type: "number" },
            { label: "Discount (%)", name: "discount", type: "number" },
          ].map(({ label, name, type }) => (
            <div key={name}>
              <label className="block text-sm font-medium mb-1">{label}</label>
              <input
                name={name}
                type={type || "text"}
                value={(form as any)[name]}
                onChange={handleChange}
                className="w-full px-3 py-2 rounded-md border border-zinc-300 dark:border-zinc-600 bg-white dark:bg-zinc-800 focus:ring-2 focus:outline-none transition"
              />
            </div>
          ))}

          {/* Installable */}
          <div className="flex items-center gap-3">
            <input
              type="checkbox"
              name="installable"
              checked={form.installable}
              onChange={handleChange}
              className="h-5 w-5"
            />
            <label className="text-sm font-medium">Installable</label>
          </div>

          {/* Fits */}
          <div>
            <label className="block text-sm font-medium mb-1">
              Fitment (comma-separated)
            </label>
            <input
              name="fits"
              value={form.fits.join(", ")}
              onChange={(e) =>
                setForm((prev) => ({
                  ...prev,
                  fits: e.target.value.split(",").map((f) => f.trim()),
                }))
              }
              className="w-full px-3 py-2 rounded-md border border-zinc-300 dark:border-zinc-600 bg-white dark:bg-zinc-800 focus:ring-2 focus:outline-none transition"
            />
          </div>

          {/* Description */}
          <div>
            <label className="block text-sm font-medium mb-1">
              Description
            </label>
            <textarea
              name="description"
              value={form.description}
              onChange={handleChange}
              rows={4}
              className="w-full px-3 py-2 rounded-md border border-zinc-300 dark:border-zinc-600 bg-white dark:bg-zinc-800 focus:ring-2 focus:outline-none transition"
            />
          </div>

          {/* Images */}
          <div>
            <label className="block text-sm font-medium mb-2">
              Product Images
            </label>
            <div className="flex flex-col gap-3">
              {form.images.map((img, idx) => (
                <input
                  key={idx}
                  value={img}
                  onChange={(e) => handleImageChange(idx, e.target.value)}
                  className="w-full px-3 py-2 rounded-md border border-zinc-300 dark:border-zinc-600 bg-white dark:bg-zinc-800 focus:ring-2 focus:outline-none transition"
                  placeholder={`Image URL ${idx + 1}`}
                />
              ))}
              <button
                onClick={addImageField}
                className="self-start px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white text-sm rounded-md transition"
              >
                + Add Image
              </button>
            </div>
          </div>

          {/* Save Button */}
          <div className="mt-6 text-center">
            <button
              onClick={handleUpdate}
              className="px-6 py-3 bg-sky-600 hover:bg-sky-700 text-white text-lg font-semibold rounded-md transition"
            >
              Save / Update Product
            </button>
          </div>
        </div>
      </div>
    </main>
  );
};

export default EditProductPage;
