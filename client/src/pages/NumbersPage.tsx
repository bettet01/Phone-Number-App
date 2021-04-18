import usePhoneNumbers from "../hooks/useNumbers";
import PhoneNumberCard from "../components/data/PhoneNumberCard";
import {Button, makeStyles} from "@material-ui/core";
import {useState} from "react";
import PhoneNumberUpsertModal from "../components/modals/PhoneNumberUpsertModal";
import {Refresh} from "@material-ui/icons";


const useStyles = makeStyles((theme) => ({
    container: {
        width: '100vw',
        display: "flex",
        flexDirection: 'column'
    },
    phoneNumberListContainer: {
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'row',
        flexWrap: 'wrap'
    },
    headerContainer: {
        margin: 30,
        display: 'flex',
        justifyContent: 'space-between',
        [theme.breakpoints.down(750)]: {
            "& button": {
                margin: '10px'
            },
            justifyContent: 'space-evenly'
        }
    }
}));

const NumbersPage = () => {
    const [upsertModalState, setUpsertModalState] = useState(false);
    const classes = useStyles();
    const {numbers, refreshPhoneNumbers} = usePhoneNumbers();

    const handleUpsertModalClose = () => {
        setUpsertModalState(false);
        refreshPhoneNumbers();
    }

    return (
        <div className={classes.container}>
            <div className={classes.headerContainer}>
                <Button variant={"contained"} onClick={() => setUpsertModalState(true)} color={"primary"}>Add Number</Button>
                <Button variant={"contained"} onClick={() => refreshPhoneNumbers()} ><Refresh/></Button>
            </div>
            <div className={classes.phoneNumberListContainer}>
                {numbers?.map((number) => {
                    return (
                        <PhoneNumberCard refreshPhoneNumbers={refreshPhoneNumbers} key={number._id} phoneNumber={number}/>
                    )
                })}
            </div>
            < PhoneNumberUpsertModal handleClose={handleUpsertModalClose} open={upsertModalState} />
        </div>
    )
}


export default NumbersPage;