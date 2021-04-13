import SignupForm from "../components/forms/SignupForm";
import {makeStyles} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    container: {
        width: '100vw',
        minHeight: '80vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
}));

const SignupPage = () => {
    const classes = useStyles();
    return (
        <div className={classes.container}>
            <SignupForm/>
        </div>
    )
}


export default SignupPage;