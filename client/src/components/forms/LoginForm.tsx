import {Button, makeStyles, Paper, Typography} from "@material-ui/core";
import {Form, Formik} from "formik";
import * as Yup from "yup";
import TextInput from "./components/TextInput";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../../redux/rootReducer";
import {signInUsernameAndPassword} from "../../redux/actions/userActions";
import {UserState} from "../../types/UserTypes";
import {Navigate} from "react-router-dom";

const useStyles = makeStyles((theme) => ({
    form: {
        display: 'flex',
        flexDirection: "column"
    },
    paper: {
        display: 'flex',
        maxWidth: '78%',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: "#DEDEDE",
        padding: 35,
    },
    title: {
        marginBottom: 30
    },
    button: {
        marginTop: 20
    }
}));

const LoginForm = () => {
    const classes = useStyles();
    const dispatch = useDispatch();
    const userState: UserState = useSelector((state: RootState) => state.UserReducer)
    return (
        <Paper className={classes.paper}>
            <Typography className={classes.title} variant={"h1"}>Login</Typography>
            <Formik
                initialValues={{
                    username: '',
                    email: '',
                    password: '',
                }}
                validationSchema={Yup.object({
                    username: Yup.string()
                        .min(5, "Username must be at least 5 characters")
                        .max(15, "Username cannot be more than 15 characters")
                        .required("Username is required"),
                    password: Yup.string()
                        .min(7, "Password must be at least 7 characters long")
                        .required("Password is required"),
                })}
                onSubmit={(values) => {
                    dispatch(signInUsernameAndPassword(values))
                }}
            >
                <Form className={classes.form}>
                    <TextInput label={"Username"} name={"username"} placeholder={"letsHaveFun69"}/>
                    <TextInput label={"Password"} name={"password"} type={"password"} placeholder={"********"}/>
                    <Button className={classes.button} disabled={userState.loading} color={"primary"}
                            variant={"contained"} type={"submit"}>Login</Button>
                </Form>
            </Formik>
            { userState.errorMessage && <div>{userState.errorMessage}</div>}
            {userState.user && <Navigate to={"/app"}/>}
        </Paper>
    )
}

export default LoginForm;