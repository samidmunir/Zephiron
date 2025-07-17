// import { useAuth } from "../../contexts/AuthContext";
// import { formatDistanceToNow } from "date-fns";

// const SubscriptionSettings = () => {
//   const { user } = useAuth();
//   const plan = user?.subscription || "FREE";

//   // Mock expiration and renewal status for demonstration
//   const mockExpirationDate = new Date();
//   mockExpirationDate.setDate(mockExpirationDate.getDate() + 14); // 14 days from now
//   const isAutoRenew = plan !== "FREE";

//   const planDetails = {
//     FREE: {
//       label: "Free Plan",
//       features: ["Track job applications", "Basic resume builder"],
//       bg: "bg-gray-100 dark:bg-gray-800",
//     },
//     BASIC: {
//       label: "Basic Plan",
//       features: ["Everything in Free", "Analytics", "Save job templates"],
//       bg: "bg-blue-100 dark:bg-blue-900",
//     },
//     PRO: {
//       label: "Pro Plan",
//       features: [
//         "Everything in Basic",
//         "AI features",
//         "PDF Export",
//         "Priority Support",
//       ],
//       bg: "bg-purple-100 dark:bg-purple-900",
//     },
//   };

//   const current = planDetails[plan];

//   return (
//     <div
//       className={`rounded-xl p-6 shadow ${current.bg} text-gray-900 dark:text-white`}
//     >
//       <h2 className="text-2xl font-bold mb-4">Your Subscription</h2>

//       <div className="mb-4">
//         <p className="text-lg font-semibold">{current.label}</p>
//         <ul className="list-disc list-inside mt-2 text-sm">
//           {current.features.map((f: any, i: any) => (
//             <li key={i}>{f}</li>
//           ))}
//         </ul>
//       </div>

//       {plan !== "FREE" && (
//         <div className="mb-4 text-sm text-gray-700 dark:text-gray-300">
//           <p>
//             <strong>Renews:</strong>{" "}
//             {isAutoRenew ? "Automatically" : "Manually"}
//           </p>
//           <p>
//             <strong>Next billing date:</strong>{" "}
//             {formatDistanceToNow(mockExpirationDate, { addSuffix: true })}
//           </p>
//         </div>
//       )}

//       <div className="mt-6">
//         <p className="text-sm text-gray-600 dark:text-gray-300 mb-2">
//           Want to unlock more features?
//         </p>
//         <button
//           onClick={() => alert("Redirect to billing/upgrade flow")}
//           className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
//         >
//           Change or Upgrade Plan
//         </button>
//       </div>
//     </div>
//   );
// };

// export default SubscriptionSettings;

import { useAuth } from "../../contexts/AuthContext";
import { format } from "date-fns";
import axios from "axios";
import { useState } from "react";

const SubscriptionSettings = () => {
  const { user } = useAuth();
  const plan = user?.subscription || "FREE";
  const expiresAt = user?.subscription.expiresAt || null;
  const isAutoRenew = user?.subscription?.isAutoRenew || false;

  const [loading, setLoading] = useState(false);

  const planDetails = {
    FREE: {
      label: "Free Plan",
      color: "bg-gray-100 dark:bg-gray-800",
      features: ["Track job applications", "Basic resume builder"],
    },
    BASIC: {
      label: "Basic Plan",
      color: "bg-blue-100 dark:bg-blue-900",
      features: [
        "Everything in Free",
        "Analytics dashboard",
        "Save job templates",
      ],
    },
    PRO: {
      label: "Pro Plan",
      color: "bg-purple-100 dark:bg-purple-900",
      features: [
        "Everything in Basic",
        "AI insights",
        "PDF Resume export",
        "Comment threads on jobs",
        "Priority support",
      ],
    },
  };

  const current = planDetails[plan];

  const handleUpgrade = async () => {
    try {
      setLoading(true);
      const token = localStorage.getItem("token");
      const res = await axios.post(
        `${import.meta.env.VITE_API_URL}/stripe/create-checkout-session`,
        {},
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      window.location.href = res.data.url;
    } catch (err) {
      console.error("Checkout error", err);
      alert("Something went wrong. Try again.");
    } finally {
      setLoading(false);
    }
  };

  const handleBillingPortal = async () => {
    try {
      const token = localStorage.getItem("token");
      const res = await axios.post(
        `${import.meta.env.VITE_API_URL}/stripe/customer-portal`,
        {},
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      window.location.href = res.data.url;
    } catch (err) {
      console.error("Billing portal error", err);
      alert("Unable to open billing portal.");
    }
  };

  return (
    <div
      className={`rounded-xl p-6 shadow-md ${current.color} text-gray-900 dark:text-white`}
    >
      <h2 className="text-2xl font-bold mb-4">Your Subscription</h2>

      <div className="mb-4">
        <p className="text-lg font-semibold">{current.label}</p>
        <ul className="list-disc list-inside mt-2 text-sm">
          {current.features.map((feature: any, index: any) => (
            <li key={index}>{feature}</li>
          ))}
        </ul>
      </div>

      {plan !== "FREE" && (
        <div className="mb-4 text-sm text-gray-700 dark:text-gray-300 space-y-1">
          <p>
            <strong>Renews:</strong>{" "}
            {isAutoRenew ? "Automatically" : "Manually"}
          </p>
          {expiresAt && (
            <p>
              <strong>Next billing date:</strong>{" "}
              {format(new Date(expiresAt), "MMMM d, yyyy")}
            </p>
          )}
        </div>
      )}

      <div className="mt-6 space-y-2">
        <button
          onClick={handleUpgrade}
          disabled={loading}
          className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition-colors"
        >
          {loading ? "Redirecting..." : "Change or Upgrade Plan"}
        </button>

        {plan !== "FREE" && (
          <button
            onClick={handleBillingPortal}
            className="w-full bg-transparent border border-gray-400 dark:border-gray-600 text-sm py-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-700"
          >
            Open Billing Portal
          </button>
        )}
      </div>
    </div>
  );
};

export default SubscriptionSettings;
