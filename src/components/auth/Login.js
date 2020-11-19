import React, { useState, useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import AlertaContext from '../../context/alertas/alertaContext';
import AuthContext from '../../context/autenticacion/authContext';

const Login = (props) => {

    // extraer los valores del context de alertas
    const alertaContext = useContext(AlertaContext);
    const { alerta, mostrarAlerta } = alertaContext;

    // extraer valores del context de autenticacion
    const authContext = useContext(AuthContext);
    const { mensaje, autenticado, iniciarSesion } = authContext;

    // En caso de que el usuario no exista o el password sea incorrecto 
    useEffect(() => {
        if(autenticado) {
            props.history.push('/proyectos');
        }
        if(mensaje) {
            mostrarAlerta(mensaje.msg, mensaje.categoria);
        }
        // eslint-disable-next-line
    }, [mensaje, autenticado, props.history]);

    //State local para iniciar sesion
    const [usuario, setUsuario] = useState({
        email: '',
        password: ''
    });

    //extraer del objeto usuario
    const {email, password} = usuario;

    //funcion para el onChange
    const onChange = (e) => {
        setUsuario({
            ...usuario,
            [e.target.name]: e.target.value
        })
    };

    //funcion para el boton Iniciar Sesion
    const onSubmit = (e) => {
        e.preventDefault();

        //validar que no haya campos vacios
        if(email.trim() === '' || password.trim() === '') {
            mostrarAlerta('Todos los campos son obligatorios', 'alerta-error');
        }

        //Pasar los valores al action
        iniciarSesion({ email, password });
    }

    return (  
        
        <div className="form-usuario">
            { alerta ? (<div className={`alerta ${alerta.categoria}`}>{alerta.msg}</div>) : null }
            <div className="contenedor-form sombra-dark">
                <h1>Iniciar sesión</h1>
                <form
                    onSubmit={onSubmit}
                >
                    <div className="campo-form">
                        <label htmlFor="email">Email</label>
                        <input 
                            type="email"
                            id="email"
                            name="email"
                            placeholder="Tu Email"
                            value={email}
                            onChange={onChange}
                        />
                    </div>
                    <div className="campo-form">
                        <label htmlFor="password">Password</label>
                        <input 
                            type="password"
                            id="password"
                            name="password"
                            placeholder="Tu Password"
                            value={password}
                            onChange={onChange}
                        />
                    </div>
                    <div className="campo-form">
                        <input 
                            type="submit"
                            className="btn btn-primario btn-block"
                            value="Iniciar sesión"
                        />
                    </div>
                </form>

                <Link to={'/nueva-cuenta'} className="enlace-cuenta">
                    Crear cuenta
                </Link>

            </div>
        </div>
    
    );
}
 
export default Login;