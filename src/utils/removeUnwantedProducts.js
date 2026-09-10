function removeUnwantedProducts(products) {
  // const unnwantedProductsIDs = [18, 22, 28, 34, 36, 39, 41];
  const unnwantedProductsIDs = [39];
  return products.filter(
    (product) => !unnwantedProductsIDs.includes(product.id),
  );
}

export default removeUnwantedProducts;
