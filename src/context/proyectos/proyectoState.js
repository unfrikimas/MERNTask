import React, { useReducer } from 'react';
import proyectoContext from './proyectoContext';
import proyectoReducer from './proyectoReducer';
import { v4 as uuidv4 } from 'uuid';
import { 
    FORMULARIO_PROYECTO, 
    OBTENER_PROYECTOS,
    AGREGAR_PROYECTO 
} from '../../types'


const ProyectoState = (props) => {

    const proyectos = [
        { id: 1, nombre: 'Tienda virtual' },
        { id: 2, nombre: 'Intranet' },
        { id: 3, nombre: 'Diseno de sitio web' },
        { id: 4, nombre: 'MERN' },
        { id: 5, nombre: 'Imagenes'}
    ]
   
    const initialState = {
        proyectos: [],
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

    //obtener los proyectos
    const obtenerProyectos = () => {
        dispatch({
            type: OBTENER_PROYECTOS,
            payload: proyectos
        })
    }

    //Agregar nuevo proyecto
    const agregarProyecto = (proyecto) => {
        proyecto.id = uuidv4();

        //Insertar el proyecto en el state
        dispatch({
            type: AGREGAR_PROYECTO,
            payload: proyecto
        })

    }

    return (
        <proyectoContext.Provider
            value={{
                proyectos: state.proyectos,
                formulario: state.formulario,
                mostrarFormulario,
                obtenerProyectos,
                agregarProyecto
            }}
        >
            {props.children}
        </proyectoContext.Provider>
    )
}

export default ProyectoState;