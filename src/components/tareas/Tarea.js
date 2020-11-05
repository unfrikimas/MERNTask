import React, { useContext } from 'react';
import proyectoContext from '../../context/proyectos/proyectoContext';
import TareaContext from '../../context/tareas/tareaContext';

const Tarea = ({tarea}) => {

    //obtener el state de las tareas
    const tareasContext = useContext(TareaContext);
    const {eliminarTarea, obtenerTareas, cambiarEstadoTarea, guardarTareaActual} = tareasContext;  

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

    //Funcion que cambia el estado actual de la tarea
    const onClickEstado = (tarea) => {
        if(tarea.estado) {
            tarea.estado = false
        } else {
            tarea.estado = true
        }
        cambiarEstadoTarea(tarea);
    }

    // Funcion para seleccionar la tarea actual
    const onClickSeleccionar = (tarea) => {
        guardarTareaActual(tarea);
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
                            onClick={() => onClickEstado(tarea)}
                        >Completo</button>
                    )
                :
                    (
                        <button
                            type="button"
                            className="incompleto"
                            onClick={() => onClickEstado(tarea)}
                        >Incompleto</button>
                    )
                }
            </div>

            <div className="acciones">
                <button
                    type="button"
                    className="btn btn-primario"
                    onClick={() => onClickSeleccionar(tarea)}
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