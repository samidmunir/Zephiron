// import { useState, useEffect } from "react";
// import { useNavigate } from "react-router-dom";
// import { useTheme } from "../context/Theme";
// import { useAuth } from "../context/Auth";
// import { toast } from "react-toastify";

// const EditProfilePage = () => {
//   const { theme } = useTheme();
//   const { user, setUser } = useAuth();

//   const navigate = useNavigate();

//   const isDark = theme === "dark";
//   const bg = isDark ? "bg-zinc-950 text-white" : "bg-zinc-50 text-zinc-900";
//   const card = isDark ? "bg-zinc-900" : "bg-white";
//   const border = isDark ? "border-zinc-700" : "border-zinc-300";

//   const [form, setForm] = useState({
//     firstName: "",
//     lastName: "",
//     email: "",
//     phone: "",
//     dob: "",
//     billingAddress: {
//       name: "",
//       address: "",
//       city: "",
//       state: "",
//       postalCode: "",
//       country: "",
//     },
//     shippingAddress: {
//       name: "",
//       address: "",
//       city: "",
//       state: "",
//       postalCode: "",
//       country: "",
//     },
//     sameAsBilling: true,
//     isSubscribed: false,
//   });

//   useEffect(() => {
//     if (user) {
//       setForm({
//         firstName: user.firstName,
//         lastName: user.lastName,
//         email: user.email,
//         phone: user.phone,
//         dob: user.dob,
//         billingAddress: { ...user.billingAddress },
//         shippingAddress: { ...user.shippingAddress },
//         sameAsBilling:
//           JSON.stringify(user.shippingAddress) ===
//           JSON.stringify(user.billingAddress),
//         isSubscribed: user.isSubscribed,
//       });
//     }
//   }, [user]);

//   const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     const { name, value } = e.target;

//     if (name.startsWith("billingAddress.")) {
//       const key = name.split(".")[1];
//       setForm((prev) => ({
//         ...prev,
//         billingAddress: { ...prev.billingAddress, [key]: value },
//       }));
//     } else if (name.startsWith("shippingAddress.")) {
//       const key = name.split(".")[1];
//       setForm((prev) => ({
//         ...prev,
//         shippingAddress: { ...prev.shippingAddress, [key]: value },
//       }));
//     } else {
//       setForm((prev) => ({ ...prev, [name]: value }));
//     }
//   };

//   const handleToggleShipping = () => {
//     setForm((prev) => ({
//       ...prev,
//       sameAsBilling: !prev.sameAsBilling,
//       shippingAddress: !prev.sameAsBilling
//         ? {
//             name: "",
//             address: "",
//             city: "",
//             state: "",
//             postalCode: "",
//             country: "",
//           }
//         : { ...prev.billingAddress },
//     }));
//   };

//   const handleSubscribe = () => {
//     // Simulate subscription toggle
//     setForm((prev) => ({ ...prev, isSubscribed: true }));
//     alert("Thanks for subscribing to our newsletter!");
//   };

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();
//     const formData = {
//       ...form,
//       shippingAddress: form.sameAsBilling
//         ? { ...form.billingAddress }
//         : form.shippingAddress,
//     };
//     console.log(user?.id);
//     try {
//       const res = await fetch(`http://localhost:3000/api/auth/${user?.id}`, {
//         method: "PUT",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify(formData),
//       });
//       const data = await res.json();
//       if (!res.ok) {
//         throw new Error(data.message || "Profile update failed.");
//       }
//       setUser((prev) => ({ ...prev, ...data.user }));
//       //   localStorage.setItem("user", JSON.stringify(data.data));
//       toast.success("Profile updated.");
//       setTimeout(() => {
//         navigate("/dashboard");
//       }, 1500);
//     } catch (e: any) {
//       toast.error("Profile update failed.");
//     }
//     console.log("Updated Profile Data:", formData);
//   };

//   return (
//     <section className={`min-h-screen w-full px-6 md:px-16 py-12 ${bg}`}>
//       <div className={`max-w-4xl mx-auto rounded-xl shadow-md ${card} p-8`}>
//         <h2 className="text-2xl font-bold mb-6">Edit Your Profile</h2>

