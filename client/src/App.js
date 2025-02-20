import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Mi pagina de prueba
        </a>
      </header>
      <div className="App-header">
      <label>Nombre: <input type="text"/></label><br/>
        <label>Edad: <input type="text"/></label><br/>
        <label>Pais: <input type="text"/></label><br/>
        <label>Cargo: <input type="text"/></label><br/>
        <label>Años: <input type="text"/></label><br/>
      </div>
    </div>
  );
}

export default App;
