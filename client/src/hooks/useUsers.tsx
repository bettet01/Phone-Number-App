import {useEffect, useState} from "react";
import {getUsers} from "../service/backendApi";
import {UserDto} from "../types/UserTypes";


const useUsers = () => {
    const [users, setUsers] = useState<UserDto[] | null>(null);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        refreshUsers();
    }, [])

    const refreshUsers = () => {
        getUsers().then((res) => {
            setUsers(res.data.users);
            setError(null);
        }).catch(() => {
            setError("We've encountered an error. Please try again later")
        })
    }

    return {users, error, refreshUsers}
}

export default useUsers;