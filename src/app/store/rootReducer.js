import { combineReducers } from "redux";
import userData from "../components/ContactForm/reducer";
//import Indicators from '../app/layouts/status/reducer'

export default combineReducers({
  userData: userData,
  //indicators: Indicators
});
