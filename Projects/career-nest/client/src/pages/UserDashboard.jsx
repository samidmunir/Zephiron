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

const UserDashboard = () => {
  const { user } = useUserStore();

  useEffect(() => {
    if (!user) {
      router.navigate("/login"); // move navigation out of render
    }
  }, [user]);

  if (!user) return null; // or a small spinner while redirecting

  return (
    <main>
      <div>
        <h1 className="text-blue-600 text-5xl font-semibold">
          Welcome to your User Dashboard, {user.name}
        </h1>
      </div>
    </main>
  );
};

export default UserDashboard;
