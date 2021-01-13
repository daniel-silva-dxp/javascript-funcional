const shoppingCart = {
  user: {
    id: 1,
    firtName: "Daniel",
    lastName: "Silva",
  },
  item: [
    {
      product: { id: 1, name: "Banana" },
      quantity: 10,
    },
    {
      product: { id: 2, name: "Laranja" },
      quantity: 1,
    },
  ],
};

const formatShoppingCart = (shoppingCart) => {
  return {
    user: {
      id: shoppingCart.user.id,
      name: `${shoppingCart.user.firtName} ${shoppingCart.user.lastName}`,
    },
    item: shoppingCart.item.map((item) => {
      return {
        ...item,
        product: item.product.id,
      };
    }),
  };
};

console.log(shoppingCart);
console.log(formatShoppingCart(shoppingCart));
