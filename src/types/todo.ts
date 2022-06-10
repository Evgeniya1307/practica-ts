interface UserState {
    users: any[],
    loading: boolean;
    error: null | string;
}



enum UserActionTypes{
    FETCH_USERS='FETCH_USERS',
    FETCH_USERS_SUCCESS= 'FETCH_USERS_SUCCESS', // УСПЕШНО ПОЛЬЗОВАТЕЛЕЙ ЗАГРУЗИЛА
    FETCH_USERS_ERROR= 'FETCH_USERS_ERROR'
}

// для каждого экшена отдельный интерфейс
interface  FetchUsersAction {
    type: UserActionTypes.FETCH_USERS;
}

// интерфейс для экшена
interface FetchUsersSuccessAction {
    type: UserActionTypes.FETCH_USERS_SUCCESS;
    payload: any[];

}


interface FetchUsersErrorAction {
    type: UserActionTypes.FETCH_USERS_ERROR
    payload: string
}



