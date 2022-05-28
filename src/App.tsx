import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import './App.css';

import Navbar from './components/Navbar/Navbar';

import about from "./pages/about";
import index from "./pages";
import spinningMiku from "./pages/spinningmiku";
import contact from "./pages/contact";

function App() {
  return (
    <Router>
      <div className="App">
        <div className="App-header">
          <Navbar />
        </div>
        <Routes>
          <Route path='/' element={index()} />
          <Route path='*' element={<div>404</div>} />
          <Route path='/about' element={about()} />
          <Route path='/contact' element={contact()} />
          <Route path='/spinningmiku' element={spinningMiku()} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
