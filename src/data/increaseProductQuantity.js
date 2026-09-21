function increaseProductQuantity(boughtProducts, product, quantity) {
  const newList = boughtProducts.map((item) => {
    if (item.id === product.id) {
      const updatedItem = {
        ...item,
        quantity: item.quantity + quantity,
      };
      return updatedItem;
    }
    return item;
  });
  return newList;
}

export default increaseProductQuantity;
