import {makeStyles} from "@material-ui/core";
import LoginForm from "../components/forms/LoginForm";


const useStyles = makeStyles((theme) => ({
    container: {
        width: '100vw',
        minHeight: '80vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
}));

const LoginPage = () => {
    const classes = useStyles();
    return (
        <div className={classes.container}>
            <LoginForm/>
        </div>
    )
}


export default LoginPage;