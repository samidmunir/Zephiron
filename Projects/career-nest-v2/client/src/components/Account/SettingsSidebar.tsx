type Props = {
  current: string;
  setCurrent: (s: string) => void;
};

const nav = [
  { id: "profile", label: "Profile" },
  { id: "resume", label: "Resume" },
  { id: "security", label: "Security" },
  { id: "billing", label: "Billing" },
  { id: "subscription", label: "Subscription" },
];

const SettingsSidebar = ({ current, setCurrent }: Props) => {
  return (
    <aside className="w-60 border-r bg-white dark:bg-gray-800 dark:border-gray-700 p-6">
      <h2 className="text-lg font-semibold mb-4 text-gray-700 dark:text-gray-200">
        Settings
      </h2>
      <ul className="space-y-2">
        {nav.map((item) => (
          <li key={item.id}>
            <button
              onClick={() => setCurrent(item.id)}
              className={`w-full text-left px-3 py-2 rounded-md font-medium ${
                current === item.id
                  ? "bg-blue-600 text-white"
                  : "text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
              }`}
            >
              {item.label}
            </button>
          </li>
        ))}
      </ul>
    </aside>
  );
};

export default SettingsSidebar;
