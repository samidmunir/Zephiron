import { ShoppingCart } from "lucide-react";
import { useTheme } from "../../context/Theme";
import { useCart } from "../../context/Cart";

interface CartProps {
  type: "icon" | "label";
}

const Cart = (props: CartProps) => {
  const { theme } = useTheme();
  const { cart, toggleCart } = useCart();
  const isDark = theme === "dark";
  const accentColor = isDark ? "text-emerald-500" : "text-green-600";

  const itemsInCart = cart.length;

  if (props.type === "icon") {
    return (
      <button onClick={toggleCart} className="relative p-2 rounded-full">
        <ShoppingCart className={`w-6 h-6 ${accentColor}`} />
        {itemsInCart > 0 && (
          <span className="absolute -top-1 -right-1 bg-rose-500 text-zinc-100 text-xs w-5 h-5 flex items-center justify-center rounded-full">
            {itemsInCart}
          </span>
        )}
      </button>
    );
  } else {
    return (
      <button
        onClick={toggleCart}
        className="relative rounded-full flex items-center gap-2"
      >
        <ShoppingCart
          className={`w-6 h-6 ${
            isDark ? "text-emerald-400" : "text-green-600"
          }`}
        />
        {itemsInCart > 0 && (
          <span className="absolute -top-1 -right-1 bg-rose-500 text-zinc-100 text-xs w-5 h-5 flex items-center justify-center rounded-full">
            {itemsInCart}
          </span>
        )}
        <p
          className={`font-semibold ${
            isDark ? "text-emerald-500" : "text-green-600"
          }`}
        >
          Cart
        </p>
      </button>
    );
  }
  // return (
  //   <button onClick={toggleCart} className="relative p-2 rounded-full">
  //     <ShoppingCart
  //       className={`w-6 h-6 ${isDark ? "text-emerald-400" : "text-green-600"}`}
  //     />
  //     {itemsInCart > 0 && (
  //       <span className="absolute -top-1 -right-1 bg-rose-500 text-zinc-100 text-xs w-5 h-5 flex items-center justify-center rounded-full">
  //         {itemsInCart}
  //       </span>
  //     )}
  //   </button>
  // );
};

export default Cart;
