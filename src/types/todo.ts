//интерфейс для состояния
export interface TodoState{
    todos: Array<any>  // массив списка дел, про типизировать все объекты в массиве
    loading: boolean// подгружаются или нет
    error: null | string //сообщение с ошибкой
    page: number // постороничный вывод храню номер текущей страницы
    limit: number// ко-во товара которое отображаю на одной странице
}

//перечисление для типов экшена
export enum TodoActionTypes{
    FETCH_TODO = 'FETCH_TODO',
    FETCH_TODO_SUCCESS = 'FETCH_TODO_SUCCESS',
    FETCH_TODO_ERROR = 'FETCH_TODO_ERROR',
    SET_TODO_PAGE = 'SET_TODO_PAGE' // постраничный вывод для изменения текущей страницы
}


//для каждого экшена создаю по интерфейсу который описывает поля которые у экшена будут 
interface FetchTodoAction{
    type: TodoActionTypes.FETCH_TODO // поле type которое получаю из перечисления и он равен  FETCH_TODO
}
interface FetchTodoSuccessAction{
    type: TodoActionTypes.FETCH_TODO_SUCCESS,
    payload: Array<any>
}
interface FetchTodoErrorAction{
    type: TodoActionTypes.FETCH_TODO_ERROR,
    payload:  string
}
interface SetTodoPageAction{
    type: TodoActionTypes.SET_TODO_PAGE,
    payload: number
}


export type TodoActions = FetchTodoAction | FetchTodoSuccessAction | FetchTodoErrorAction | SetTodoPageAction
