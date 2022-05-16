import logo from './logo.svg';
import './App.css';

function App() {
  const handleOpenAlert = () => {
    alert('Hello react')
  }
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <button onClick={handleOpenAlert}>Open alert</button>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <a
          className="github-link"
          href="https://github.com/g0sie/react-test"
          target="_blank"
          rel="noopener noreferrer"
        >
          repo
        </a>
      </header>
    </div>
  );
}

export default App;
