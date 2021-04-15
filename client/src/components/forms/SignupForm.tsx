import {Form, Formik} from "formik";
import * as Yup from "yup";
import {Button, makeStyles, Paper, Typography} from "@material-ui/core";
import TextInput from "./components/TextInput";
import CheckboxInput from "./components/CheckboxInput";
import {useDispatch, useSelector} from "react-redux";
import {UserState} from "../../types/UserTypes";
import {RootState} from "../../redux/rootReducer";
import {signUpUsernameAndPassword} from "../../redux/actions/userActions";
import {Navigate} from "react-router-dom";
import {useState} from "react";
import TCModal from "../modals/T&CModal";

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

const SignupForm = () => {
    const classes = useStyles();
    const dispatch = useDispatch();
    const [modalState, setModalState] = useState(false);

    const userState: UserState = useSelector((state: RootState) => state.UserReducer)
    return (
        <>
            <Paper className={classes.paper}>
                <Typography className={classes.title} variant={"h1"}>Sign Up</Typography>
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
                        email: Yup.string()
                            .email("Invalid email addess")
                            .required("Email is required"),
                        password: Yup.string()
                            .min(7, "Password must be at least 7 characters long")
                            .required("Password is required"),
                        acceptedTerms: Yup.boolean()
                            .required('You must accept the terms and conditions.')
                            .oneOf([true], 'You must accept the terms and conditions.'),
                    })}
                    onSubmit={(values) => {
                        dispatch(signUpUsernameAndPassword({
                            email: values.email,
                            password: values.password,
                            username: values.username
                        }))
                    }}
                >
                    <Form className={classes.form}>
                        <TextInput label={"Username"} name={"username"} placeholder={"letsHaveFun69"}/>
                        <TextInput label={"Email"} name={"email"} placeholder={"email@example.com"}/>
                        <TextInput label={"Password"} name={"password"} type={"password"} placeholder={"********"}/>
                        <CheckboxInput name={"acceptedTerms"}>I accept the {<strong onClick={() => setModalState(true)}>terms and conditions</strong>}</CheckboxInput>
                        <Button className={classes.button} disabled={userState.loading} color={"primary"}
                                variant={"contained"} type={"submit"}>Sign
                            up</Button>
                    </Form>
                </Formik>
                {userState.errorMessage && <div>{userState.errorMessage}</div>}
                {userState.user && <Navigate to={"/app"}/>}
            </Paper>
            <TCModal open={modalState} handleClose={() => setModalState(false)} />
        </>
    )
}

export default SignupForm;
