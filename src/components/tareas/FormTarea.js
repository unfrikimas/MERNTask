import React from 'react';

const FormTarea = () => {
    return (  
        
        <div className="formulario">
            <form>
                <div className="contenedor-input">
                    <input 
                        type="text"
                        className="input-text"
                        placeholder="Nombre tarea"
                        name="nombre"
                    />
                </div>
                <div className="contenedor-input">
                    <input 
                        type="submit"
                        className="btn btn-block btn-submit btn-primario"
                        value="Agregar tarea"
                    />
                </div>
            </form>
        </div>

    );
}
 
export default FormTarea;