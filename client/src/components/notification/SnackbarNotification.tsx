import React from "react";
import {Snackbar} from "@material-ui/core";
import {Alert} from "@material-ui/lab";
import {ColorEnum} from "../../types/GenericTypes";

export interface SnackbarNotificationProps {
    showNotification: boolean;
    message: string | null;
    color: ColorEnum | undefined;
}

const SnackbarNotification = ({showNotification, message, color}: SnackbarNotificationProps) => {
    return (
        <Snackbar
            id="snackbar"
            open={showNotification}

        >
            <Alert id="alertBtn" icon={false} color={color}>
                {message}
            </Alert>
        </Snackbar>
    )
}

export default SnackbarNotification;