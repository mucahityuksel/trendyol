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
            axios.get("https://trendyol-backend1.herokuapp.com/products")
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
            axios.get("https://trendyol-backend1.herokuapp.com/products/" + id)
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

export const addFavorite: AppThunk = (data: Products, user: User) => {
    return (dispatch: Dispatch) => {
        try {
            axios.put("https://trendyol-backend1.herokuapp.com/favorites", { data, user })
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

export const deleteFavorite: AppThunk = (data: Products, user: any) => {
    return (dispatch: Dispatch) => {
        try {
            axios.put("https://trendyol-backend1.herokuapp.com/data/update/"+user,{data})
                .then((res) => {
                    return dispatch({
                        type: ActionTypes.DELETE_FAVORITE,
                        payload: res.data
                    })
                })
                .catch((err) => console.log(err))
        } catch (e) {
            return dispatch({
                type: ActionTypes.FETCH_ERROR
            })
        }

    }
}

export const saveUser: AppThunk = (user: User) => {
    return (dispatch: Dispatch) => {
        try {
            axios.post("https://trendyol-backend1.herokuapp.com/user", user)
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

