import { Products } from "../../Components/FeaturedProduct/type"
import { GET_PRODUCT } from "../action/type"


const initialState: Products = {
    id: 0,
    name: "",
    price: 0,
    brand: "",
    basketDiscount: true,
    image: [],
    star: 0,
    smallImages: [],
    cargo: true,
    productInformation: [],
    mostSales: true,
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

export const productReducer = (state = initialState, action: any) => {
    switch (action.type) {
        case GET_PRODUCT:
            return {
               
                state: action.payload
            }

        default:
            return state;
    }
}