import React from 'react'
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import './App.css';
import Navbar from './Components/Navbar';
import Carts  from './Components/Carts'
function App() {
  return (
    <div className="App">
      <Navbar/>
    <Carts/>
    </div>
  );
}

export default App;
