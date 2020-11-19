import React, { Fragment, useContext } from 'react';
import Tarea from './Tarea';
import proyectoContext from '../../context/proyectos/proyectoContext';
import TareaContext from '../../context/tareas/tareaContext';

const ListadoTareas = () => {

    //obtener proyectos del state inicial
    const proyectosContext = useContext(proyectoContext);
    const {proyecto, eliminarProyecto} = proyectosContext;

    //obtener el listado de las tareas
    const tareasContext = useContext(TareaContext);
    const {tareasproyecto} = tareasContext;    

    //Si no hay proyecto seleccionado
    if(!proyecto) {
        return (
            <h2>Selecciona un proyecto</h2>
        )        
    }
    //Array destructuring para extraer el proyecto actual
    const [proyectoActual] = proyecto;

    //Eliminar un proyecto
    const onClickEliminar = () => {
        eliminarProyecto(proyectoActual._id)
    }

    return (  
        
        <Fragment>
            <h2>Proyecto: {proyectoActual.nombre}</h2>
            {tareasproyecto.length === 0
                ? 
                    (<li className="tarea"><p>No hay tareas</p></li>)
                : 
                    (<ul className="listado-tareas">{tareasproyecto.map(tarea => (
                        <Tarea 
                            key={tarea._id}
                            tarea={tarea}
                        />
                    ))}</ul>)        
            }

            <button
                type="button"
                className="btn btn-eliminar"
                onClick={onClickEliminar}
            >Eliminar proyecto &times;</button>

        </Fragment>

    );
}
 
export default ListadoTareas;