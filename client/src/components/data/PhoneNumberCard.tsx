import {PhoneNumber} from "../../types/PhoneNumberTypes";
import {Button, Card, CardActions, CardContent, makeStyles, Typography} from "@material-ui/core";
import {Delete, Edit} from "@material-ui/icons";
import PhoneNumberUpsertModal from "../modals/PhoneNumberUpsertModal";
import {useState} from "react";
import ConfirmDeleteModal from "../modals/ConfirmDeleteModal";
import {deletePhoneNumber} from "../../service/backendApi";
import {useDispatch} from "react-redux";
import {displaySnackbar} from "../../redux/actions/snackBarActions";
import {ColorEnum} from "../../types/GenericTypes";


export interface PhoneNumberCardProps {
    phoneNumber: PhoneNumber;
    refreshPhoneNumbers: any;
}


const useStyles = makeStyles({
    root: {
        minWidth: 275,
        margin: 15,
    },
    bullet: {
        display: 'inline-block',
        margin: '0 2px',
        transform: 'scale(0.8)',
    },
    title: {
        fontSize: 22,
        marginBottom: 20,
    },
    pos: {
        marginBottom: 12,
    },
    buttonContainer: {
        display: 'flex',
        justifyContent: "center",
    }
});

const PhoneNumberCard = (props: PhoneNumberCardProps) => {
    const [upsertModalState, setUpsertModalState] = useState(false);
    const [deleteModalState, setDeleteModalState] = useState(false);
    const dispatch = useDispatch();
    const classes = useStyles();

    const handleUpsertModalClose = () => {
        setUpsertModalState(false);
        props.refreshPhoneNumbers();
    }

    const handleDeleteModalClose = () => {
        setDeleteModalState(false);
        props.refreshPhoneNumbers();
    }

    const handleDelete = () => {
        deletePhoneNumber(props.phoneNumber._id).then((res) => {
            dispatch(displaySnackbar(res.data.message, ColorEnum.SUCCESS));
            handleDeleteModalClose();
        }).catch((err) => {
            dispatch(displaySnackbar(err.message, ColorEnum.ERROR))
        })
    }

    return (
        <>
            <Card raised className={classes.root}>
                <CardContent>
                    <Typography className={classes.title} color="textSecondary" gutterBottom>
                        {props.phoneNumber.name}
                    </Typography>
                    <Typography className={classes.pos} variant="h5" component="h2">
                        {props.phoneNumber.number}
                    </Typography>
                    <Typography className={classes.pos} variant="h5" component="h2">
                        {props.phoneNumber.description}
                    </Typography>
                </CardContent>
                <CardActions className={classes.buttonContainer}>
                    <Button size="small"><Edit onClick={() => setUpsertModalState(true)} color={'action'}/></Button>
                    <Button size="small"><Delete onClick={() => setDeleteModalState(true)} color={"error"}/></Button>
                </CardActions>
            </Card>
            < ConfirmDeleteModal handleClose={handleDeleteModalClose} open={deleteModalState} handleDelete={handleDelete} />
            < PhoneNumberUpsertModal open={upsertModalState} handleClose={handleUpsertModalClose} phoneNumber={props.phoneNumber} />
        </>
    )
}


export default PhoneNumberCard;