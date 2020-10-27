import React from 'react';

const Tarea = ({tarea}) => {
    return (  
        <li>
            <p>{tarea.nombre}</p>
        </li>
    );
}
 
export default Tarea;