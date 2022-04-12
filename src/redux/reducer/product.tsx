import { Reducer } from "redux"
import { ActionTypes, ProductsState } from "../action/type"



const initialState: ProductsState = {
    product: [],
    error: "",
    loading: false,
    selected: {}
}


export const newReducer: Reducer<ProductsState> = (state = initialState, action) => {
    switch (action.type) {
        case ActionTypes.FETCH_REQUEST: {
            return {
                ...state,
                loading: true
            }
        }
        case ActionTypes.GET_SELECTED : {
            return {
                ...state,
                loading : false,
                selected : action.payload
            }
        }
        case ActionTypes.FETCH_SUCCESS: {
            return {
                ...state,
                loading: false,
                product: action.payload
            }
        }

        default:
            return state
    }
}