//         <form onSubmit={handleSubmit} className="space-y-6">
//           {/* Personal Info */}
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//             <input
//               name="firstName"
//               placeholder="First Name"
//               value={form.firstName}
//               onChange={handleChange}
//               className={`w-full px-4 py-3 rounded-md border ${border} bg-transparent`}
//               required
//             />
//             <input
//               name="lastName"
//               placeholder="Last Name"
//               value={form.lastName}
//               onChange={handleChange}
//               className={`w-full px-4 py-3 rounded-md border ${border} bg-transparent`}
//               required
//             />
//             <input
//               type="email"
//               name="email"
//               placeholder="Email"
//               value={form.email}
//               onChange={handleChange}
//               className={`w-full px-4 py-3 rounded-md border ${border} bg-transparent`}
//               required
//             />
//             <input
//               name="phone"
//               placeholder="Phone"
//               value={form.phone}
//               onChange={handleChange}
//               className={`w-full px-4 py-3 rounded-md border ${border} bg-transparent`}
//             />
//             <input
//               type="date"
//               name="dob"
//               value={form.dob}
//               onChange={handleChange}
//               className={`w-full px-4 py-3 rounded-md border ${border} bg-transparent`}
//             />
//           </div>

//           {/* Billing Address */}
//           <div>
//             <h3 className="font-semibold text-lg mb-3">Billing Address</h3>
//             <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//               <input
//                 name="billingAddress.name"
//                 placeholder="Full Name"
//                 value={form.billingAddress.name}
//                 onChange={handleChange}
//                 className={`w-full px-4 py-3 rounded-md border ${border} bg-transparent`}
//                 required
//               />
//               <input
//                 name="billingAddress.address"
//                 placeholder="Address"
//                 value={form.billingAddress.address}
//                 onChange={handleChange}
//                 className={`w-full px-4 py-3 rounded-md border ${border} bg-transparent`}
//                 required
//               />
//               <input
//                 name="billingAddress.city"
//                 placeholder="City"
//                 value={form.billingAddress.city}
//                 onChange={handleChange}
//                 className={`w-full px-4 py-3 rounded-md border ${border} bg-transparent`}
//                 required
//               />
//               <input
//                 name="billingAddress.state"
//                 placeholder="State"
//                 value={form.billingAddress.state}
//                 onChange={handleChange}
//                 className={`w-full px-4 py-3 rounded-md border ${border} bg-transparent`}
//                 required
//               />
//               <input
//                 name="billingAddress.postalCode"
//                 placeholder="Postal Code"
//                 value={form.billingAddress.postalCode}
//                 onChange={handleChange}
//                 className={`w-full px-4 py-3 rounded-md border ${border} bg-transparent`}
//                 required
//               />
//               <input
//                 name="billingAddress.country"
//                 placeholder="Country"
//                 value={form.billingAddress.country}
//                 onChange={handleChange}
//                 className={`w-full px-4 py-3 rounded-md border ${border} bg-transparent`}
//                 required
//               />
//             </div>
//           </div>

//           {/* Shipping Toggle */}
//           <div className="flex items-center gap-3 pt-3">
//             <input
//               type="checkbox"
//               id="sameAsBilling"
//               checked={form.sameAsBilling}
//               onChange={handleToggleShipping}
//             />
//             <label htmlFor="sameAsBilling" className="text-sm">
//               Shipping address is same as billing
//             </label>
//           </div>

//           {/* Shipping Address */}
//           {!form.sameAsBilling && (
//             <div>
//               <h3 className="font-semibold text-lg mb-3">Shipping Address</h3>
//               <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//                 <input
//                   name="shippingAddress.name"
//                   placeholder="Full Name"
//                   value={form.shippingAddress.name}
//                   onChange={handleChange}
//                   className={`w-full px-4 py-3 rounded-md border ${border} bg-transparent`}
//                 />
//                 <input
//                   name="shippingAddress.address"
//                   placeholder="Address"
//                   value={form.shippingAddress.address}
//                   onChange={handleChange}
//                   className={`w-full px-4 py-3 rounded-md border ${border} bg-transparent`}
//                 />
//                 <input
//                   name="shippingAddress.city"
//                   placeholder="City"
//                   value={form.shippingAddress.city}
//                   onChange={handleChange}
//                   className={`w-full px-4 py-3 rounded-md border ${border} bg-transparent`}
//                 />
//                 <input
//                   name="shippingAddress.state"
//                   placeholder="State"
//                   value={form.shippingAddress.state}
//                   onChange={handleChange}
//                   className={`w-full px-4 py-3 rounded-md border ${border} bg-transparent`}
//                 />
//                 <input
//                   name="shippingAddress.postalCode"
//                   placeholder="Postal Code"
//                   value={form.shippingAddress.postalCode}
//                   onChange={handleChange}
//                   className={`w-full px-4 py-3 rounded-md border ${border} bg-transparent`}
//                 />
//                 <input
//                   name="shippingAddress.country"
//                   placeholder="Country"
//                   value={form.shippingAddress.country}
//                   onChange={handleChange}
//                   className={`w-full px-4 py-3 rounded-md border ${border} bg-transparent`}
//                 />
//               </div>
//             </div>
//           )}

