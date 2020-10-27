import React, { Fragment } from 'react';

const NuevoProyecto = () => {
    return (  

        <Fragment>
            <button
                type="button"
                className="btn btn-block btn-primario"
            >Nuevo Proyecto</button>

            <form
                className="formulario-nuevo-proyecto"
            >
                <input 
                    type="text"
                    className="input-text"
                    placeholder="Nombre proyecto"
                    name="nombre"
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