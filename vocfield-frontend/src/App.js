import './App.css';
import { Navbar, Footer } from './components';
import { Home, VOCDApp, GenesisDApp, Info } from './pages';
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
            <Route path="/information" element={<Info/>} />
          </Routes>
        </div>
      </Router>
      <Footer/>
    </div>
  );
}

export default App;
