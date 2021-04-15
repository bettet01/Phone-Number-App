import {Button, colors, makeStyles} from "@material-ui/core";
import NavLink from "./NavLink";
import TCModal from "../modals/T&CModal";
import {useState} from "react";

const useStyles = makeStyles((theme) => ({
    container: {
        "& *": {
            marginTop: 3,
            marginLeft: 10
        },
        backgroundColor: colors.grey[400],
        minHeight: '150px',
        display: 'flex',
        flexDirection: 'column',
        [theme.breakpoints.down(750)]: {
            width: "100vw",
            justifyContent: 'center',
            alignItems: 'center'
        }
    },
    button: {
        marginLeft: "-1px",
        maxWidth: 250
    }
}));

const Footer = () => {
    const classes = useStyles();
    const [modalState, setModalState] = useState(false);
    return (
        <div className={classes.container}>
            <NavLink to={"/"} text={"Home"}/>
            <NavLink to={"/about"} text={"About"}/>
            <Button className={classes.button} onClick={() => setModalState(true)}>Terms and Conditions</Button>
            <TCModal open={modalState} handleClose={() => setModalState(false)} />
        </div>
    )
}


export default Footer;