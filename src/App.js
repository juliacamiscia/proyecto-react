import './App.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer';
import {BrowserRouter , Routes , Route, Link} from "react-router-dom";
import Home from "./routes/Home/Home";
import Catalogo from "./routes/Catalogo/Catalogo";
import CatalogoId from "./routes/CatalogoId/CatalogoId";
import logo from './logo.jpg';



function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <header>
          <Link to="/"><img src={logo} alt="Visitalamagia" className="encabezado__logo"/></Link>
          <h1 className="encabezado__titulo">Visita la Magia</h1>
        </header>
        <NavBar />
        <Routes>
          <Route exact path= "/" element={<Home />} />
          <Route exact path= "/Catalogo" element={<Catalogo />} />
          <Route exact path= "/CatalogoId/:id" element={<CatalogoId />} />
        </Routes>
        <ItemListContainer greeting='Julia'/>
        <ItemListContainer greeting='Martín'/>
        <ItemListContainer greeting='Victoria'/>
        <ItemListContainer greeting='Mariana'/>
      </div>
    </BrowserRouter>
    
    
  );
}

export default App;
