import { useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import imagenes from './assets/imagenes';
import './App.css';

function App() {
  const [number, setNumber] = useState(0);

  return (
    <div className="App">
      <div className='Header'> <Header /> </div>
      
      <div className='Content'> 
        <img className='perfil' src={imagenes.photo} />
        <h2> El valor de number es: {number} </h2>
        <button className='btn-increment' onClick={ () => setNumber(number + 1)} > Incrementar </button>
        <button className='btn-decrement' onClick={() => setNumber(number - 1)}>Decrementar</button>
      </div>
      
      <div className='Footer'> <Footer /> </div>
      
    </div>
  );
}

export default App;
