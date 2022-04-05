import { createContext, useContext, useReducer } from 'react';
import { dataReducer } from '../reducer/dataReducer';

const initialState = {
    playlists: [],
    likes: [],
    watchLater: [],
    history: [],
    showModal: false
}

const StateContext = createContext();
export const useStateContext = () => useContext(StateContext);

export const StateProvider = ({ children }) => {
    const [state, dispatch] = useReducer(dataReducer, initialState);
    return (
        <StateContext.Provider value={{ state, dispatch }}>
            {children}
        </StateContext.Provider>
    )
}