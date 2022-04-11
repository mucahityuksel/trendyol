import axios from "axios";
import { Action,ActionCreator, Dispatch } from "redux";
import { ThunkAction } from "redux-thunk";
import { ActionTypes, ProductsState } from "./type";


export type AppThunk = ActionCreator<ThunkAction<void, ProductsState, null, Action<string>>>;

export const fetchRequest: AppThunk = () => {
    return (dispatch : Dispatch)  => {
        try {
            axios.get("http://localhost:3001/products")
            .then((res) => {
                return dispatch({
                    type : ActionTypes.FETCH_SUCCESS,
                    payload: res.data
                })

            })
            .catch((e) => console.log(e))
           
        } catch (error) {
            return dispatch({
                type : ActionTypes.FETCH_ERROR
            })
        }
    }
}

