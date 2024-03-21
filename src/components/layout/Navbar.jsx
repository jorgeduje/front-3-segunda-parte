
import { Link } from "react-router-dom"
import { useProductStates } from "../../Context/ProductContext";
import "./Navbar.css"
export const Navbar = () => {

   const { state, dispatch } = useProductStates()
   console.log(state.darkMode)
  
  return (
    <div className={state.darkMode ? "containerNavbar-dark" : "containerNavbar-light"}>
      <ul>
        <Link to="/">Home</Link>
        <Link to="/favorites">Favorites</Link>
        <Link to="/carrito">Carrito</Link>
      </ul>
      <button onClick={()=> dispatch( {type: "CHANGE_MODE"} ) }>Cambiar modo</button>
      <h3>El modo esta en { state.darkMode ? "dark" : "light" }</h3>
    </div>
  );
};
