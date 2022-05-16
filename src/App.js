import logo from './logo.svg';
import './App.css';

function App() {
  const handleOpenAlert = () => {
    alert('Hello react')
  }
  return (
    <div className="App">
      <header className="App-header">
        <img src="miku.png" className="App-logo" alt="logo"/>
        <p>
          Witaj użytkowniku!
        </p>
        <button className='alert-button' onClick={handleOpenAlert}>
          Open alert
        </button>
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
