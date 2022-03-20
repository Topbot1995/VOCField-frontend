import './App.css';
import { Navbar, Footer } from './components';
import { Home, VOCDApp, GenesisDApp } from './pages';
// import {Home, VOCDApp, GenesisDApp, Info} from './pages';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <div className='w-full'>
      <Navbar />      
      <Router>
        <div className="App w-full">
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/voc-dapp" element={<VOCDApp />} />
            <Route path="/genesis-dapp" element={<GenesisDApp />} />
          </Routes>
        </div>
      </Router>
      <Footer/>
    </div>
  );
}

export default App;
