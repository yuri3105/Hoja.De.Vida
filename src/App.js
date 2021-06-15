// import logo from './logo.svg';
import './App.css';
import Principal from './Components/Principal.jsx';
import Informacion from './Components/Informacion.jsx';
import Estudios from './Components/Estudios.jsx';
import Experiencia from './Components/Experiencia.jsx';
import Habilidades from './Components/Habilidades.jsx';

function App() {
  return (
    <div className="App">
    <Principal/>
    <Informacion/>
    <Estudios/>
    <Experiencia/>
    <Habilidades/>
    </div>
  );
}

export default App;
