import {ColorEnum, SnackbarActionEnums} from "../../types/GenericTypes";


export const displaySnackbar = (message: string, color: ColorEnum) => async (dispatch: any) => {
    dispatch({
        type: SnackbarActionEnums.DISPLAY_SNACKBAR,
        payload: {
            message,
            color
        }
    })

    setTimeout(() => {
        dispatch({
            type: SnackbarActionEnums.RESET_SNACKBAR
        })
    }, 3500)
}