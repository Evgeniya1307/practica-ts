
import { TypedUseSelectorHook, useSelector } from "react-redux";
import { RootState } from "../../reducers";


// тот же самый useSelector только работающий с типами 
export const useTypedSelector: TypedUseSelectorHook<typeof RootState> = useSelector;