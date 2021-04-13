import React from 'react';
import {Link, Outlet} from 'react-router-dom';
import {Button, makeStyles} from '@material-ui/core';
import Header from "../components/navigation/Header";
import AppLink from "../components/navigation/NavLink";

const useStyles = makeStyles((theme) => ({
    root: {
        display: "flex"
    }
}));

const UnauthenticatedLayout = () => {
    const classes = useStyles();

    return (
        <>
            <Header>
                <AppLink to={"signup"} text={"Sign Up"} />
                <AppLink to={"login"} text={"Login"} />
            </Header>
            <div className={classes.root}>
                <Outlet/>
            </div>
        </>
    );
};

export default UnauthenticatedLayout;