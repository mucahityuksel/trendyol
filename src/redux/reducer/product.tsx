import { Products } from "../../Components/FeaturedProduct/type"
import { GET_PRODUCT, ProductAction, ProductState } from "../action/type"


const initialState: ProductState = {
    product: []
}

export const productReducer = (state: ProductState = initialState, action: ProductAction) => {
    switch (action.type) {

        case GET_PRODUCT:
            const newP: Products | any = [];
            console.log(newP)
            return {
                ...state,
                product: state.product.concat(newP)
            }

        default:
            return state;
    }
}