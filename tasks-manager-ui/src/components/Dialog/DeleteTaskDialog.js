import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from "@mui/material"

const DeleteTaskDialog = ({ onClose, onConfirm, open , task}) => {
    return (
        <Dialog
            onClose={onClose}
            open={open}
        >
            <DialogTitle>Delete task</DialogTitle>
            <DialogContent>
                <DialogContentText>
                    Do you want to delete the task "{task.text}" ?
                </DialogContentText>
            </DialogContent>
            <DialogActions>
                <Button onClick={() => onConfirm(task)}>Confirm</Button>
                <Button onClick={onClose}>Cancel</Button>
            </DialogActions>
        </Dialog>
    )
}

export default DeleteTaskDialog


