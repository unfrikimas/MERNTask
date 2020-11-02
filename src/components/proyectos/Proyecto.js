import React, {useContext} from 'react';
import proyectoContext from '../../context/proyectos/proyectoContext';
import TareaContext from '../../context/tareas/tareaContext';

const Proyecto = ({proyecto}) => {

    //obtener el state de los proyectos
    const proyectosContext = useContext(proyectoContext);
    const {proyectoActual} = proyectosContext;

    //obtener el state de las tareas
    const tareasContext = useContext(TareaContext);
    const {obtenerTareas} = tareasContext;

    //Función para agregar el proyecto actual
    const seleccionarProyecto = (id) => {
        proyectoActual(id); // Fijar un proyecto actual
        obtenerTareas(id); // Filtrar tareas haciendo clic
    }

    return (  
        <li>
            <button
                type="button"
                className="btn btn-blank"
                onClick={() => seleccionarProyecto(proyecto.id)}
            >{proyecto.nombre}</button>
        </li>
    );
}
 
export default Proyecto;