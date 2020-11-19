import React, { useReducer } from 'react';
import TareaContex from './tareaContext';
import TareaReducer from './tareaReducer';
import clienteAxios from '../../config/axios';

import { 
    TAREAS_PROYECTO,
    AGREGAR_TAREA,
    VALIDAR_TAREA,
    ELIMINAR_TAREA,
    TAREA_ACTUAL,
    ACTUALIZAR_TAREA,
    LIMPIAR_TAREA
} from '../../types';

const TareaState = (props) => {
    const initialState = {
        tareasproyecto: [],
        errortarea: false,
        tareaseleccionada: null
    }

    //Crear dispatch y state
    const [state, dispatch] = useReducer(TareaReducer, initialState);

    //Funciones
    //Obtener las tareas de un proyecto
    const obtenerTareas = async (proyecto) => {
        try {
            const resultado = await clienteAxios.get('/api/tareas', { params: { proyecto } })
            // console.log(resultado.data.tareas);
            dispatch({
                type: TAREAS_PROYECTO,
                payload: resultado.data.tareas
            })
        } catch (error) {
            console.log(error)
            
        }
    }

    //Agregar una tarea al proyecto seleccionado
    const agregarTarea = async (tarea) => {
        try {
            const resultado = await clienteAxios.post('/api/tareas', tarea);
            console.log(resultado)
            dispatch({
                type: AGREGAR_TAREA,
                payload: tarea
            })            
        } catch (error) {
            console.log(error);           
        }
    }

    //Valida y muestra un error en caso de que sea necesario
    const validarTarea = () => {
        dispatch({
            type: VALIDAR_TAREA
        })
    }

    //Eliminar tarea por id
    const eliminarTarea = async (id, proyecto) => {
        try {
            await clienteAxios.delete(`/api/tareas/${id}`, { params: { proyecto }});
            dispatch({
                type: ELIMINAR_TAREA,
                payload: id
            })            
        } catch (error) {
            console.log(error)
        }
    }

    //Actualiza la tarea
    const actualizarTarea = async (tarea) => {
        try {
            const resultado = await clienteAxios.put(`/api/tareas/${tarea._id}`, tarea)
            dispatch({
                type: ACTUALIZAR_TAREA,
                payload: resultado.data.tarea
            })            
        } catch (error) {
            console.log(error);
        }
    }

    //Obtiene una tarea para edicion
    const guardarTareaActual = (tarea) => {
        dispatch({
            type: TAREA_ACTUAL,
            payload: tarea
        })
    }

    // //Actualiza la tarea
    // const actualizarTarea = (tarea) => {
    //     dispatch({
    //         type: ACTUALIZAR_TAREA,
    //         payload: tarea
    //     })
    // }

    //Limpia la tarea seleccionada despues de editarla
    const limpiarTarea = () => {
        dispatch({
            type: LIMPIAR_TAREA
        })    
    }

    return (
        <TareaContex.Provider
            value={{
                tareasproyecto: state.tareasproyecto,
                errortarea: state.errortarea,
                tareaseleccionada: state.tareaseleccionada,
                obtenerTareas,
                agregarTarea,
                validarTarea,
                eliminarTarea,
                guardarTareaActual,
                actualizarTarea,
                limpiarTarea
            }}
        >
            {props.children}
        </TareaContex.Provider>
    )
}

export default TareaState;