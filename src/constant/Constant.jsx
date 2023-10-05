import { carData } from "../data/Data";

export const initialState = {
  data: carData,
  search: "",
};

export const ACTION = {
  INITIALIZE_PRODUCTS: "initialize_products",
  INITIALIZE_CATEGORIES: "initialize_categories",
  SEARCH: "search",
  CLEAR_ALL_FILTERS: "clear_all_filters",
  SET_CATEGORY_FILTER: "set_category_filter",
  SET_COLOR_FILTER: "set_color_filter",
  SET_RATNG_FILTER: "set_rating_filter",
  SET_SORT_BY_PRICE_FILTER: "set_sort_by_price_filter",
  SEARCH_PRODUCT: "search_product",
  SET_LOGGEDIN: "set_logged_in",
  SET_USER: "set_user",
  SET_TOKEN: "set_token",
  SET_CART: "set_cart",
  SET_WISHLIST: "set_wishlist",
};

// export default initialState;
