import {Form, Formik} from "formik";
import * as Yup from "yup";
import http from "../../config/authorizationInterceptor";
import {Button, makeStyles, Paper, Typography} from "@material-ui/core";
import TextInput from "./components/TextInput";
import CheckboxInput from "./components/CheckboxInput";

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
    return (
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
                    <TextInput label={"Email"} name={"email"} placeholder={"email@example.com"}/>
                    <TextInput label={"Password"} name={"password"} type={"password"} placeholder={"********"}/>
                    <CheckboxInput name={"acceptedTerms"}>I accept the terms and conditions</CheckboxInput>
                    <Button className={classes.button} color={"primary"} variant={"contained"} type={"submit"}>Sign
                        up</Button>
                </Form>
            </Formik>
        </Paper>
    )
}

export default SignupForm;
