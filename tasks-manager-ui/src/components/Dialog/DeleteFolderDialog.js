import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from "@mui/material"

const DeleteFolderDialog = ({ onClose, onConfirm, open , folder}) => {
    return (
        <Dialog
            onClose={onClose}
            open={open}
        >
            <DialogTitle>Delete folder</DialogTitle>
            <DialogContent>
                <DialogContentText>
                    Do you want to delete the folder "{folder.name}" ?
                </DialogContentText>
            </DialogContent>
            <DialogActions>
                <Button onClick={() => onConfirm(folder)}>Confirm</Button>
                <Button onClick={onClose}>Cancel</Button>
            </DialogActions>
        </Dialog>
    )
}

export default DeleteFolderDialog
