import { Products } from "../../Components/FeaturedProduct/type"

export const GET_PRODUCT = "GET_PRODUCT"

export enum ActionTypes {
    FETCH_REQUEST = "FETCH_REQUEST",
    FETCH_SUCCESS = "FETCH_SUCCESS",
    FETCH_ERROR = "FETCH_ERROR",
    GET_SELECTED = "GET_SELECTED"
}

export interface ProductsState {
    loading: boolean;
    product: Products[],
    selected :Products,
    error: string
}



export type ProductState = {
    product: Products[],
    selected : Products
}

export type ProductAction = {
    type: string,
    payload: Products
}

export type DispatchType = (args: ProductAction) => ProductAction