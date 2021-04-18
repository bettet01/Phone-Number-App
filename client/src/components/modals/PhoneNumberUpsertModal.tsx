import {PhoneNumber} from "../../types/PhoneNumberTypes";
import {Button, Dialog, DialogContent, DialogTitle, makeStyles} from "@material-ui/core";
import {Form, Formik} from "formik";
import * as Yup from "yup";
import TextInput from "../forms/components/TextInput";
import {red} from "@material-ui/core/colors";
import {createPhoneNumber, updatePhoneNumber} from "../../service/backendApi";
import {useState} from "react";
import {ColorEnum, ErrorMessage} from "../../types/GenericTypes";
import {useDispatch} from "react-redux";
import {displaySnackbar} from "../../redux/actions/snackBarActions";

const useStyles = makeStyles((theme) => ({
    dialog: {
        minWidth: '50%'
    },
    form: {
        display: 'flex',
        flexDirection: "column"
    },
    buttonContainer: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    upsertButton: {
        maxWidth: '300px',
        margin: 20,

    },
    closeButton: {
        maxWidth: '300px',
        backgroundColor: red[300],
        margin: 20,
    }
}));

export interface PhoneNumberUpsertModalProps {
    phoneNumber?: PhoneNumber
    handleClose: Function;
    open: boolean;
}

const PhoneNumberUpsertModal = ({phoneNumber, handleClose, open}: PhoneNumberUpsertModalProps) => {
    const [loading, setLoading] = useState(false);
    const dispatch = useDispatch();
    const classes = useStyles();

    const upsertPhoneNumber = (payload: PhoneNumber) => {
        console.log(payload)
        if (phoneNumber) {
            payload._id = phoneNumber._id;
            updatePhoneNumber(payload).then((res: any) => {
                dispatch(displaySnackbar(res.data.message, ColorEnum.SUCCESS));
                handleClose();
                setLoading(false);
            }).catch((err: ErrorMessage) => {
                dispatch(displaySnackbar(err.message, ColorEnum.ERROR));
                setLoading(false);
            })
        } else {
            createPhoneNumber(payload).then((res: any) => {
                dispatch(displaySnackbar(res.data.message, ColorEnum.SUCCESS));
                setLoading(false);
                handleClose();
            }).catch((err) => {
                dispatch(displaySnackbar(err.message, ColorEnum.ERROR));
                setLoading(false);
            })
        }
    }

    return (
        <Dialog
            classes={{paper: classes.dialog}}
            open={open}
            disableBackdropClick
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
        >
            <DialogTitle>{phoneNumber ? "Edit" : "Add"} Phone Number</DialogTitle>
            <DialogContent>
                <Formik
                    initialValues={{
                        name: phoneNumber ? phoneNumber.name : '',
                        number: phoneNumber ? phoneNumber.number : '',
                        description: phoneNumber ? phoneNumber.description : '',
                    }}
                    validationSchema={Yup.object({
                        name: Yup.string()
                            .required("Username is required"),
                        number: Yup.string()
                            .required("Password is required"),
                        description: Yup.string()
                    })}
                    onSubmit={(values) => {
                        setLoading(true);
                        upsertPhoneNumber(values as PhoneNumber);
                    }}
                >
                    <Form className={classes.form}>
                        <TextInput label={"Name"} name={"name"} placeholder={"Sam Smith"}/>
                        <TextInput label={"Phone Number"} name={"number"} placeholder={"123-456-9999"}/>
                        <TextInput label={"Description"} name={"description"} placeholder={"Friends phone number"}/>
                        <div className={classes.buttonContainer}>
                            <Button className={classes.upsertButton} disabled={loading} color={"primary"}
                                    variant={"contained"} type={"submit"}>{phoneNumber ? "Edit" : "Create"}</Button>
                            <Button className={classes.closeButton} onClick={() => handleClose()}
                                    variant={"contained"}>Close</Button>
                        </div>
                    </Form>
                </Formik>
            </DialogContent>
        </Dialog>
    )
}


export default PhoneNumberUpsertModal;