import React from 'react';
import {useSelector} from "react-redux";
import {RootState} from "../../redux/rootReducer";
import {Navigate} from "react-router-dom";
import {Roles, UserState} from "../../types/UserTypes";


export interface ProtectedRouteProps {
    roles: Roles[];
}

const ProtectedRoute = (props: ProtectedRouteProps) => {
    const userState: UserState = useSelector((state: RootState) => state.UserReducer);

    const checkRoles = (): boolean => {
        let hasRole = false;
        if (userState.user) {
            props.roles.forEach(role => {
                // @ts-ignore
                if (userState.user.roles.includes(role)) {
                    hasRole = true;
                }
            })
        }
        return hasRole;
    }

    const checkLoginStatus = () => {
        if (checkRoles()) {
            return <></>
        } else {
            return <Navigate to={'/login'}/>
        }
    }

    return (
        <>
            {checkLoginStatus()}
        </>
    );
};


export default ProtectedRoute;