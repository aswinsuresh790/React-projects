import React from 'react'
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import './App.css';
import Navbar from './Components/Navbar';
import Carts  from './Components/Carts'
import TotalPrice from './Components/Totalprice';
class App extends React.Component {

  constructor () {
    super();
    this.state = {
      
      products: [
        {
          price: 99,
          title: 'Watch',
          qty: 1,
          img: '',
          id: 1
        },
        {
          price: 999,
          title: 'Mobile Phone',
          qty: 10,
          img: '',
          id: 2
        },
        {
          price: 999,
          title: 'Laptop',
          qty: 4,
          img: '',
          id: 3
        }
      ]
    }}
    handleQuantityIncrease=(product)=>{
      const {products}=this.state;
      const index=products.indexOf(product)
      products[index].qty +=1
      this.setState(
        {products}
        )
    }
    handleQuantityDecrease=(product)=>{
      const {products}=this.state;
      const index=products.indexOf(product);
    
      if (products[index].qty===0){
        return
      }
      products[index].qty-=1
      this.setState({products})
    }
    onDeleteProduct=(id)=>{
      const{products}=this.state;
      const items= (products.filter((item)=>
        item.id!==id
    ))
    this.setState({products:items})
    }

    addcartCount=()=>{
      const{products}=this.state;
      let count=0;
      products.forEach((product)=>{
count+=product.qty
      })
      return count

    }

getPrice=()=>{
  const{products}=this.state;
  let priceTotal=0;
  products.map((product)=>{
    priceTotal=priceTotal  +  product.qty  * product.price
  })
  return priceTotal
}
   
   
  



  
  
  
    
  
  
  render(){
    const {products}=this.state ;
  return (
    <div className="App">
      <Navbar count={this.addcartCount()} />
    <Carts
    products={products}
    onIncreaseQuantity={this.handleQuantityIncrease}
    onDecreaseQuantity={this.handleQuantityDecrease}
    onDeleteProduct={this.onDeleteProduct}/>
      <TotalPrice totalcost={this.getPrice()} />

    </div>
  );
}}

export default App;
