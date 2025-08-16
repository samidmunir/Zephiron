// import { useParams } from "react-router-dom";
// import { useApplicationStore } from "../stores/ApplicationStore";
// import { useEffect, useState } from "react";
// import { useUserStore } from "../stores/UserStore";
// import { router } from "../router";
// import { useTheme } from "../contexts/ThemeContext";

// const EditApplication = () => {
//   const { theme } = useTheme();
//   const isDark = theme === "dark";

//   const params = useParams();
//   const applicationID = params.id;
//   //   console.log("applicationID:", applicationID);

//   const { user } = useUserStore();

//   const { fetchedApplication, getApplication } = useApplicationStore();

//   const [applicationData, setApplicationData] = useState({
//     title: "",
//     company: "",
//     position: "",
//     category: "",
//     location: {
//       city: "",
//       country: "",
//     },
//     salary: {
//       amount: 0.0,
//       period: "",
//     },
//     status: "",
//   });

//   useEffect(() => {
//     if (!user) {
//       router.navigate("/login");
//       return;
//     }

//     (async () => {
//       try {
//         await getApplication(applicationID);
//         setApplicationData(fetchedApplication);
//         console.log("HERE");
//         console.log("fetchedApplication:", fetchedApplication);
//         console.log("applicationData:", applicationData);
//       } catch (e) {
//         console.error(e);
//       }
//     })();
//   }, [user, getApplication]);

//   const handleChange = (e) => {
//     setApplicationData({ ...applicationData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     // console.log("applicationData:", applicationData);
//   };
//   return (
//     <main>
//       <div>
//         <h1>Edit your application - ApplicationID: {applicationID}</h1>
//       </div>
//       <div>
//         {/* <form onSubmit={handleSubmit} className="mt-4">
//           <div className="space-y-3">
//             <div className="space-y-1">
//               <p
//                 className={`text-lg italic font-bold ${
//                   isDark ? "text-gray-100" : "text-gray-900"
//                 }`}
//               >
//                 Job Title
//               </p>
//               <input
//                 type="text"
//                 id="title"
//                 name="title"
//                 placeholder="Job title"
//                 value={applicationData.title}
//                 onChange={handleChange}
//                 className={`border-2 rounded-md shadow-md px-2 py-1 w-[200px] placeholder:font-medium outline-none ${
//                   isDark ? "border-gray-100" : "border-gray-900"
//                 }`}
//               />
//             </div>
//             <div className="space-y-1">
//               <p
//                 className={`text-lg italic font-bold ${
//                   isDark ? "text-gray-100" : "text-gray-900"
//                 }`}
//               >
//                 Job Company
//               </p>
//               <input
//                 type="text"
//                 id="company"
//                 name="company"
//                 placeholder="Job company"
//                 value={applicationData.company}
//                 onChange={handleChange}
//                 className={`border-2 rounded-md shadow-md px-2 py-1 w-[200px] placeholder:font-medium outline-none ${
//                   isDark ? "border-gray-100" : "border-gray-900"
//                 }`}
//               />
//             </div>
//             <div className="space-y-1">
//               <p
//                 className={`text-lg italic font-bold ${
//                   isDark ? "text-gray-100" : "text-gray-900"
//                 }`}
//               >
//                 Position
//               </p>
//               <input
//                 type="text"
//                 id="position"
//                 name="position"
//                 placeholder="Position"
//                 value={applicationData.position}
//                 onChange={handleChange}
//                 className={`border-2 rounded-md shadow-md px-2 py-1 w-[200px] placeholder:font-medium outline-none ${
//                   isDark ? "border-gray-100" : "border-gray-900"
//                 }`}
//               />
//             </div>
//             <div className="space-y-1">
//               <p
//                 className={`text-lg italic font-bold ${
//                   isDark ? "text-gray-100" : "text-gray-900"
//                 }`}
//               >
//                 Job Category
//               </p>
//               <input
//                 type="text"
//                 id="category"
//                 name="category"
//                 placeholder="Category"
//                 value={applicationData.category}
//                 onChange={handleChange}
//                 className={`border-2 rounded-md shadow-md px-2 py-1 w-[200px] placeholder:font-medium outline-none ${
//                   isDark ? "border-gray-100" : "border-gray-900"
//                 }`}
//               />
//             </div>
//             <div className="space-y-1">
//               <p
//                 className={`text-lg italic font-bold ${
//                   isDark ? "text-gray-100" : "text-gray-900"
//                 }`}
//               >
//                 City
//               </p>
//               <input
//                 type="text"
//                 id="city"
//                 name="city"
//                 placeholder="City"
//                 value={applicationData.location.city}
//                 onChange={handleChange}
//                 className={`border-2 rounded-md shadow-md px-2 py-1 w-[200px] placeholder:font-medium outline-none ${
//                   isDark ? "border-gray-100" : "border-gray-900"
//                 }`}
//               />
//             </div>
//             <div className="space-y-1">
//               <p
//                 className={`text-lg italic font-bold ${
//                   isDark ? "text-gray-100" : "text-gray-900"
//                 }`}
//               >
//                 City
//               </p>
//               <input
//                 type="text"
//                 id="country"
//                 name="country"
//                 placeholder="Country"
//                 value={applicationData.location.country}
//                 onChange={handleChange}
//                 className={`border-2 rounded-md shadow-md px-2 py-1 w-[200px] placeholder:font-medium outline-none ${
//                   isDark ? "border-gray-100" : "border-gray-900"
//                 }`}
//               />
//             </div>
//             <div className="space-y-1">
//               <p
//                 className={`text-lg italic font-bold ${
//                   isDark ? "text-gray-100" : "text-gray-900"
//                 }`}
//               >
//                 City
//               </p>
//               <input
//                 type="text"
//                 id="amount"
//                 name="amount"
//                 placeholder="Salary amount"
//                 value={applicationData.salary.amount}
//                 onChange={handleChange}
//                 className={`border-2 rounded-md shadow-md px-2 py-1 w-[200px] placeholder:font-medium outline-none ${
//                   isDark ? "border-gray-100" : "border-gray-900"
//                 }`}
//               />
//             </div>
//             <div className="space-y-1">
//               <p
//                 className={`text-lg italic font-bold ${
//                   isDark ? "text-gray-100" : "text-gray-900"
//                 }`}
//               >
//                 City
//               </p>
//               <input
//                 type="text"
//                 id="period"
//                 name="period"
//                 placeholder="Salary period"
//                 value={applicationData.salary.period}
//                 onChange={handleChange}
//                 className={`border-2 rounded-md shadow-md px-2 py-1 w-[200px] placeholder:font-medium outline-none ${
//                   isDark ? "border-gray-100" : "border-gray-900"
//                 }`}
//               />
//             </div>
//             <div className="space-y-1">
//               <p
//                 className={`text-lg italic font-bold ${
//                   isDark ? "text-gray-100" : "text-gray-900"
//                 }`}
//               >
//                 City
//               </p>
//               <input
//                 type="text"
//                 id="status"
//                 name="status"
//                 placeholder="Status"
//                 value={applicationData.status}
//                 onChange={handleChange}
//                 className={`border-2 rounded-md shadow-md px-2 py-1 w-[200px] placeholder:font-medium outline-none ${
//                   isDark ? "border-gray-100" : "border-gray-900"
//                 }`}
//               />
//             </div>
//           </div>
//           <button
//             type="submit"
//             className={`text-lg border-2 rounded-md font-semibold px-2 py-1 w-[200px] mt-4 cursor-pointer transition-all duration-300 ${
//               isDark
//                 ? "text-gray-100 hover:bg-gray-100 hover:text-gray-900"
//                 : "text-gray-900 hover:bg-gray-900 hover:text-gray-100"
//             }`}
//           >
//             Signup
//           </button>
//         </form> */}
//       </div>
//     </main>
//   );
// };

