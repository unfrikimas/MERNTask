import React, {useContext, useState} from 'react';
import proyectoContext from '../../context/proyectos/proyectoContext';
import TareaContext from '../../context/tareas/tareaContext';

const FormTarea = () => {

    //obtener el proyecto activo
    const proyectosContext = useContext(proyectoContext);
    const {proyecto} = proyectosContext;

    //obtener el state de las tareas
    const tareasContext = useContext(TareaContext);
    const {agregarTarea} = tareasContext;    

    // State del formulario
    const [tarea, setTarea] = useState({
        nombre: ''
    })

    //Extraer el nombre del proyecto
    const {nombre} = tarea;

    //Si no hay proyecto seleccionado
    if(!proyecto) return null;
    
    //Array destructuring para extraer el proyecto actual
    const [proyectoActual] = proyecto;   
    
    //Leer los valores del formulario
    const handleChange = (e) => {
        setTarea({
            ...tarea,
            [e.target.name]: e.target.value
        })
    }

    //Cuando haga clic en agregar tarea
    const onSubmit = (e) => {
        e.preventDefault();

        //Validar

        //Pasar la alidacion

        //Agregar la nueva tarea al state de tareas
        tarea.proyectoId = proyectoActual.id;
        tarea.estado = false;
        agregarTarea(tarea);

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
                        value={nombre}
                        onChange={handleChange}
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