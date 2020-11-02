import React, { useReducer } from 'react';
import TareaContex from './tareaContext';
import TareaReducer from './tareaReducer';

const TareaState = (props) => {
    const initialState = {
        tareas: [],
    }

    //Crear dispatch y state
    const [state, dispatch] = useReducer(TareaReducer, initialState);

    return (
        <TareaContex.Provider>
            {props.children}
        </TareaContex.Provider>
    )
}

export default TareaState;