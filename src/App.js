import './App.css';
import { Routes, Route } from 'react-router-dom';

import Navbar from './components/Navbar';
import Home from './pages/Home';
import Customers from './pages/Customers';


function App() {
  return (
    <div className='App'>

      <Navbar/>

      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/customers" element={<Customers />} />

      </Routes>
    
    </div>
  );
}

export default App;
