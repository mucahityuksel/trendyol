


import {combineReducers} from "redux"
import { newReducer} from "./product";



const reducers = combineReducers({
    product : newReducer,
 
});

export default reducers;