//           {/* Newsletter Subscribe */}
//           {!form.isSubscribed && (
//             <div className="pt-6 border-t border-dashed mt-8">
//               <h3 className="text-lg font-semibold mb-2">Stay in the loop</h3>
//               <p className="text-sm mb-3">
//                 Subscribe to the MaraveX newsletter for updates, drops &
//                 exclusive offers.
//               </p>
//               <button
//                 type="button"
//                 onClick={handleSubscribe}
//                 className="px-6 py-3 rounded-md bg-blue-600 hover:bg-blue-700 text-white transition"
//               >
//                 Subscribe to Newsletter
//               </button>
//             </div>
//           )}

//           {/* Submit */}
//           <div className="text-right pt-6">
//             <button
//               type="submit"
//               className="px-6 py-3 bg-green-600 hover:bg-green-700 text-white rounded-md transition"
//             >
//               Save Profile Changes
//             </button>
//           </div>
//         </form>
//       </div>
//     </section>
//   );
// };

// export default EditProfilePage;

// EditProfilePage.tsx

import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useTheme } from "../context/Theme";
import { useAuth } from "../context/Auth";
import { toast } from "react-toastify";

const EditProfilePage = () => {
  const { theme } = useTheme();
  const { user, setUser } = useAuth();

  const navigate = useNavigate();

  const isDark = theme === "dark";
  const bg = isDark ? "bg-zinc-950 text-white" : "bg-zinc-50 text-zinc-900";
  const card = isDark ? "bg-zinc-900" : "bg-white";
  const border = isDark ? "border-zinc-700" : "border-zinc-300";

  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    dob: "",
    billingAddress: {
      name: "",
      address: "",
      city: "",
      state: "",
      postalCode: "",
      country: "",
    },
    shippingAddress: {
      name: "",
      address: "",
      city: "",
      state: "",
      postalCode: "",
      country: "",
    },
    sameAsBilling: true,
    isSubscribed: false,
  });

  useEffect(() => {
    if (user) {
      setForm({
        firstName: user.firstName || "",
        lastName: user.lastName || "",
        email: user.email || "",
        phone: user.phone || "",
        dob: user.dob || "",
        billingAddress: { ...user.billingAddress },
        shippingAddress: { ...user.shippingAddress },
        sameAsBilling:
          JSON.stringify(user.shippingAddress) ===
          JSON.stringify(user.billingAddress),
        isSubscribed: user.isSubscribed || false,
      });
    }
  }, [user]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;

    if (name === "isSubscribed") {
      setForm((prev) => ({ ...prev, isSubscribed: checked }));
    } else if (name.startsWith("billingAddress.")) {
      const key = name.split(".")[1];
      setForm((prev) => ({
        ...prev,
        billingAddress: { ...prev.billingAddress, [key]: value },
      }));
    } else if (name.startsWith("shippingAddress.")) {
      const key = name.split(".")[1];
      setForm((prev) => ({
        ...prev,
        shippingAddress: { ...prev.shippingAddress, [key]: value },
      }));
    } else {
      setForm((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleToggleShipping = () => {
    setForm((prev) => ({
      ...prev,
      sameAsBilling: !prev.sameAsBilling,
      shippingAddress: !prev.sameAsBilling
        ? {
            name: "",
            address: "",
            city: "",
            state: "",
            postalCode: "",
            country: "",
          }
        : { ...prev.billingAddress },
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const formData = {
      ...form,
      shippingAddress: form.sameAsBilling
        ? { ...form.billingAddress }
        : form.shippingAddress,
    };

    try {
      const res = await fetch(`http://localhost:3000/api/auth/${user?.id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();
      if (!res.ok) throw new Error(data.message || "Profile update failed.");

      setUser((prev) => ({ ...prev, ...data.user }));
      toast.success("Profile updated.");
      setTimeout(() => navigate("/dashboard"), 1500);
    } catch (err) {
      toast.error("Profile update failed.");
    }
  };

  return (
    <section className={`min-h-screen w-full px-6 md:px-16 py-12 ${bg}`}>
      <div className={`max-w-4xl mx-auto rounded-xl shadow-md ${card} p-8`}>
        <h2 className="text-2xl font-bold mb-6">Edit Your Profile</h2>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Personal Info */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <input
              name="firstName"
              placeholder="First Name"
              value={form.firstName}
              onChange={handleChange}
              className={`w-full px-4 py-3 rounded-md border ${border} bg-transparent`}
              required
            />
            <input
              name="lastName"
              placeholder="Last Name"
              value={form.lastName}
              onChange={handleChange}
              className={`w-full px-4 py-3 rounded-md border ${border} bg-transparent`}
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={form.email}
              onChange={handleChange}
              className={`w-full px-4 py-3 rounded-md border ${border} bg-transparent`}
              required
            />
            <input
              name="phone"
              placeholder="Phone"
              value={form.phone}
              onChange={handleChange}
              className={`w-full px-4 py-3 rounded-md border ${border} bg-transparent`}
            />
            <input
              type="date"
              name="dob"
              value={form.dob}
              onChange={handleChange}
              className={`w-full px-4 py-3 rounded-md border ${border} bg-transparent`}
            />
          </div>

          {/* Billing Address */}
          <div>
            <h3 className="font-semibold text-lg mb-3">Billing Address</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <input
                name="billingAddress.name"
                placeholder="Full Name"
                value={form.billingAddress.name}
                onChange={handleChange}
                className={`w-full px-4 py-3 rounded-md border ${border} bg-transparent`}
                required
              />
              <input
                name="billingAddress.address"
                placeholder="Address"
                value={form.billingAddress.address}
                onChange={handleChange}
                className={`w-full px-4 py-3 rounded-md border ${border} bg-transparent`}
                required
              />
              <input
                name="billingAddress.city"
                placeholder="City"
                value={form.billingAddress.city}
                onChange={handleChange}
                className={`w-full px-4 py-3 rounded-md border ${border} bg-transparent`}
                required
              />
              <input
                name="billingAddress.state"
                placeholder="State"
                value={form.billingAddress.state}
                onChange={handleChange}
                className={`w-full px-4 py-3 rounded-md border ${border} bg-transparent`}
                required
              />
              <input
                name="billingAddress.postalCode"
                placeholder="Postal Code"
                value={form.billingAddress.postalCode}
                onChange={handleChange}
                className={`w-full px-4 py-3 rounded-md border ${border} bg-transparent`}
                required
              />
              <input
                name="billingAddress.country"
                placeholder="Country"
                value={form.billingAddress.country}
                onChange={handleChange}
                className={`w-full px-4 py-3 rounded-md border ${border} bg-transparent`}
                required
              />
            </div>
          </div>

          {/* Shipping Toggle */}
          <div className="flex items-center gap-3 pt-3">
            <input
              type="checkbox"
              id="sameAsBilling"
              checked={form.sameAsBilling}
              onChange={handleToggleShipping}
            />
            <label htmlFor="sameAsBilling" className="text-sm">
              Shipping address is same as billing
            </label>
          </div>

          {/* Shipping Address */}
          {!form.sameAsBilling && (
            <div>
              <h3 className="font-semibold text-lg mb-3">Shipping Address</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <input
                  name="shippingAddress.name"
                  placeholder="Full Name"
                  value={form.shippingAddress.name}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 rounded-md border ${border} bg-transparent`}
                />
                <input
                  name="shippingAddress.address"
                  placeholder="Address"
                  value={form.shippingAddress.address}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 rounded-md border ${border} bg-transparent`}
                />
                <input
                  name="shippingAddress.city"
                  placeholder="City"
                  value={form.shippingAddress.city}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 rounded-md border ${border} bg-transparent`}
                />
                <input
                  name="shippingAddress.state"
                  placeholder="State"
                  value={form.shippingAddress.state}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 rounded-md border ${border} bg-transparent`}
                />
                <input
                  name="shippingAddress.postalCode"
                  placeholder="Postal Code"
                  value={form.shippingAddress.postalCode}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 rounded-md border ${border} bg-transparent`}
                />
                <input
                  name="shippingAddress.country"
                  placeholder="Country"
                  value={form.shippingAddress.country}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 rounded-md border ${border} bg-transparent`}
                />
              </div>
            </div>
          )}

          {/* Newsletter Subscribe Toggle */}
          <div className="pt-6 border-t border-dashed mt-8">
            <label className="flex items-center gap-3">
              <input
                type="checkbox"
                name="isSubscribed"
                checked={form.isSubscribed}
                onChange={handleChange}
              />
              <span className="text-sm">
                Subscribe to MaraveX newsletter for updates & offers
              </span>
            </label>
          </div>

          {/* Submit */}
          <div className="text-right pt-6">
            <button
              type="submit"
              className="px-6 py-3 bg-green-600 hover:bg-green-700 text-white rounded-md transition"
            >
              Save Profile Changes
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default EditProfilePage;
