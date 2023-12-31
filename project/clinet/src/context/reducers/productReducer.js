const productReducer = (state = [], action) => {
  switch (action.type) {
    case "GET_ALL_PRODUCTS":
      return state;

    case "SET_ALL_PRODUCTS":
      return action.products || state;

    default:
      return state;
  }
};

export default productReducer;
