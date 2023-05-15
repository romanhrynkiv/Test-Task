import React from "react";
import styles from './AuthButtons.module.css'
import Button from '@mui/material/Button';

import { createTheme, ThemeProvider } from '@mui/material/styles';
    
const smallstyle = {
  'border-top': '1px solid #414e67',
        'margin-left': '25px',
        "margin-right": '25px',
        "width": 'auto',
}

const theme = createTheme({
  palette: {
    primary: {
      // Purple and green play nicely together.
      main: '#E9B109',
    },
    secondary: {
      // This is green.A700 as hex.
      main: '#FFFFFF',
    },
  },
});

const AuthButtons = (props) =>{
    return(
        <ThemeProvider theme={theme}>
            <div className={styles['auth-buttons-container']}>
        {props.show === "both" &&
        <Button  className={styles.signup} size="small" color = 'secondary'>Sign Up</Button>
        }
        <Button  className={styles.login} variant="contained" color="primary">
        Log In
        </Button>
        </div>
        </ThemeProvider>
        
    )
}

export default AuthButtons