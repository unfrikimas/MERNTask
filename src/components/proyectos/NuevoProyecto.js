import React, { Fragment, useState, useContext } from 'react';
import proyectoContext from '../../context/proyectos/proyectoContext';

const NuevoProyecto = () => {

    //obtener el state del formulario
    const proyectosContext = useContext(proyectoContext);

    //extraer el formulario del context
    const {formulario, mostrarFormulario, agregarProyecto} = proyectosContext;

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
        if(nombre === '') {
            return;
        }

        //agregar proyecto al state
        agregarProyecto(proyecto)

        //reiniciar el form
        setProyecto({
            nombre: ''
        })

    }

    //mostrar el formulario
    const onClickFormulario = () => {
        mostrarFormulario();
    }

    return (  

        <Fragment>
            <button
                type="button"
                className="btn btn-block btn-primario"
                onClick={onClickFormulario}
            >Nuevo Proyecto</button>

            { formulario 
                ?
                    (
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
                    )
                :
                    null
            }

        </Fragment>

    )
}
 
export default NuevoProyecto;