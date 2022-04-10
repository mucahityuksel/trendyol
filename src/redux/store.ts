import { createStore, applyMiddleware,  Store } from "redux";
import reducers from "./reducer/index";
import thunk from 'redux-thunk'

import { DispatchType, ProductAction, ProductState } from "./action/type";

export const store = createStore(reducers, applyMiddleware(thunk))
