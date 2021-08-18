import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
    palette: {
        primary: {
            main: 'rgb(223,124,109)'
        },
        text: {
            secondary: 'rgb(255,255,255)',
        },
    },
    typography: {
        fontFamily: [
            'poppins',
            'sans-serif'
        ].join(','),
        h4: {
            fontSize: {
                xs: '4rem',
                sm: '3rem'
            }
        }
    }
});
export default theme