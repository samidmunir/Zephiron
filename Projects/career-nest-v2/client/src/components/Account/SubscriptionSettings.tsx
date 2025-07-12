import { useAuth } from "../../contexts/AuthContext";
import { formatDistanceToNow } from "date-fns";

const SubscriptionSettings = () => {
  const { user } = useAuth();
  const plan = user?.subscription || "FREE";

  // Mock expiration and renewal status for demonstration
  const mockExpirationDate = new Date();
  mockExpirationDate.setDate(mockExpirationDate.getDate() + 14); // 14 days from now
  const isAutoRenew = plan !== "FREE";

  const planDetails = {
    FREE: {
      label: "Free Plan",
      features: ["Track job applications", "Basic resume builder"],
      bg: "bg-gray-100 dark:bg-gray-800",
    },
    BASIC: {
      label: "Basic Plan",
      features: ["Everything in Free", "Analytics", "Save job templates"],
      bg: "bg-blue-100 dark:bg-blue-900",
    },
    PRO: {
      label: "Pro Plan",
      features: [
        "Everything in Basic",
        "AI features",
        "PDF Export",
        "Priority Support",
      ],
      bg: "bg-purple-100 dark:bg-purple-900",
    },
  };

  const current = planDetails[plan];

  return (
    <div
      className={`rounded-xl p-6 shadow ${current.bg} text-gray-900 dark:text-white`}
    >
      <h2 className="text-2xl font-bold mb-4">Your Subscription</h2>

      <div className="mb-4">
        <p className="text-lg font-semibold">{current.label}</p>
        <ul className="list-disc list-inside mt-2 text-sm">
          {current.features.map((f, i) => (
            <li key={i}>{f}</li>
          ))}
        </ul>
      </div>

      {plan !== "FREE" && (
        <div className="mb-4 text-sm text-gray-700 dark:text-gray-300">
          <p>
            <strong>Renews:</strong>{" "}
            {isAutoRenew ? "Automatically" : "Manually"}
          </p>
          <p>
            <strong>Next billing date:</strong>{" "}
            {formatDistanceToNow(mockExpirationDate, { addSuffix: true })}
          </p>
        </div>
      )}

      <div className="mt-6">
        <p className="text-sm text-gray-600 dark:text-gray-300 mb-2">
          Want to unlock more features?
        </p>
        <button
          onClick={() => alert("Redirect to billing/upgrade flow")}
          className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
        >
          Change or Upgrade Plan
        </button>
      </div>
    </div>
  );
};

export default SubscriptionSettings;
