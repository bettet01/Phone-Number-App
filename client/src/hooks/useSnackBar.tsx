import {useState} from "react";
import {ColorEnum, SnackbarNotificationState} from "../types/GenericTypes";


const useSnackBar = () => {
    const [snackbar, setSnackState] = useState<SnackbarNotificationState>({
        color: undefined,
        message: null,
        showNotification: false
    });

    const resetSnackBar = () => {
        setSnackState({
            color: undefined,
            message: null,
            showNotification: false
        })
    }

    const updateSnackBar = (color: ColorEnum, message: string, showNotification: boolean) => {
        setSnackState({
            color,
            message,
            showNotification
        })

        setTimeout(() => {
            resetSnackBar()
        }, 3500);
    }

    return {snackbar, resetSnackBar, updateSnackBar}
}

export default useSnackBar;