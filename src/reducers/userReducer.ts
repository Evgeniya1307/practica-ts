
// тип моего состояния
export interface UserState {
    users: any[],
    loading: boolean;
    error: null | string;
    
    
}

const initialState = {
    users:[], // список пользователей
    loading: false, //отыечает идёт загрузка или нет
    error: null // поле об ошибке
}



export const userReducer = (state=initialState, action)=> {
switch(action.type){ //в зависимости от action будет вызывать нужный case


}

}