import { VscTrash } from 'react-icons/vsc'
import { Link } from 'react-router-dom'

const Folder = ({ folder, onDelete}) => {
    return (
        <div className='folder'>
            <p className='folder-name'> - {folder.name}</p>
            <Link to={"/"+folder.id} className="items-link">View items</Link>
            <VscTrash className='folder-delete' onClick={() => onDelete(folder.id)}/>
        </div>
    )
}

export default Folder