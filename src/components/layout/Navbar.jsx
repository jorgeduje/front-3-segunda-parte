
import { Link } from "react-router-dom"

export const Navbar = () => {
  return (
    <div>
      <ul>
        <Link to="/">Home</Link>
        <Link to="/favorites">Favorites</Link>
        <Link to="/carrito">Carrito</Link>
      </ul>
    </div>
  );
};
