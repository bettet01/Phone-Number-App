
export interface Action {
    type: string;
    payload?: any;
}

export enum ColorEnum {
    SUCCESS = "success",
    INFO = "info",
    ERROR = "error",
}

export enum SnackbarActionEnums {
    DISPLAY_SNACKBAR = "DISPLAY_SNACKBAR",
    RESET_SNACKBAR = "RESET_SNACKBAR",
}

export interface SnackbarNotificationState {
    color: ColorEnum | undefined;
    message: string | null;
    showNotification: boolean;
}

export interface SnackbarNotificationUpdate {
    color: ColorEnum;
    message: string;
}

export interface ErrorMessage {
    error: string;
    message: string;
}
