import React, { Fragment, useState } from 'react';

const NuevoProyecto = () => {

    //state del nuevo proyecto
    const [proyecto, setProyecto] = useState({
        nombre: ''
    });

    //extraer del objeto proyecto
    const {nombre} = proyecto;

    //lee el contenido del input
    const onChangeProyecto = (e) => {
        setProyecto({
            ...proyecto,
            [e.target.name]: e.target.value
        })
    };

    //cuando el usuario haga clic en agregar proyecto
    const onSubmitProyecto = (e) => {
        e.preventDefault();

        //validar el proyecto

        //agregar proyecto al state

        //reiniciar el form

    }

    return (  

        <Fragment>
            <button
                type="button"
                className="btn btn-block btn-primario"
            >Nuevo Proyecto</button>

            <form
                className="formulario-nuevo-proyecto"
                onSubmit={onSubmitProyecto}
            >
                <input 
                    type="text"
                    className="input-text"
                    placeholder="Nombre proyecto"
                    name="nombre"
                    value={nombre}
                    onChange={onChangeProyecto}
                />
                <input 
                    type="submit"
                    className="btn btn-block btn-primario"
                    value="Agregar proyecto"
                />
            </form>

        </Fragment>

    )
}
 
export default NuevoProyecto;