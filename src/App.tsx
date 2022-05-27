import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import './App.css';

import { InputForm } from './components/InputForm'
import Navbar from './components/Navbar/Navbar';

function App() {
  return (
    <Router>
      <div className="App">
        <div className="App-header">
          <Navbar />
        </div>
        <Routes>
          <Route path='/' element={<div>Main</div>} />
          <Route path='*' element={<div>404</div>} />
          <Route path='/about' element={<div>About</div>} />
          <Route path='/form' element={<InputForm />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
