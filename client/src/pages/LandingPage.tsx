import {Form, Formik} from "formik";
import * as Yup from 'yup';
import TextInput from "../components/forms/TextInput";
import {Button, makeStyles} from "@material-ui/core";
import http from "../config/authorizationInterceptor";

const useStyles = makeStyles((theme) => ({
    form: {
        display: 'flex',
        flexDirection: "column"
    },
}));

const LandingPage = () => {
    const classes = useStyles();
    return (
        <>
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
                        .required("Password is required")
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
                    <Button color={"primary"} variant={"contained"} type={"submit"}>Sign up</Button>
                </Form>
            </Formik>
        </>
    )
}


export default LandingPage;