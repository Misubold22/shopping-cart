function createOrderedProduct(product, quantity) {
  const orderedProduct = {
    title: product.title,
    price: product.price,
    id: product.id,
    quantity,
  };
  return orderedProduct;
}

export default createOrderedProduct;
