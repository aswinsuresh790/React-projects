const cartItem = {
    itemName: 'Apples',
    qty: 6,
    price: 10
  };
  const { qty=1, price } = cartItem;
  console.log("Total price of", cartItem.itemName , 'is', qty*price);