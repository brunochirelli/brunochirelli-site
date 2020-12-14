import { createMuiTheme } from '@material-ui/core';
import { lightGreen } from '@material-ui/core/colors';

const theme = createMuiTheme({
    palette: {
        primary: lightGreen,
        secondary: {
            main: '#16282b',
            light: '#3d5054',
            dark: '#16282b',
        },
    },
    typography: {
        h2: {
            fontFamily: 'Montserrat, sans-serif',
            fontWeight: 500,
        },
        h4: {
            fontFamily: 'Montserrat, sans-serif',
            fontWeight: 700,
        },
    },
});

export default theme;
