import React from 'react';
import {Outlet} from 'react-router-dom';
import {makeStyles} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    root: {
        display: "flex"
    }
}));

const UnauthenticatedLayout = () => {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Outlet/>
        </div>
    );
};

export default UnauthenticatedLayout;