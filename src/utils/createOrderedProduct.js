function createOrderedProduct(product, quantity) {
  const orderedProduct = {
    title: product.title,
    price: product.price,
    id: product.id,
    quantity,
    image: product.images[0],
  };
  return orderedProduct;
}

export default createOrderedProduct;
