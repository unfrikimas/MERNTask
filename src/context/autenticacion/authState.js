import React, { useReducer } from 'react';
import authContext from './authContext';
import authReducer from './authReducer';


import {  
    REGISTRO_EXITOSO,
    REGISTRO_ERROR,
    OBTENER_USUARIO,
    LOGIN_EXITOSO,
    LOGIN_ERROR,
    CERRAR_SESION
} from '../../types';

const AuthState = (props) => {

    // inicializacion de los estados
    const initialState = {
        token: localStorage.getItem('token'),
        autenticado: null,
        usuario: null,
        mensaje: null
    }

    // array distructuring
    const [ state, dispatch ] = useReducer(authReducer, initialState);

    //  Funciones


    return (

        <authContext.Provider
            value={{
                token: state.token,
                autenticado: state.autenticado,
                usuario: state.usuario,
                mensaje: state.mensaje
            }}
        >
            {props.children}
        </authContext.Provider>

    )

}

export default AuthState;