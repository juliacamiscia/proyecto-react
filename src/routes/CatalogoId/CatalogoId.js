import { useEffect , useState } from "react";
import { useParams , Link } from 'react-router-dom';

const CatalogoId = () => {

    const { id } = useParams();

    const [detail, setDetail] = useState({});

    useEffect(() => {
        fetch(`data.json{producto.id}/`)
        .then((res) => res.json())
        .then((detailInfo) => setDetail(detailInfo));
    }, [id]);

    return (
        <div>
            {Object.keys(detail).length === 0 ? (
            <div>Cargando...</div>
            ) : (
            <div>
                <p>name: {detail.nombre}</p>
                <p>height: {detail.precio}</p>
                <Link to={'/Catalogo'}>Back</Link>
            </div>
            )}
        </div>
        );
    };

export default CatalogoId;