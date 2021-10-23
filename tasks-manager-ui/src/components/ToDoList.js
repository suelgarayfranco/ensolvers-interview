import './ToDoList.css'
import Header from './Header'
import AddTaskInput from './AddTaskInput'
import TaskContainer from './TasksContainer'
import DeleteTaskDialog from './Dialog/DeleteTaskDialog'
import { HiOutlineArrowNarrowLeft } from "react-icons/hi" 
import { useParams } from "react-router"
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'


const ToDoList = () => {
    const [tasks, setTasks] = useState([])
    const [folder, setFolder] = useState([])
    const [taskToDelete, setTaskToDelete] = useState({})
    const [isOpen, setIsOpen] = useState(false)

    let param = useParams()
    const baseURL = "http://localhost:8080/api/folders/"+param.id

    const fetchTasks = () =>{
        axios.get(baseURL+"/tasks").then(res => {
            setTasks(res.data)
        })
    }  
    // GET request for folder with id from url parameters
    const fetchFolder = () =>{
        axios.get(baseURL).then(res => {
            setFolder(res.data)
        })
    }
    useEffect(() => {
        fetchFolder()  
        fetchTasks()  
    }, [])

    // POST request to add a new task
    const addTask = (task) =>{
        axios.post(baseURL+"/tasks",task).then(()=>fetchTasks())
    }

    // Opens confirmation dialog
    const deleteConfirmation = (task) =>{
        setTaskToDelete(task)
        handleOpenDialog()
    }
    // Actually deletes the task
    const deleteTask = (task) =>{
        setIsOpen(false)
        axios.delete(`${baseURL}/tasks/${task.id}`).then(()=>fetchTasks())
    }

    const handleOpenDialog = () =>{
        setIsOpen(true)
    }

    const handleCloseDialog = () =>{
        setIsOpen(false)
    }

    const toggleCheck = (task) =>{
        task.checked = !task.checked
        axios.put(`${baseURL}/tasks/${task.id}`,task).then(()=>fetchTasks())
    }
    
    return (
        <div className="container">
            <Header title={"Folders > "+folder.name }/>
            <Link to="/" className="back-link">
                <HiOutlineArrowNarrowLeft />
            </Link>
            <TaskContainer 
                tasks={tasks} 
                onDelete={deleteConfirmation}
                onToggle={toggleCheck}/>
            <AddTaskInput onAdd={addTask}/>
            <DeleteTaskDialog 
                onClose={handleCloseDialog}
                onConfirm={deleteTask}
                open={isOpen}
                task={taskToDelete}/>
        </div>
    )
}

export default ToDoList
