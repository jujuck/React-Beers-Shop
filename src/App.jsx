import { BrowserRouter, Routes, Route } from "react-router-dom";

/** Import du CSS */
import './App.css'

/** Import des pages */
import Home from './pages/Home';
import Beers from './pages/Beers';
import Nav from './components/Nav';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/beers" element={<Beers />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  )
}

export default App
