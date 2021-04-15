import React from 'react';
import {Outlet} from 'react-router-dom';
import {makeStyles} from '@material-ui/core';
import Header from "../components/navigation/Header";
import AppLink from "../components/navigation/NavLink";
import ProtectedRoute from "../components/navigation/ProtectedRoute";
import {Roles} from "../types/UserTypes";
import ProtectedLink from "../components/navigation/ProtectedLink";

const useStyles = makeStyles((theme) => ({
    root: {
        display: "flex",
        minHeight: '80vh'
    }
}));

const AuthenticatedLayout = () => {
    const classes = useStyles();

    return (
        <>
            <ProtectedRoute roles={[Roles.ROLE_USER]} />
            <Header>
                <AppLink to={"/"} text={"Phone Numbers"}/>
                <ProtectedLink roles={[Roles.ROLE_ADMIN]} >
                    <AppLink to={"/app/users"} text={"Users"}/>
                </ProtectedLink>
            </Header>
            <div className={classes.root}>
                <Outlet/>
            </div>
        </>
    );
};

export default AuthenticatedLayout;