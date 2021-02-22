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
        <p2>What does this look like?</p2>
        <ul>And what if i add a list:
          <li>What</li>
          <li>an</li>
          <li>awesome</li>
          <li>test.</li>
        </ul>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Welcome to codaisseur!
        </a>
      </header>
    </div>
  );
}

export default App;
