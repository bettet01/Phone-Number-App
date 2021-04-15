import React from 'react';
import {useSelector} from "react-redux";
import {RootState} from "../../redux/rootReducer";
import {Roles, UserState} from "../../types/UserTypes";


export interface ProtectedLinkProps {
    roles: Roles[];
    children: any;
}

const ProtectedLink = (props: ProtectedLinkProps) => {
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
            return (
                <>
                    {props.children}
                </>
            )
        } else {
            return <></>
        }
    }

    return (
        <>
            {checkLoginStatus()}
        </>
    );
};


export default ProtectedLink;