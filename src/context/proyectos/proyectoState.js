import React, { useReducer } from 'react';
import proyectoContext from './proyectoContext';
import proyectoReducer from './proyectoReducer';
import { FORMULARIO_PROYECTO } from '../../types'

const ProyectoState = (props) => {
   
    const initialState = {
        proyectos: [
            { id: 1, nombre: 'Tienda virtual' },
            { id: 2, nombre: 'Intranet' },
            { id: 3, nombre: 'Diseno de sitio web' },
            { id: 4, nombre: 'MERN' },
            { id: 5, nombre: 'Imagenes'}
        ],
        formulario: false
    }

    // Dispatch para ejecutar las acciones
    const [state, dispatch] = useReducer(proyectoReducer, initialState);

    //Serie de funciones para CRUD
    //funcion para mostrar el formulario nuevo proyecto
    const mostrarFormulario = () => {
        dispatch({
            type: FORMULARIO_PROYECTO
        })
    }

    return (
        <proyectoContext.Provider
            value={{
                proyectos: state.proyectos,
                formulario: state.formulario,
                mostrarFormulario
            }}
        >
            {props.children}
        </proyectoContext.Provider>
    )
}

export default ProyectoState;