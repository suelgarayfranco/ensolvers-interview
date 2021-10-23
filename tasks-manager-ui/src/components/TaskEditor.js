import Header from "./Header"
import EditorForm from "./EditorForm"
import './TaskEditor.css'
import { Redirect, useParams, useHistory} from "react-router"
import { useState, useEffect } from "react"
import axios from "axios"

const TaskEditor= () => {
    const [task, setTask] = useState([])
    let history = useHistory()
    let param = useParams()
    const baseURL = "http://localhost:8080/api/folders/"+param.folder+"/tasks/"+param.task

    // GET request for task 
    const fetchTask = () =>{
        axios.get(baseURL).then(res => {
            setTask(res.data)
            console.log(res.data)
        })
    }  
    useEffect(() => {  
        fetchTask()  
    }, [])

    const editTask = (newTask) =>{
        axios.put(baseURL, newTask)
        history.push('/'+param.folder)
    }

    return (
        <div className="container">
            <Header title={`Editing Task "${task.text}"`}/>
            <EditorForm 
                cancelPath={"/"+param.folder} 
                task={task}
                onEdit={editTask}></EditorForm>
        </div>
    )
}

export default TaskEditor
