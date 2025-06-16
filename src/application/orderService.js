export const submitOrder = async (orderData, cartData) => {
  console.log("Order submitted", {
    address: orderData,
    items: cartData,
  });
};
