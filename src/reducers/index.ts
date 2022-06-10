import { userReducer } from './userReducer';
// приницилизирую комбайн редюсер который объединяет все редюсеры моего приложения

import { combineReducers } from "redux";

export const rootReducer = combineReducers(){
    user:userReducer,// мои редюсеры
}
// свой хук
export type RootState = ReturnType<typeof rootReducer> //таким образом мы получаем тип нашего редьюсера
