import {useField} from "formik";
import {Checkbox, FormControlLabel, FormHelperText} from "@material-ui/core";

export interface CheckboxInputProps {
    children: any;
    name: string;
}

const CheckboxInput = ({ children, ...props }: CheckboxInputProps) => {
    const [field, meta] = useField({ ...props, type: 'checkbox' });
    return (
        <>
            <FormControlLabel
                control={<Checkbox checked={field.checked} onChange={field.onChange} name={field.name} />}
                label={children}
            />
            {!meta.touched && meta.error ? (
                <FormHelperText>{meta.error}</FormHelperText>
            ) : null}
        </>
    );
};


export default CheckboxInput;