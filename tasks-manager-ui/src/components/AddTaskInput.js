import { useState } from 'react'
const AddTaskInput = ({ onAdd }) => {
    const [text, setText] = useState('')

    const onSubmit = (e)=>{
        e.preventDefault()

        if(!text){
            alert("Please write a folder name")
            return
        }
        onAdd({ text })
        setText('')
        e.target.reset()
    }

    return (
        <form className="new-task-container" onSubmit={onSubmit}>
            <input 
                className="form-input"
                type="text" 
                placeholder="Write a new task"
                onChange={(e) => setText(e.target.value)}/>  
            <button className="form-btn" type='submit'>Add</button>
        </form>
    )
}

export default AddTaskInput
