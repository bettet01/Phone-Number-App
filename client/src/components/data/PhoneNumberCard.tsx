import {PhoneNumber} from "../../types/PhoneNumberTypes";
import {Button, Card, CardActions, CardContent, makeStyles, Typography} from "@material-ui/core";
import {Delete, Edit} from "@material-ui/icons";


export interface PhoneNumberCardProps {
    phoneNumber: PhoneNumber;
}


const useStyles = makeStyles({
    root: {
        minWidth: 275,
        margin: 15,
    },
    bullet: {
        display: 'inline-block',
        margin: '0 2px',
        transform: 'scale(0.8)',
    },
    title: {
        fontSize: 22,
        marginBottom: 20,
    },
    pos: {
        marginBottom: 12,
    },
    buttonContainer: {
        display: 'flex',
        justifyContent: "center",
    }
});

const PhoneNumberCard = (props: PhoneNumberCardProps) => {
    const classes = useStyles();
    return(
        <Card className={classes.root}>
            <CardContent>
                <Typography className={classes.title} color="textSecondary" gutterBottom>
                    {props.phoneNumber.name}
                </Typography>
                <Typography className={classes.pos} variant="h5" component="h2">
                    {props.phoneNumber.number}
                </Typography>
                <Typography className={classes.pos} variant="h5" component="h2">
                    {props.phoneNumber.description}
                </Typography>
            </CardContent>
            <CardActions className={classes.buttonContainer}>
                <Button size="small"><Edit color={'action'} /></Button>
                <Button size="small"><Delete color={"error"} /></Button>
            </CardActions>
        </Card>
    )
}


export default PhoneNumberCard;