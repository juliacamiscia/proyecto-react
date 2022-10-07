import { useEffect , useState } from "react";
import {Link} from "react-router-dom";
// import productos from "./data.json";

const Catalogo = () => {
    
    const [productos, setProductos] = useState ([]);

    useEffect(() =>{
        fetch("./data.json")
            .then((response) => response.json())
            .then( data => setProductos = data)
            .catch((error) => console.log(error))

        }, []);
    
        return (
            <div>
                {Object.keys(productos).length === 0 ? (
                <div>Cargando...</div>
            ) : (     
            <div>
                {productos.results.map((producto) => {
                    
                    const id = producto.id; 
                    
        return (
            <div key={id}>
                <Link to={`/CatalogoId/${id}`}>{producto.id}</Link>
                <div> {producto.nombre} </div>;
                    <div> {producto.imagen} </div>;
                    <div> $ {producto.precio} </div>;
                    <button>Más detalles del producto <Link to= {"/CatalogoId"} /></button>;
            </div>
        );
            })}
        </div>
        )}
            </div>
        );
};

export default Catalogo;