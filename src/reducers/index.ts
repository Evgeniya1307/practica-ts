import { userReducer } from './userReducer';
// приницилизирую комбайн редюсер который объединяет все редюсеры моего приложения

import { combineReducers } from "redux";

export const rootReducer = combineReducers(){
    user:userReducer,// мои редюсеры
}