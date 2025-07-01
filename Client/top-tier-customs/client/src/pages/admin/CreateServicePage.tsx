// // src/pages/admin/CreateServicePage.tsx
// import { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import { useTheme } from "../../context/Theme";

// const CreateServicePage = () => {
//   const navigate = useNavigate();
//   const { theme } = useTheme();
//   const isDark = theme === "dark";

//   const [formData, setFormData] = useState({
//     title: "",
//     description: "",
//     dropOff: false,
//     estimatedTime: "",
//     price: "",
//     category: "",
//     image: "",
//   });

//   const handleChange = (
//     e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
//   ) => {
//     const { name, value, type, checked } = e.target;
//     setFormData((prev) => ({
//       ...prev,
//       [name]: type === "checkbox" ? checked : value,
//     }));
//   };

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();

//     const res = await fetch("http://localhost:3000/api/services", {
//       method: "POST",
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify({ ...formData, cost: parseFloat(formData.cost) }),
//     });

//     if (!res.ok) {
//       alert("Failed to create service");
//       return;
//     }

//     navigate("/admin/services");
//   };

//   return (
//     <div
//       className={`min-h-screen p-6 ${
//         isDark ? "bg-zinc-900 text-white" : "bg-white text-black"
//       }`}
//     >
//       <h1 className="text-3xl font-bold mb-6">Create New Service</h1>
//       <form onSubmit={handleSubmit} className="max-w-2xl space-y-4">
//         <input
//           type="text"
//           name="title"
//           placeholder="Title"
//           className="input"
//           value={formData.title}
//           onChange={handleChange}
//           required
//         />
//         <textarea
//           name="description"
//           placeholder="Description"
//           className="input"
//           rows={4}
//           value={formData.description}
//           onChange={handleChange}
//           required
//         />
//         <input
//           type="text"
//           name="estimatedTime"
//           placeholder="Estimated Time (e.g. 2-3 hours)"
//           className="input"
//           value={formData.estimatedTime}
//           onChange={handleChange}
//           required
//         />
//         <input
//           type="text"
//           name="cost"
//           placeholder="Cost (e.g. 149.99)"
//           className="input"
//           value={formData.cost}
//           onChange={handleChange}
//           required
//         />
//         <input
//           type="text"
//           name="category"
//           placeholder="Category"
//           className="input"
//           value={formData.category}
//           onChange={handleChange}
//         />
//         <input
//           type="text"
//           name="image"
//           placeholder="Image URL"
//           className="input"
//           value={formData.image}
//           onChange={handleChange}
//         />
//         <label className="flex items-center gap-2">
//           <input
//             type="checkbox"
//             name="dropoffRequired"
//             checked={formData.dropoffRequired}
//             onChange={handleChange}
//           />
//           Drop-off Required?
//         </label>
//         <button
//           type="submit"
//           className="mt-4 bg-emerald-600 hover:bg-emerald-700 text-white px-4 py-2 rounded-md"
//         >
//           Create Service
//         </button>
//       </form>
//     </div>
//   );
// };

// export default CreateServicePage;

// import { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import { useTheme } from "../../context/Theme";

// const CreateServicePage = () => {
//   const { theme } = useTheme();
//   const isDark = theme === "dark";
//   const navigate = useNavigate();

//   const [title, setTitle] = useState("");
//   const [cost, setCost] = useState("");
//   const [durationMin, setDurationMin] = useState("");
//   const [durationMax, setDurationMax] = useState("");
//   const [dropoffRequired, setDropoffRequired] = useState(false);
//   const [category, setCategory] = useState("");
//   const [image, setImage] = useState("");

//   const [loading, setLoading] = useState(false);

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();

//     if (
//       !title ||
//       !cost ||
//       !durationMin ||
//       !durationMax ||
//       !category ||
//       !image
//     ) {
//       alert("Please fill out all required fields.");
//       return;
//     }

//     const newService = {
//       title,
//       cost: parseFloat(cost),
//       duration: {
//         min: parseInt(durationMin),
//         max: parseInt(durationMax),
//       },
//       dropoffRequired,
//       category,
//       image,
//     };

