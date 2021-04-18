import {
    Button,
    Dialog,
    DialogActions,
    DialogContent,
    DialogContentText,
    DialogTitle,
} from "@material-ui/core";

export interface TCModalProps {
    open: boolean;
    handleClose: any;
}

const TCModal = ({open, handleClose}: TCModalProps) => {
    return (
        <Dialog
            open={open}
            onClose={handleClose}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
        >
            <DialogTitle>Terms and Conditions</DialogTitle>
            <DialogContent>
                <DialogContentText id="alert-dialog-description">
                    <div>
                        This app is a test project. it is not designed for commercial or personal use.
                    </div>
                    <br/>
                    <div>
                        This app makes no claim about it's security. It has not undergone any security hardening or
                        safety
                        checking in any way.
                    </div>
                    <br/>
                    <div>
                        By accepting these terms you're acknowledging that any information submitted to this site may be
                        compromised. I take no responsibility to what happens on this site.
                    </div>
                    <br/>
                    <div>
                        Use completely at your own risk.
                    </div>
                </DialogContentText>
            </DialogContent>
            <DialogActions>
                <Button variant={"contained"} onClick={handleClose} color="primary">
                    Close
                </Button>
            </DialogActions>
        </Dialog>
    )
}

export default TCModal;