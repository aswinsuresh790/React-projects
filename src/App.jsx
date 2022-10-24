import React from 'react'
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import './App.css';
import Navbar from './Components/Navbar';
import Cartitem from './Components/Cartitem';
function App() {
  return (
    <div className="App">
      <Navbar/>
      <Cartitem     image="https://i.gadgets360cdn.com/products/large/moto-g52-db-709x800-1649827920.jpg"
      itemName="Mobile"
      price="10000"
      Quantity=""
    
      />
      <Cartitem     image="https://static-ecapac.acer.com/media/catalog/product/cache/a2e755bb2f5b00fa33d64eface9107e3/a/c/acer-extensa-15-ex215-21-21g-31-wp-win10-01_1_1_1_1_1.jpg"
      itemName="Acer Laptop"
      price="70000"
      Quantity=""
    
      />
      <Cartitem     image="https://www.paklap.pk/pub/media/catalog/product/cache/7e76858baa02afd4bb6d466a87d0383e/a/p/apple-macbook-pro-13-inch-mnej3-m2-chip-price-in-pakistan.jpg"
      itemName=" Apple Mac Laptop"
      price="100000"
      Quantity=""
    
      />
    </div>
  );
}

export default App;
