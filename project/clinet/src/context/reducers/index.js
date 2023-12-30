import { combineReducers } from "redux";
import userReducer from "./userReducer";
import productReducer from "./productReducer";
import allUserReducer from "./allUserReducer";
import cartReducer from "./cartReducer";
import displayCartReducer from "./displayCartReducer";
import ordersReducer from "./ordersRedcuer";

const myReducers = combineReducers({
  user: userReducer,
  products: productReducer,
  allUsers: allUserReducer,
  cart: cartReducer,
  isCart: displayCartReducer,
  orders: ordersReducer,
});

export default myReducers;
