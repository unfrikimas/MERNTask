import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Login = () => {

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

        //validar

        //Pasar los valores al action
    }

    return (  
        
        <div className="form-usuario">
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