//     try {
//       setLoading(true);
//       const res = await fetch("http://localhost:3000/api/services", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify(newService),
//       });

//       if (res.ok) {
//         alert("Service created.");
//         navigate("/admin/services");
//       } else {
//         alert("Failed to create service.");
//       }
//     } catch (error) {
//       alert("Error occurred while creating service.");
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <main
//       className={`min-h-screen px-6 py-10 ${
//         isDark ? "bg-zinc-900 text-zinc-100" : "bg-white text-zinc-900"
//       }`}
//     >
//       <div className="max-w-2xl mx-auto">
//         <h1 className="text-3xl font-bold mb-6">Create New Service</h1>

//         <form onSubmit={handleSubmit} className="space-y-6">
//           {/* Title */}
//           <div>
//             <label className="block font-semibold mb-1">Title *</label>
//             <input
//               type="text"
//               className="w-full p-2 rounded border dark:border-zinc-700 bg-transparent"
//               value={title}
//               onChange={(e) => setTitle(e.target.value)}
//               required
//             />
//           </div>

//           {/* Cost */}
//           <div>
//             <label className="block font-semibold mb-1">Cost (GBP) *</label>
//             <input
//               type="number"
//               className="w-full p-2 rounded border dark:border-zinc-700 bg-transparent"
//               value={cost}
//               onChange={(e) => setCost(e.target.value)}
//               required
//               min={0}
//               step={0.01}
//             />
//           </div>

//           {/* Duration */}
//           <div className="flex gap-4">
//             <div className="flex-1">
//               <label className="block font-semibold mb-1">
//                 Min Duration (hrs) *
//               </label>
//               <input
//                 type="number"
//                 className="w-full p-2 rounded border dark:border-zinc-700 bg-transparent"
//                 value={durationMin}
//                 onChange={(e) => setDurationMin(e.target.value)}
//                 required
//                 min={0}
//               />
//             </div>
//             <div className="flex-1">
//               <label className="block font-semibold mb-1">
//                 Max Duration (hrs) *
//               </label>
//               <input
//                 type="number"
//                 className="w-full p-2 rounded border dark:border-zinc-700 bg-transparent"
//                 value={durationMax}
//                 onChange={(e) => setDurationMax(e.target.value)}
//                 required
//                 min={0}
//               />
//             </div>
//           </div>

//           {/* Drop-off Required */}
//           <div>
//             <label className="block font-semibold mb-1">
//               Drop-off Required *
//             </label>
//             <select
//               className="w-full p-2 rounded border dark:border-zinc-700 bg-transparent"
//               value={dropoffRequired ? "yes" : "no"}
//               onChange={(e) => setDropoffRequired(e.target.value === "yes")}
//               required
//             >
//               <option value="no">No</option>
//               <option value="yes">Yes</option>
//             </select>
//           </div>

//           {/* Category */}
//           <div>
//             <label className="block font-semibold mb-1">Category *</label>
//             <input
//               type="text"
//               className="w-full p-2 rounded border dark:border-zinc-700 bg-transparent"
//               value={category}
//               onChange={(e) => setCategory(e.target.value)}
//               required
//             />
//           </div>

//           {/* Image */}
//           <div>
//             <label className="block font-semibold mb-1">Image URL *</label>
//             <input
//               type="url"
//               className="w-full p-2 rounded border dark:border-zinc-700 bg-transparent"
//               value={image}
//               onChange={(e) => setImage(e.target.value)}
//               required
//             />
//           </div>

//           <button
//             type="submit"
//             disabled={loading}
//             className="w-full bg-emerald-600 hover:bg-emerald-700 text-white py-2 rounded-md font-semibold"
//           >
//             {loading ? "Creating..." : "Create Service"}
//           </button>
//         </form>
//       </div>
//     </main>
//   );
// };

// export default CreateServicePage;

import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useTheme } from "../../context/Theme";

