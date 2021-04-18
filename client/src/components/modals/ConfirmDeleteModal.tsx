import {Button, Dialog, DialogContent, DialogTitle, makeStyles} from "@material-ui/core";
import {red} from "@material-ui/core/colors";

const useStyles = makeStyles((theme) => ({
    dialog: {
        minWidth: '50%'
    },
    deleteButton: {
        minWidth: '200px',
        maxWidth: '300px',
        backgroundColor: red[300],
        margin: 20,
    },
    buttonContainer: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    cancelButton: {
        minWidth: '200px',
        maxWidth: '300px',
        margin: 20,

    },
}));

export interface ConfirmDeleteModalProps {
    children?: any
    handleClose: Function;
    open: boolean;
    handleDelete: Function;
}


const ConfirmDeleteModal = ({open, handleClose, handleDelete, children}: ConfirmDeleteModalProps) => {
    const classes = useStyles();

    const runDeleteFunction = () => {
        handleDelete();
    }

    return (
        <Dialog
            classes={{paper: classes.dialog}}
            open={open}
            disableBackdropClick
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
        >
            <DialogTitle>Confirm Delete?</DialogTitle>
            <DialogContent>
                {children}
                <div className={classes.buttonContainer}>
                    <Button className={classes.deleteButton} onClick={() => runDeleteFunction()}
                            variant={"contained"}>Delete</Button>
                    <Button className={classes.cancelButton} onClick={() => handleClose()} color={"primary"}
                            variant={"contained"} type={"submit"}>Cancel</Button>
                </div>
            </DialogContent>
        </Dialog>
    )
}

export default ConfirmDeleteModal