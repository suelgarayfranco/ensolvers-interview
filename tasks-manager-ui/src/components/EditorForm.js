import { Link } from "react-router-dom"
import { useState } from "react"

const EditorForm = ({ cancelPath, task, onEdit}) => {
    const [text, setText] = useState()

    const onSubmit = (e) => {
        e.preventDefault()
        if(!text){
            alert("Please write a task")
            return
        }
        task.text = text
        onEdit(task)
    }

    return (
        <form className="task-edit-form" onSubmit={onSubmit}>
            <input className="form-input" 
                type='text' 
                defaultValue={task.text} 
                onChange={(e)=>setText(e.target.value)}/>
            <div className="form-buttons">
                <button className="form-btn" type='submit'>Save</button>
                <Link to={cancelPath}>
                    <span id="form-cancel-btn"><button className="form-btn">Cancel</button></span>
                </Link> 
            </div>
        </form>
    )
}

export default EditorForm
