import { useState } from 'react';
import './App.css'; // Importa los estilos

function App() {
  const [contador, setContador] = useState(0);

  const incrementar = () => setContador(contador + 1);
  const decrementar = () => setContador(contador - 1);
  const reiniciar = () => setContador(0);

  return (
    <div className="counter-container">
      <h1>Contador: {contador}</h1>
      <button onClick={incrementar} className="counter-button">
        +1
      </button>
      <button onClick={decrementar} className="counter-button">
        -1
      </button>
      <button onClick={reiniciar} className="counter-button">
        Reiniciar
      </button>
    </div>
  );
}

export default App;
