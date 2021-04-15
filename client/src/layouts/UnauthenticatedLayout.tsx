import React from 'react';
import {Navigate, Outlet} from 'react-router-dom';
import {makeStyles} from '@material-ui/core';
import Header from "../components/navigation/Header";
import AppLink from "../components/navigation/NavLink";
import {UserState} from "../types/UserTypes";
import {useSelector} from "react-redux";
import {RootState} from "../redux/rootReducer";

const useStyles = makeStyles((theme) => ({
    root: {
        display: "flex"
    }
}));

const UnauthenticatedLayout = () => {
    const classes = useStyles();
    const userState: UserState = useSelector((state: RootState) => state.UserReducer);

    return (
        <>
            <Header>
                <AppLink to={"signup"} text={"Sign Up"}/>
                <AppLink to={"login"} text={"Login"}/>
            </Header>
            <div className={classes.root}>
                <Outlet/>
            </div>
            {userState.user && <Navigate to={"/app"}/>}
        </>
    );
};

export default UnauthenticatedLayout;