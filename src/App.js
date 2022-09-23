import './App.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer';

function App() {
  return (
    <div className="App">
      <header>
        <img src="./images/logo2.png/50x50" alt="Visitalamagia" class="encabezado__logo"/>
        <h1 class="encabezado__titulo">Visita la Magia</h1>
      </header>
      <NavBar></NavBar>
      <ItemListContainer greeting='Julia'/>
      <ItemListContainer greeting='Martín'/>
      <ItemListContainer greeting='Victoria'/>
      <ItemListContainer greeting='Mariana'/>
    </div>
  );
}

export default App;
