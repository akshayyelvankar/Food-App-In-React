// Create Store

import rootReducer from "./redux/reducers";
import {createStore} from "redux";

const store=createStore(rootReducer)

export default store;