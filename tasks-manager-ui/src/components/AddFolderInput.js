import { useState } from "react"

const AddFolderInput = ({ onAdd }) => {
    const [name, setName] = useState('')

    const onSubmit = (e)=>{
        e.preventDefault()

        if(!name){
            alert("Please write a folder name")
            return
        }
        onAdd({ name })
        setName('')
        e.target.reset()
    }

    return (
        <form className="new-folder-container" onSubmit={onSubmit}>
            <input 
                className="form-input"
                type="text" 
                placeholder="Write the folder's name"
                onChange={(e) => setName(e.target.value)}/>  
            <button className="form-btn" type='submit'>Add</button>
        </form>
    )
}

export default AddFolderInput
