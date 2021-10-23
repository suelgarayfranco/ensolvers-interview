import { VscEdit, VscTrash } from 'react-icons/vsc'
import {Link} from 'react-router-dom'
import { useLocation } from 'react-router';

const Task = ({ task, onToggle, onDelete}) => {
    let location = useLocation()

    return (
        <div className='task'>
            <input 
                type='checkbox' 
                className='task-check' 
                checked={task.checked} 
                onClick={ () => onToggle(task)}/>
            <p className='task-text'> {task.text}</p>
            <Link to={location.pathname+"/edit/"+task.id} className='task-edit'>
                <VscEdit />
            </Link>
            <VscTrash className='task-delete'
                onClick={ () => onDelete(task)}/>
        </div>
    )
}

export default Task
