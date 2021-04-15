import usePhoneNumbers from "../hooks/useNumbers";
import PhoneNumberCard from "../components/data/PhoneNumberCard";
import {Button, makeStyles} from "@material-ui/core";


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
        [theme.breakpoints.down(750)]: {
            justifyContent: 'center'
        }
    }
}));

const NumbersPage = () => {
    const classes = useStyles();
    const { numbers } = usePhoneNumbers();
    return (
        <div className={classes.container}>
            <div className={classes.headerContainer}>
                <Button variant={"contained"} color={"primary"}>Add Number</Button>
            </div>
            <div className={classes.phoneNumberListContainer}>
                {numbers?.map((number) => {
                    return (
                        <PhoneNumberCard key={number._id} phoneNumber={number}/>
                    )
                })}
            </div>
        </div>
    )
}


export default NumbersPage;