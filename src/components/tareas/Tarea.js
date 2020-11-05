import React, { useContext } from 'react';
import proyectoContext from '../../context/proyectos/proyectoContext';
import TareaContext from '../../context/tareas/tareaContext';

const Tarea = ({tarea}) => {

    //obtener el state de las tareas
    const tareasContext = useContext(TareaContext);
    const {eliminarTarea, obtenerTareas} = tareasContext;  

    //obtener el proyecto activo
    const proyectosContext = useContext(proyectoContext);
    const {proyecto} = proyectosContext;    

    //Extraer el proyecto
    const [proyectoActual] = proyecto
    
    //Funcion cuando el usuario haga clic en eliminar tarea
    const onClickEliminar = (id) => {
        eliminarTarea(id);
        obtenerTareas(proyectoActual.id);
    }

    return (  
        <li className="tarea sombra">
            <p>{tarea.nombre}</p>

            <div className="estado">
                {tarea.estado 
                ?
                    (
                        <button
                            type="button"
                            className="completo"
                        >Completo</button>
                    )
                :
                    (
                        <button
                            type="button"
                            className="incompleto"
                        >Incompleto</button>
                    )
                }
            </div>

            <div className="acciones">
                <button
                    type="button"
                    className="btn btn-primario"
                >Editar</button>

                <button
                    type="button"
                    className="btn btn-secundario" 
                    onClick={() => onClickEliminar(tarea.id)}                                   
                >Eliminar</button>
            </div>

        </li>
    );
}
 
export default Tarea;