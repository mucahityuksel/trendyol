import { Reducer } from "redux"
import { ActionTypes, ProductsState} from "../action/type"



const initialState : ProductsState = {
    product : [],
    error : "",
    loading : false
}


export const newReducer : Reducer<ProductsState> = (state = initialState, action) => {
    switch (action.type) {
        case ActionTypes.FETCH_REQUEST:{    
            return {
                ...state,
                loading: true
            }
        }
            
         case ActionTypes.FETCH_SUCCESS : {
             return {
                 ...state,
                 loading : false,
                 product : action.payload
             }
         }
    
        default:
            return state
    }
}
