import CarroShop from "../Carrito/CartWidget.js";
import "./NavBar.css";
import {Link} from "react-router-dom";

const NavBar = () => {
    return(
        <nav className="navegacion">
            <li>
                <Link to= {"/"}>Home</Link>
            </li>       
            <li>
            <Link to= {"/Catalogo"}>Catálogo  <CarroShop /></Link>
            </li>
        </nav>
    )
};

export default NavBar;