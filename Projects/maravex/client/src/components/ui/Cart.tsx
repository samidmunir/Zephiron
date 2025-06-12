import { ShoppingCart } from "lucide-react";
import { useTheme } from "../../context/Theme";

const Cart = () => {
  const { theme } = useTheme();
  const isDark = theme === "dark";
  const itemsInCart = 3;

  return (
    <button className="relative p-2 rounded-full">
      <ShoppingCart
        className={`w-6 h-6 ${isDark ? "text-emerald-400" : "text-green-600"}`}
      />
      {itemsInCart > 0 && (
        <span className="absolute -top-1 -right-1 bg-rose-500 text-zinc-100 text-xs w-5 h-5 flex items-center justify-center rounded-full">
          {itemsInCart}
        </span>
      )}
    </button>
  );
};

export default Cart;
