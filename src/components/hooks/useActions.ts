
import { useDispatch } from 'react-redux'
import { bindActionCreators } from 'redux';
import * as  ActionCreators from '../../store/actionCreators/userActionCreator'

export const useActions =()=>{
    const dispatch = useDispatch();
    return bindActionCreators(ActionCreators, dispatch)// связываю экшенкреторы с этим диспатчем
}