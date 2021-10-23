import Task from "./Task"

const TasksContainer = ({ tasks, onDelete, onToggle }) => {
   
    return (
        <div className='tasks-container'>
            {tasks.map((task) => (
                <Task key={task.id} 
                    task={task} 
                    onToggle={onToggle}
                    onDelete={onDelete}
                   />
            ))}
        </div>
    )
}

export default TasksContainer
