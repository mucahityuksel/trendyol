import axios from "axios";
import { GET_PRODUCT } from "./type";

export const getProduct = () => {
    console.log("hi")
    return async (dispatch: any) => {
        axios.get("http://localhost:3001/products")
            .then((res) => {
                console.log(res.data)
                dispatch(setProduct(res.data))

            })
            .catch((e) => console.log(e))
    }
}

export const setProduct = (res: any) => {
    console.log(res)
    return {
        type: GET_PRODUCT,
        payload: res
    }
}