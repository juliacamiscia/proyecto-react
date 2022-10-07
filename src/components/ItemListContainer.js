import "./ItemListContainer.css";
import Catalogo from "../routes/Catalogo/Catalogo";

const ItemListContainer = ({greeting}) =>{
    return(
        <div className="contenedor">
            <p>¡ ¡ Bienvenido/a a Visita la Magia {greeting} ! !</p>
        </div>
    )
}

<Catalogo />;

export default ItemListContainer;