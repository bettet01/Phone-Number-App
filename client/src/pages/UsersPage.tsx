import ProtectedRoute from "../components/navigation/ProtectedRoute";
import {Roles} from "../types/UserTypes";
import UsersTable from "../components/data/UsersTable";
import useUsers from "../hooks/useUsers";
import {Button, makeStyles, Typography} from "@material-ui/core";
import {Refresh} from "@material-ui/icons";


const useStyles = makeStyles({
    container: {
        display: 'flex',
        flexDirection: 'column',
        width: '100vw'
    },
    headerContainer: {
        display: 'flex',
        justifyContent: 'space-between',
        "& >*": {
            margin: 20
        }
    },
});


const UsersPage = () => {
    const classes = useStyles();
    const {users, refreshUsers, error} = useUsers();
    return (
        <div className={classes.container}>
            <ProtectedRoute roles={[Roles.ROLE_ADMIN]}/>
            <div className={classes.headerContainer}>
                <Typography variant={'h3'}>Users</Typography>
                <Button variant={'contained'}><Refresh onClick={() => refreshUsers()}/></Button>
            </div>
            <UsersTable users={users}/>
            {error && <div>{error}</div>}
        </div>
    )
}

export default UsersPage;