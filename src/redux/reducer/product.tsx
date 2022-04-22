import { Reducer } from "redux"
import { ActionTypes, ProductsState } from "../action/type"



const initialState: ProductsState = {
    product: [],
    favorites : [],
    user : {
        email : "",
        id : "",
        isLogin : false,
        basket : [],
        favorites : [],
        order : []

    },
    error: "",
    loading: false,
    selected: {
        id: 0,
    name: "",
    price: 0,
    brand: "",
    basketDiscount: false,
    image: [],
    star: 0,
    smallImages: [],
    cargo: false,
    productInformation: [],
    mostSales: false,
    category: 0,
    Seller: {
        score: 0,
        followers: 0
    },
    rating: 0,
    comment: 0,
    question: 0,
    like: 0,
    productQuestion: 0
    }
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
        case ActionTypes.LOGIN : {
            console.log(action.payload)
            return {
                ...state,
                user : action.payload
            }
        }

        case ActionTypes.ADD_FAVORITE : {
            return {
                ...state,
                loading : false,
                favorites : action.payload
            }
        }

        default:
            return state
    }
}
