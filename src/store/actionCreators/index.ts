import * as userActionCreators from './userActionCreator';
import * as todoActionCreators from './todoActionCreator';

export default {
    ...userActionCreators, // обьединяет для пользователей
    ...todoActionCreators // обьединяет для todo
}