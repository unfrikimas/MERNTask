import React, { useReducer } from 'react';
import TareaContex from './tareaContext';
import TareaReducer from './tareaReducer';

const TareaState = (props) => {
    const initialState = {
        tareas: [
            {nombre: 'Elegir plataforma', estado: true, proyectoId: 1},
            {nombre: 'Elegir colores', estado: false, proyectoId: 2},
            {nombre: 'Elegir pasarelas de pago', estado: true, proyectoId: 3},
            {nombre: 'Elegir hosting', estado: false, proyectoId: 4},
            {nombre: 'Elegir colores', estado: false, proyectoId: 4},
            {nombre: 'Elegir pasarelas de pago', estado: true, proyectoId: 1},
            {nombre: 'Elegir hosting', estado: false, proyectoId: 3},
            {nombre: 'Elegir colores', estado: false, proyectoId: 2},
            {nombre: 'Elegir pasarelas de pago', estado: true, proyectoId: 3},
            {nombre: 'Elegir hosting', estado: false, proyectoId: 2},
            {nombre: 'Elegir colores', estado: false, proyectoId: 1},
            {nombre: 'Elegir pasarelas de pago', estado: true, proyectoId: 3},
            {nombre: 'Elegir hosting', estado: false, proyectoId: 4}
        ],
    }

    //Crear dispatch y state
    const [state, dispatch] = useReducer(TareaReducer, initialState);

    return (
        <TareaContex.Provider
            value={{
                tareas: state.tareas
            }}
        >
            {props.children}
        </TareaContex.Provider>
    )
}

export default TareaState;