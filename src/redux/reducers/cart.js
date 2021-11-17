const initialState = {
  items: {},
  totalItems: 0,
  totalPrice: 0,
};

const getTotalPrice = (arr) => arr.reduce((acc, item) => acc + item, 0);

const cart = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_PIZZA_CART":
      const currentPizzaItems = !state.items[action.payload.id]
        ? [action.payload]
        : [...state.items[action.payload.id], action.payload];

      const itemsCount = currentPizzaItems.length;
    default:
      console.log();
  }
};
