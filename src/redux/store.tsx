import { createStore, applyMiddleware, compose } from "redux";
import reducers from "./reducer/index";
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension';

export const composeEnhancers =
  (window && (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;
export const store = createStore(
  reducers,
  applyMiddleware(thunk) 
)
