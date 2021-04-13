import {Button, makeStyles, Paper, Typography} from "@material-ui/core";
import {Form, Formik} from "formik";
import * as Yup from "yup";
import http from "../../config/authorizationInterceptor";
import TextInput from "./components/TextInput";


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
                onSubmit={(values, {setSubmitting}) => {
                    http.get("http://localhost:8000/api/numbers").then((res) => {
                        console.log(res);
                    }).catch((err) => {
                        console.log("message " + err)
                    })
                }}
            >
                <Form className={classes.form}>
                    <TextInput label={"Username"} name={"username"} placeholder={"letsHaveFun69"}/>
                    <TextInput label={"Password"} name={"password"} type={"password"} placeholder={"********"}/>
                    <Button className={classes.button} color={"primary"} variant={"contained"} type={"submit"}>Login</Button>
                </Form>
            </Formik>
        </Paper>
    )
}

export default LoginForm;