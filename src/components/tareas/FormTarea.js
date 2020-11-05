import React, {useContext, useState, useEffect} from 'react';
import proyectoContext from '../../context/proyectos/proyectoContext';
import TareaContext from '../../context/tareas/tareaContext';

const FormTarea = () => {

    //obtener el proyecto activo
    const proyectosContext = useContext(proyectoContext);
    const {proyecto} = proyectosContext;

    //obtener el state de las tareas
    const tareasContext = useContext(TareaContext);
    const {tareaseleccionada, errortarea, agregarTarea, validarTarea, obtenerTareas, actualizarTarea} = tareasContext;    

    //Effect que detecta si hay una tarea seleccionada
    useEffect(() => {

        if(tareaseleccionada !== null) {
            setTarea(tareaseleccionada)
        } else {
            setTarea({
                nombre: ''
            })
        }

    }, [tareaseleccionada]);

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
        if(nombre.trim() === '') {
            validarTarea();
            return;
        }

        // Verificar si es edicion o si es una nuevva tarea
        if(tareaseleccionada === null) {
            //Agregar la nueva tarea al state de tareas
            tarea.proyectoId = proyectoActual.id;
            tarea.estado = false;
            agregarTarea(tarea);
        } else {
            //actualiza la tarea existente
            actualizarTarea(tarea);
        }



        //Obtener y filtrar las tareas del proyecto actual
        obtenerTareas(proyectoActual.id);

        //Reiniciar el form
        setTarea({
            nombre: ''
        })

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
                        value={tareaseleccionada ? 'Editar tarea' : 'Agregar tarea'}
                    />
                </div>
            </form>

            {errortarea 
            ? <p className="mensaje error">El nombre de la tarea es obligatorio</p>
            : null}

        </div>

    );
}
 
export default FormTarea;