import {
    Button,
    makeStyles,
    Paper,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
} from "@material-ui/core";
import useUsers from "../../hooks/useUsers";
import {Delete, Edit} from "@material-ui/icons";
import {UserDto} from "../../types/UserTypes";


const useStyles = makeStyles({
    table: {
        minWidth: 650,
    },
});

export interface UserTableProps {
    users: UserDto[] | null
}


const UsersTable = ({users}: UserTableProps) => {
    const classes = useStyles();
    return (
        <TableContainer component={Paper}>
            <Table className={classes.table} aria-label="Users Table">
                <TableHead>
                    <TableRow>
                        <TableCell>Username</TableCell>
                        <TableCell>Email</TableCell>
                        <TableCell>Roles</TableCell>
                        <TableCell>Actions</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {users?.map((user) => (
                        <TableRow key={user.id}>
                            <TableCell component='th' scope="row" >{user.username}</TableCell>
                            <TableCell>{user.email}</TableCell>
                            <TableCell>
                                {user.roles.map((role ) => (
                                    <div >{role.name.toUpperCase()}</div>
                                ))}
                            </TableCell>
                            <TableCell>
                                <div>
                                    <Button><Edit /></Button>
                                    <Button><Delete /></Button>
                                </div>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    )
}


export default UsersTable;