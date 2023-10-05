import { ACTION } from "../constant/Constant";

export const Reducer = (state, action) => {
  switch (action.type) {
    case ACTION.SEARCH:
      return { ...state, search: action.payload };

    case ACTION.INITIALIZE_CATEGORIES:
      return { ...state, categories: action.payload };

    case ACTION.SET_CART:
      return { ...state, cart: action.payload };

    case ACTION.SET_WISHLIST:
      return { ...state, wishList: action.payload };
    default:
      return state;
  }
};

// export default Reducer;
