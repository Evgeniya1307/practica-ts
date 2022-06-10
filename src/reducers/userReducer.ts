import { UserState, UserActions, UserActionTypes } from "../types/user"

// тип моего состояния
const initialState: UserState = {
    users:[], // список пользователей
    loading: false, //отыечает идёт загрузка или нет
    error: null // поле об ошибке
}
export const userReducer = (state=initialState, action:UserActions): UserState => {
    switch(action.type){ //в зависимости от action будет вызывать нужный case
        case UserActionTypes.FETCH_USERS: // вызывать когда подгружать пользователей с сервера 
            return { loading: true, error: null, users: [] }
    case UserActionTypes.FETCH_USERS_SUCCESS:
        return {loading: false, error: null, users:action.payload} // если успешно в поле  users передаю массив пользователей которые будем с сервера 
        case UserActionTypes.FETCH_USERS_ERROR:
            return{loading: false, error:action.payload, users:[]} // успешно подгрузились или ошибка делаю фолс так как загрузка ужее не идёт,если ошибка в error помещаю данные из экшена из поля payload   
    default:
        return state
        }
    }





 



















