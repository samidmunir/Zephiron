import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <header>
      <div>
        <h1>Career Nest</h1>
      </div>
      <div>
        <Link to="/signup">Signup</Link>
        <Link to="/login">Login</Link>
      </div>
    </header>
  );
};

export default Navbar;
