import './App.css';
import { Navbar, Footer } from './components';
import { Home } from './pages';
// import {Home, VOCDApp, GenesisDApp, Info} from './pages';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <div>
      <Navbar />      
      <Router>
        <div className="App">
          <Routes>
            <Route exact path="/" element={<Home />} />
          </Routes>
        </div>
      </Router>
      <Footer/>
    </div>
  );
}

export default App;
