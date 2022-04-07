import { BrowserRouter, Routes, Route } from "react-router-dom";

/** Import du CSS */
import './App.css'

/** Import des pages */
import Home from './pages/Home';
import Beers from './pages/Beers';

function App() {
  return (
    <div className="App">
      <h1>Beers Shop and so more</h1>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/beers" element={<Beers />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
