import { useState, useEffect } from "react"
import axios from "axios"
import Header from "./Header"
import './FoldersList.css'
import FoldersContainer from "./FoldersContainer"
import AddFolderInput from "./AddFolderInput"
import DeleteFolderDialog from "./Dialog/DeleteFolderDialog"

const FoldersList = () => {
    const [folders, setFolders] = useState([])
    const [selectedValue, setSelectedValue] = useState('')
    const [folderToDelete, setFolderToDelete] = useState('')
    const [isOpen, setIsOpen] = useState(false)

    const baseURL = "http://localhost:8080/api/folders"

    // GET request for all folders
    const fetchFolders = () =>{
        axios.get(baseURL).then(res => {
            setFolders(res.data)
        })
    }
    useEffect(() => {
        fetchFolders()    
    }, [])

    // POST request to add a new folder
    const addFolder = (folder) =>{
        axios.post(baseURL,folder).then(()=>fetchFolders())
    }
    
    // Opens confirmation dialog
    const deleteConfirmation = (id) =>{
        axios.get(`${baseURL}/${id}`).then(res => {
            setFolderToDelete(res.data)
        })
        handleOpenDialog()
    }
    // Actually deletes the folder
    const deleteFolder = (folder) =>{
        setIsOpen(false)
        axios.delete(`${baseURL}/${folder.id}`).then(()=>fetchFolders())
    }

    const handleOpenDialog = () =>{
        setIsOpen(true)
    }

    const handleCloseDialog = () =>{
        setIsOpen(false)
    }

    return (
        <div className="container">
            <Header title="Folders"></Header>
            <FoldersContainer folders={folders} onDelete={deleteConfirmation}/>
            <AddFolderInput onAdd={addFolder}/>
            <DeleteFolderDialog 
                onClose={handleCloseDialog}
                onConfirm={deleteFolder}
                open={isOpen}
                folder={folderToDelete}/>
        </div>
    )
}

export default FoldersList
