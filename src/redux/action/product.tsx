import axios from "axios";
import { Action, ActionCreator, Dispatch } from "redux";
import { ThunkAction } from "redux-thunk";
import { Products } from "../../Components/FeaturedProduct/type";
import { User } from "../../Pages/Login/type";
import { ActionTypes, ProductsState } from "./type";


export type AppThunk = ActionCreator<ThunkAction<void, ProductsState, null, Action<string>>>;

export const fetchRequest: AppThunk = () => {
    return (dispatch: Dispatch) => {
        try {
            axios.get("http://localhost:3001/products")
                .then((res) => {
                    return dispatch({
                        type: ActionTypes.FETCH_SUCCESS,
                        payload: res.data
                    })

                })
                .catch((e) => console.log(e))

        } catch (error) {
            return dispatch({
                type: ActionTypes.FETCH_ERROR
            })
        }
    }
}

export const getSelected: AppThunk = (id: any) => {
    return (dispatch: Dispatch) => {
        try {
            axios.get("http://localhost:3001/products/" + id)
                .then((res) => {
                    return dispatch({
                        type: ActionTypes.GET_SELECTED,
                        payload: res.data
                    })
                })
                .catch((e) => console.log(e))
        } catch (error) {
            return dispatch({
                type: ActionTypes.FETCH_ERROR
            })
        }
    }
}

export const addFavorite: AppThunk = (data: Products,user:User) => {
    return (dispatch: Dispatch) => {
        try {
            axios.post("http://localhost:3001/favorites", {data,user})
                .then((res) => {
                    return dispatch({
                        type: ActionTypes.ADD_FAVORITE,
                        payload: res.data
                    })
                })
                .catch((err) => console.log(err))
        } catch (error) {
            return dispatch({
                type: ActionTypes.FETCH_ERROR
            })
        }
    }
}

export const saveUser: AppThunk = (user: User) => {
    return (dispatch: Dispatch) => {
        try {
            axios.post("http://localhost:3001/user", user)
                .then((res) => {
                    return dispatch({
                        type: ActionTypes.LOGIN,
                        payload: user.email
                    })
                }).catch((e) => console.log(e))
        } catch (error) {
            return dispatch({
                type: ActionTypes.FETCH_ERROR
            })
        }
    }
}