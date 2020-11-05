import React, { useReducer } from 'react';
import TareaContex from './tareaContext';
import TareaReducer from './tareaReducer';

import { 
    TAREAS_PROYECTO,
    AGREGAR_TAREA,
    VALIDAR_TAREA,
    ELIMINAR_TAREA
} from '../../types';

const TareaState = (props) => {
    const initialState = {
        tareas: [
            {id: 13, nombre: 'Elegir plataforma', estado: true, proyectoId: 1},
            {id: 1, nombre: 'Elegir colores', estado: false, proyectoId: 2},
            {id: 2, nombre: 'Elegir pasarelas de pago', estado: true, proyectoId: 3},
            {id: 3, nombre: 'Elegir hosting', estado: false, proyectoId: 4},
            {id: 4, nombre: 'Elegir colores', estado: false, proyectoId: 4},
            {id: 5, nombre: 'Elegir pasarelas de pago', estado: true, proyectoId: 1},
            {id: 6, nombre: 'Elegir hosting', estado: false, proyectoId: 3},
            {id: 7, nombre: 'Elegir colores', estado: false, proyectoId: 2},
            {id: 8, nombre: 'Elegir pasarelas de pago', estado: true, proyectoId: 3},
            {id: 9, nombre: 'Elegir hosting', estado: false, proyectoId: 2},
            {id: 10, nombre: 'Elegir colores', estado: false, proyectoId: 1},
            {id: 11, nombre: 'Elegir pasarelas de pago', estado: true, proyectoId: 3},
            {id: 12, nombre: 'Elegir hosting', estado: false, proyectoId: 4}
        ],
        tareasproyecto: null,
        errortarea: false
    }

    //Crear dispatch y state
    const [state, dispatch] = useReducer(TareaReducer, initialState);

    //Crear funciones
    //Obtener las tareas de un proyecto
    const obtenerTareas = (proyectoId) => {
        dispatch({
            type: TAREAS_PROYECTO,
            payload: proyectoId
        })
    }

    //Agregar una tarea al proyecto seleccionado
    const agregarTarea = (tarea) => {
        dispatch({
            type: AGREGAR_TAREA,
            payload: tarea
        })
    }

    //Valida y muestra un error en caso de que sea necesario
    const validarTarea = () => {
        dispatch({
            type: VALIDAR_TAREA
        })
    }

    //Eliminar tarea por id
    const eliminarTarea = (id) => {
        dispatch({
            type: ELIMINAR_TAREA,
            payload: id
        })
    }

    return (
        <TareaContex.Provider
            value={{
                tareas: state.tareas,
                tareasproyecto: state.tareasproyecto,
                errortarea: state.errortarea,
                obtenerTareas,
                agregarTarea,
                validarTarea,
                eliminarTarea
            }}
        >
            {props.children}
        </TareaContex.Provider>
    )
}

export default TareaState;