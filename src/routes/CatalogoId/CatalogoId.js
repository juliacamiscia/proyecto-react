import { useEffect , useState } from "react";
import { useParams , Link } from 'react-router-dom';
import "./bootstrap.min.css";

const CatalogoId = () => {

    const { id } = useParams();

    const [detail, setDetail] = useState([]);

    useEffect(() => {
        fetch(`https://www.mockachino.com/a61cd27f-3a65-40/productos/${id}/`)
        .then((res) => res.json())
        .then((detailInfo) => setDetail(detailInfo));
    }, [id]);

    return (
        <div>
            {detail.length === 0 ? (
            <div>Cargando...</div>
            ) : (
            <div key={detail.id}>
            <div id="carouselExampleIndicators" className="carousel slide carrusel" data-bs-ride="carousel">
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>
                <div className="carousel-inner">
                    <div className="carousel-item active">
                    <img src={detail.imagen} className="d-block w-100 img-fluid" alt="hola"/>
                    </div>
                    <div className="carousel-item">
                    <img src={detail.imagen2} className="d-block w-100 img-fluid" alt="chu"/>
                    </div>
                    <div className="carousel-item">
                    <img src={detail.imagen3} className="d-block w-100 img-fluid" alt="si"/>
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
                <p>{detail.nombre}</p>
                <p>Precio: {detail.precio}</p>
                <p>Descripción: {detail.descripcion}</p>
                <Link to={'/Catalogo'}><button className="botonDetalle">Volver</button></Link>
            </div>
            )}
        </div>
        );
    };

export default CatalogoId;