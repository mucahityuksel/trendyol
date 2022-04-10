import { Products } from "../../Components/FeaturedProduct/type"

export const GET_PRODUCT = "GET_PRODUCT"

export type ProductState = {
    product: Products[]
}

export type ProductAction = {
    type: string,
    payload: Products
}

export type DispatchType = (args: ProductAction) => ProductAction