const CreateServicePage = () => {
  const { theme } = useTheme();
  const isDark = theme === "dark";
  const navigate = useNavigate();

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [durationMin, setDurationMin] = useState("");
  const [durationMax, setDurationMax] = useState("");
  const [dropOff, setDropOff] = useState(false);
  const [category, setCategory] = useState("");
  const [type, setType] = useState("");
  const [image, setImage] = useState("");

  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (
      !title ||
      !description ||
      !price ||
      !durationMin ||
      !durationMax ||
      !category ||
      !type ||
      !image
    ) {
      alert("Please fill out all required fields.");
      return;
    }

    const newService = {
      title,
      description,
      price: parseFloat(price),
      duration: {
        min: parseInt(durationMin),
        max: parseInt(durationMax),
      },
      dropOff,
      category,
      type,
      image,
    };

    try {
      setLoading(true);
      const res = await fetch("http://localhost:3000/api/services/create", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newService),
      });

      if (res.ok) {
        alert("Service created.");
        navigate("/admin/services");
      } else {
        alert("Failed to create service.");
      }
    } catch (error) {
      alert("Error occurred while creating service.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <main
      className={`min-h-screen px-6 py-10 ${
        isDark ? "bg-zinc-900 text-zinc-100" : "bg-white text-zinc-900"
      }`}
    >
      <div className="max-w-2xl mx-auto">
        <h1 className="text-3xl font-bold mb-6">Create New Service</h1>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Title */}
          <div>
            <label className="block font-semibold mb-1">Title *</label>
            <input
              type="text"
              className="w-full p-2 rounded border dark:border-zinc-700 bg-transparent"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
            />
          </div>

          {/* Description */}
          <div>
            <label className="block font-semibold mb-1">Description *</label>
            <input
              type="text"
              className="w-full p-2 rounded border dark:border-zinc-700 bg-transparent"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              required
            />
          </div>

          {/* price */}
          <div>
            <label className="block font-semibold mb-1">Cost (GBP) *</label>
            <input
              type="number"
              className="w-full p-2 rounded border dark:border-zinc-700 bg-transparent"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              required
              min={0}
              step={0.01}
            />
          </div>

          {/* Duration */}
          <div className="flex gap-4">
            <div className="flex-1">
              <label className="block font-semibold mb-1">
                Min Duration (hrs) *
              </label>
              <input
                type="number"
                className="w-full p-2 rounded border dark:border-zinc-700 bg-transparent"
                value={durationMin}
                onChange={(e) => setDurationMin(e.target.value)}
                required
                min={0}
              />
            </div>
            <div className="flex-1">
              <label className="block font-semibold mb-1">
                Max Duration (hrs) *
              </label>
              <input
                type="number"
                className="w-full p-2 rounded border dark:border-zinc-700 bg-transparent"
                value={durationMax}
                onChange={(e) => setDurationMax(e.target.value)}
                required
                min={0}
              />
            </div>
          </div>

          {/* Drop-off Required */}
          <div>
            <label className="block font-semibold mb-1">
              Drop-off Required *
            </label>
            <select
              className="w-full p-2 rounded border dark:border-zinc-700 bg-transparent"
              value={dropOff ? "yes" : "no"}
              onChange={(e) => setDropOff(e.target.value === "yes")}
              required
            >
              <option value="no">No</option>
              <option value="yes">Yes</option>
            </select>
          </div>

          {/* Category */}
          <div>
            <label className="block font-semibold mb-1">Category *</label>
            <input
              type="text"
              className="w-full p-2 rounded border dark:border-zinc-700 bg-transparent"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              required
            />
          </div>

          {/* Type */}
          <div>
            <label className="block font-semibold mb-1">Type *</label>
            <input
              type="text"
              className="w-full p-2 rounded border dark:border-zinc-700 bg-transparent"
              value={type}
              onChange={(e) => setType(e.target.value)}
              required
            />
          </div>

          {/* Image */}
          <div>
            <label className="block font-semibold mb-1">Image URL *</label>
            <input
              type="url"
              className="w-full p-2 rounded border dark:border-zinc-700 bg-transparent"
              value={image}
              onChange={(e) => setImage(e.target.value)}
              required
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-emerald-600 hover:bg-emerald-700 text-white py-2 rounded-md font-semibold"
          >
            {loading ? "Creating..." : "Create Service"}
          </button>
        </form>
      </div>
    </main>
  );
};

export default CreateServicePage;
