import CarroShop from "../Carrito/CartWidget.js";
import "./NavBar.css";

const NavBar = () => {
    return(
        <nav className="navegacion">
            <li><a href="index.html">Home</a></li>       
            <li><a href="">Walt Disney World</a></li>
            <CarroShop />
            <li><a href="">Contacto</a></li>
        </nav>
    )
};

export default NavBar;