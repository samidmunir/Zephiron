// import { useUserStore } from "../stores/UserStore";
// import { router } from "../router";

// const UserDashboard = () => {
//   const { user } = useUserStore();
//   return (
//     <main>
//       <div>
//         <h1 className="text-blue-600 text-5xl font-semibold">
//           Welcome to your User Dashboard, {user.name}
//         </h1>
//       </div>
//     </main>
//   );
// };

// export default UserDashboard;

// UserDashboard.jsx
import { useEffect } from "react";
import { useUserStore } from "../stores/UserStore";
import { router } from "../router";
import { motion } from "framer-motion";

const UserDashboard = () => {
  const { user } = useUserStore();

  useEffect(() => {
    if (!user) {
      router.navigate("/login"); // move navigation out of render
    }
  }, [user]);

  if (!user) return null; // or a small spinner while redirecting

  return (
    <motion.main
      initial={{ opacity: 0, y: -20, x: -20 }}
      animate={{ opacity: 1, y: 0, x: 0 }}
      transition={{ duration: 0.8, delay: 0.2 }}
      className={`min-h-screen px-8 py-4`}
    >
      <div>
        <h1 className="text-blue-600 text-5xl font-semibold">
          Welcome to your User Dashboard, {user.name}
        </h1>
      </div>
    </motion.main>
  );
};

export default UserDashboard;
