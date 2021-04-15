import { useField } from "formik";
import {makeStyles, TextField} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    input: {
        margin: 10,
    },
}));

export interface TextInputProps {
    label: string;
    name: string;
    type?: string;
    placeholder: string;
}

const TextInput = ({label, ...props}: TextInputProps) => {
    const classes = useStyles();

    const [field, meta] = useField(props)
    return (
        <>
            <TextField className={classes.input} variant={"outlined"} {...props} label={label} {...field} error={!!(meta.error && meta.touched)} helperText={meta.error} />
        </>
    )
}

export default TextInput;