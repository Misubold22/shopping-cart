function findProductById(products, itemId) {
  if (!Array.isArray(products)) {
    return null;
  }

  if (itemId === undefined || itemId === null) {
    return null;
  }

  const foundProduct = products.find((product) => product?.id === itemId);

  return foundProduct ?? null;
}

export default findProductById;
