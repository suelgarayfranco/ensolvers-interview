import Folder from "./Folder"

const FoldersContainer = ({folders , onDelete}) => {
    
    return (
        <div className="folders-container">
            {folders.map((folder) => (
                <Folder key={folder.id} folder={folder} onDelete={onDelete} ></Folder>
            ))}
        </div>
    )
}

export default FoldersContainer
