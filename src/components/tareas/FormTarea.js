import React, {useContext} from 'react';
import proyectoContext from '../../context/proyectos/proyectoContext';

const FormTarea = () => {

    //obtener el proyecto activo
    const proyectosContext = useContext(proyectoContext);
    const {proyecto} = proyectosContext;

    //Si no hay proyecto seleccionado
    if(!proyecto) return null;
    
    //Array destructuring para extraer el proyecto actual
    const [proyectoActual] = proyecto;    

    //Cuando haga clic en agregar tarea
    const onSubmit = (e) => {
        e.preventDefault();

        //Validar

        //Pasar la alidacion

        //Agregar la nueva tarea al state de tareas

        //Reiniciar el form

    }

    return (  
        
        <div className="formulario">
            <form
                onSubmit={onSubmit}
            >
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