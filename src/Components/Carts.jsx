import React from "react";
import CartItem from "./Cartitem";
class Carts extends React.Component {
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


      render () {
        const { products } = this.state;
        return (
          <div className="cart">
            {products.map((product) => {
              return (
                <CartItem
                  product={product}
                  key={product.id}
                  onIncreaseQuantity={
                    this.handleQuantityIncrease}
                    onDecreaseQuantity={
                      this.handleQuantityDecrease
                    }
                  
                  
                />
              )
            })}
          </div>
        );
      }
    }
    export default Carts