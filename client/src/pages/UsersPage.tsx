import ProtectedRoute from "../components/navigation/ProtectedRoute";
import {Roles} from "../types/UserTypes";

// TODO: create users table to view users
const UsersPage = () => {
    return(
        <>
            <ProtectedRoute roles={[Roles.ROLE_ADMIN]} />
            I am the users page
        </>
    )
}

export default UsersPage;