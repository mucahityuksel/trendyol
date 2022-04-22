import { Products } from "../../Components/FeaturedProduct/type"
import { User } from "../../Pages/Login/type";

export const GET_PRODUCT = "GET_PRODUCT"

export enum ActionTypes {
    FETCH_REQUEST = "FETCH_REQUEST",
    FETCH_SUCCESS = "FETCH_SUCCESS",
    FETCH_ERROR = "FETCH_ERROR",
    GET_SELECTED = "GET_SELECTED",
    LOGIN = "LOGIN",
    ADD_FAVORITE = "ADD_FAVORITE"
}


export interface ProductsState {
    loading: boolean;
    product: Products[],
    selected :Products,
    favorites : Products[]
    user : User
    error: string
}

export type ProductAction = {
    type: string,
    payload: Products 
}



export type DispatchType = (args: ProductAction) => ProductAction
