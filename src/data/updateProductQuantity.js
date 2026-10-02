const updateProductQuantity = (
  id,
  setBoughtProducts,
  value,
  isDelta = false,
) => {
  setBoughtProducts((prevProducts) =>
    prevProducts.map((product) => {
      if (product.id !== id) return product;

      const newQuantity = isDelta ? product.quantity + value : value;

      if (newQuantity < 1) return product;

      return { ...product, quantity: newQuantity };
    }),
  );
};

export default updateProductQuantity;
