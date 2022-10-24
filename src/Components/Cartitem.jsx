import React from 'react';

class CartItem extends React.Component {
  render () {
    console.log('this.props', this.props);
    const { price, title, qty } = this.props.product;
    const {
      product,
      onIncreaseQuantity,
      onDecreaseQuantity,
      onDeleteProduct
    } = this.props;
    return (
      <div className="cart-item">
        {this.props.jsx}
        <div className="left-block">
          <img style={styles.image} />
        </div>
        <div className="right-block">
          <div style={ { fontSize: 25 } }>{title}</div>
          <div style={ { color: '#777' } }>Rs {price} </div>
          <div style={ { color: '#777' } }>Qty: {qty} </div>
          <div className="cart-item-actions">
            {/* Buttons */}
            <img
              alt="increase"
              className="action-icons"
              src="data:image/png;base64,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"
              onClick={() => onIncreaseQuantity(product)}
            />
            <img
              alt="decrease"
              className="action-icons"
              src="https://static.thenounproject.com/png/261368-200.png"
              onClick={() => onDecreaseQuantity(product)}
            />
            <img
              alt="delete"
              className="action-icons"
              src="https://cdn-icons-png.flaticon.com/512/860/860829.png"
              onClick={() => onDeleteProduct(product.id)}
            />
          </div>
         
                
        </div>
      </div>
    );
  }
}

const styles = {
  image: {
    height: 110,
    width: 110,
    borderRadius: 4,
    background: '#ccc'
  }
}

export default CartItem;