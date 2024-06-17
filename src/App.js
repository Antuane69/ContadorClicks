import './App.css';
import './stylesheet/boton.css';
import './stylesheet/contador.css';
import Boton from './components/Boton';
import Contador from './components/contador.jsx';
import logo from './img/PixelPerfectWeb.png';
import { useState } from 'react';

function App() {

  const [numero, setNumClicks] = useState(0);

  const manejarClick = () => {
    setNumClicks(numero + 1);
  };

  const reiniciarContador = () =>{
    setNumClicks(0);
  };

  return (
    <div className="App">
      <div className='fcc-logo-contenedor'>
        <img
          className='fcc-logo'
          src={logo}
          alt='Logo de FreeCodeCamp'/>
      </div>
      <div className='contenedor-principal'>
        <Contador numero={numero}/>
        <Boton 
          texto='Click'
          esBotonDeClick={true}
          manejarClick={manejarClick}/>
        <Boton 
          texto='Reiniciar'
          esBotonDeClick={false}
          manejarClick={reiniciarContador}/>
      </div>
    </div>
  );
}

export default App;