// export default EditApplication;

import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { useApplicationStore } from "../stores/ApplicationStore";
import { useUserStore } from "../stores/UserStore";
import { router } from "../router";
import { useTheme } from "../contexts/ThemeContext";

const EMPTY = {
  title: "",
  company: "",
  position: "",
  category: "",
  location: { city: "", country: "" },
  salary: { amount: 0, period: "" },
  status: "",
};

function hydrate(doc) {
  if (!doc) return { ...EMPTY };
  return {
    title: doc.title ?? "",
    company: doc.company ?? "",
    position: doc.position ?? "",
    category: doc.category ?? "",
    location: {
      city: doc.location?.city ?? "",
      country: doc.location?.country ?? "",
    },
    salary: {
      amount:
        typeof doc.salary?.amount === "number"
          ? doc.salary.amount
          : Number(doc.salary?.amount ?? 0),
      period: doc.salary?.period ?? "",
    },
    status: doc.status ?? "",
  };
}

export default function EditApplication() {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  const { id: applicationID } = useParams(); // make sure your route path is .../:id
  const { user } = useUserStore();
  const { fetchedApplication, getApplication } = useApplicationStore();

  const [applicationData, setApplicationData] = useState(EMPTY);

  // auth guard
  useEffect(() => {
    if (!user) router.navigate("/login");
  }, [user]);

  // fetch on mount/ID change; set from the RETURN VALUE (not from stale store)
  useEffect(() => {
    if (!user || !applicationID) return;
    (async () => {
      const doc = await getApplication(applicationID); // ensure this returns the doc (see store fix below)
      if (doc) setApplicationData(hydrate(doc));
    })();
  }, [user, applicationID, getApplication]);

  // if your store sets fetchedApplication but getApplication doesn't return it,
  // this keeps local state in sync once the store updates:
  useEffect(() => {
    if (fetchedApplication) setApplicationData(hydrate(fetchedApplication));
  }, [fetchedApplication]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "city" || name === "country") {
      setApplicationData((prev) => ({
        ...prev,
        location: { ...prev.location, [name]: value },
      }));
    } else if (name === "amount" || name === "period") {
      setApplicationData((prev) => ({
        ...prev,
        salary: {
          ...prev.salary,
          [name]: name === "amount" ? Number(value || 0) : value,
        },
      }));
    } else {
      setApplicationData((prev) => ({ ...prev, [name]: value }));
    }
  };

  // render UI that reads from applicationData safely...
  return (
    <main>
      <div>
        <h1>
          Edit your application - ApplicationID:{" "}
          {applicationID || "(missing id)"}
        </h1>
      </div>
      <div>
        <h1>{applicationData.title}</h1>
        <h2>{applicationData.company}</h2>
        <h3>{applicationData.position}</h3>
      </div>
    </main>
  );
}
