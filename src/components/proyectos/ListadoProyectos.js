import React, { useContext, useEffect } from 'react';
import Proyecto from './Proyecto';
import proyectoContext from '../../context/proyectos/proyectoContext';

const ListadoProyectos = () => {

    //inicializamos el context
    const proyectosContext = useContext(proyectoContext);

    //extraer proyectos del context
    const {proyectos, obtenerProyectos} = proyectosContext;

    //obtener proyectos cuando carga el componente
    useEffect(() => {
        obtenerProyectos();
    }, []);

    //revisamos si proyectos tiene contenido
    if(proyectos.length === 0) {
        return (
            <p>No hay proyectos, crea uno para comenzar.</p>
        )
    }

    return (  
        <ul className="listado-proyectos">
            {proyectos.map(proyecto => (
                <Proyecto
                    key={proyecto.id} 
                    proyecto={proyecto}
                />
        ))}
        </ul>

    );
}
 
export default ListadoProyectos;