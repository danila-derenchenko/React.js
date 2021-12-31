import { createStore } from "redux";
import { rootReduser } from "./reduser";

export const store = createStore(rootReduser, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());