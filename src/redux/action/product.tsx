import axios from "axios";
import { DispatchType, GET_PRODUCT, ProductAction } from "./type";

export const getProduct = () => {

    return async (dispatch: any) => {
        axios.get("http://localhost:3001/products")
            .then((res) => {
                const action: ProductAction = {
                    type: GET_PRODUCT,
                    payload: res.data
                }

                return setProduct(action)

            })
            .catch((e) => console.log(e))
    }
}

export const setProduct = (res: ProductAction) => {
    console.log(res)
    return (dispatch: DispatchType) => {
        setTimeout(() => {
            dispatch(res);
          }, 500);
    }
}