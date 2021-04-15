import {colors, createMuiTheme} from '@material-ui/core';
import shadows from './shadows';
import typography from './typography';


declare module "@material-ui/core/styles/createPalette" {
    interface Palette {
        white: Palette['primary'];
        red: Palette['primary'];
    }
    interface PaletteOptions {
        white: PaletteOptions['primary'];
        red: PaletteOptions['primary'];
    }
}

export const lightTheme = createMuiTheme({
        palette: {
            type: 'light',
            primary: {
                main: colors.green[200],
            },
            secondary: {
                main: colors.amber[700]
            },
            red: {
                main: colors.red[500]
            },
            white: {
                main: colors.grey[100]
            }
        },
        shadows,
        typography,
    })
;

export const darkTheme = createMuiTheme({
    palette: {
        type: 'dark',
        primary: {
            main: colors.grey[900]
        },
        secondary: {
            main: colors.teal[500]
        },
        white: {
            main: colors.grey[100]
        },
        red: {
            main: colors.red[500]
        }
    },
    shadows,
    typography
});