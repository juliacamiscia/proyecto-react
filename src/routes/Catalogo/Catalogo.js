import { useEffect , useState } from "react";
import {Link} from "react-router-dom";
import "./Catalogo.css";

const Catalogo = () => {
    
    const [productos, setProductos] = useState ([]);

    useEffect(() =>{
        fetch("https://www.mockachino.com/a61cd27f-3a65-40/productos")
            .then((response) => response.json())
            .then((data) => setProductos(data.productos))
            .catch((error) => console.log(error))

        }, []);
    
        return (
            <div>
                {productos.length === 0 ? (
                    <div>Cargando...</div>
            ) : (     
            <div>
                {productos.map((producto) => {
                    return (
                        <div key={producto.id} className="cardDisney">
                            <div className="nombreProducto"> {producto.nombre} </div>
                            <img src={producto.imagen} />
                            <div className="precio"> $ {producto.precio} </div>
                            <Link to={`/CatalogoId/${producto.id}`}><button className="botonDetalle"> Más detalles del producto </button></Link>
                        </div>
                    );
                })}
            </div>
        )}
    </div>
);
};

export default Catalogo;