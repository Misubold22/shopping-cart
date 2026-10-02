function calculateOrderSummary(boughtProducts) {
  const subTotal = boughtProducts.reduce(
    (partialSum, item) => partialSum + item.quantity * item.price,
    0,
  );

  const discountAmount = (subTotal * 5) / 100;
  const discountedPrice = subTotal - discountAmount;
  const taxAmount = (discountedPrice * 3) / 100;
  const shipping = 5;
  const finalPrice = discountedPrice + taxAmount + shipping;

  return {
    subTotal,
    discountAmount,
    taxAmount,
    shipping,
    finalPrice,
  };
}

export default calculateOrderSummary;
