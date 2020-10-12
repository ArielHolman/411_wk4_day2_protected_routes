import { createStore } from "redux";
import reducers from "./redux/reducers";
import state from "./redux/state";

export default createStore(reducers, state);
