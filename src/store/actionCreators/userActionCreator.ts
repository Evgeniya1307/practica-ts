import axios from "axios"
import { Dispatch } from "redux"
import { UserActions, UserActionTypes } from "../../types/todo"

// находятся экшенкрейтары которые связаны конткретно с пользователями
export const fetchUsers = ():any => async  (dispatch: Dispatch<UserActions>) => { //параметром принимает диспатч и внутри делаю запрос на сервер 
    try {
        dispatch({type: UserActionTypes.FETCH_USERS})
        const response = await axios.get('https://jsonplaceholder.typicode.com/users')

        setTimeout(() => {
            dispatch({type: UserActionTypes.FETCH_USERS_SUCCESS, payload: response.data})
        }, 500)

    } catch (error) {
        dispatch({
            type: UserActionTypes.FETCH_USERS_ERROR, 
            payload: 'Request was be with error'})
    }
}