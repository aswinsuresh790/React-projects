import React from "react";
import CartItem from "./Cartitem";
const Carts=(props)=>{   
        
  const {products} = props;
        return (
          <div className="cart">
            {products.map((product) => {
              return (<CartItem
                  product={product}
                  key={product.id}
                  onIncreaseQuantity={
                    props.onIncreaseQuantity}
                    onDecreaseQuantity={
                      props.onDecreaseQuantity
                    }
                    onDeleteProduct={ props.onDeleteProduct}
                    count={props.AddcartCount}
                  
                  
                />
              )
            })}
          </div>
        );
          }
      
          export default Carts;