import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { Box, Typography } from '@material-ui/core';

const useStyles = makeStyles(() => ({
    button: {
        outline: 0,
        border: 'none',
        textAlign: 'center',
        boxShadow: 'none',
        margin: 'auto',
        borderRadius: 0,
        "&:hover": {
            opacity: .85,
            boxShadow: 'none',
        }
    }
}));

export const MyButton = ({ type, text, buttonColor, textColor, display, justifyContent, fontWeight, padding, onClick, width, opacity, cursor, disabled }) => {
    const classes = useStyles()
    return (
        <Box style={{ display: display ? display : 'flex', justifyContent: justifyContent ? justifyContent : "center" }}>
            <button type={type ? type : "button"} style={{ backgroundColor: buttonColor, width: "100%", maxWidth: width ? width : "180px", padding: padding ? padding : "25px 40px", opacity: opacity ? opacity : 1, cursor: cursor ? cursor : 'pointer' }} className={classes.button} onClick={onClick && onClick} disabled={disabled && true} >
                <Typography variant="body1" color={textColor} style={{ fontWeight: fontWeight ? fontWeight : 600 }}>
                    {text}
                </Typography>
            </button>
        </Box>

    )

}
export const MySimpleButton = ({ type, text, buttonColor, textColor, display, justifyContent, fontWeight, padding }) => {
    const classes = useStyles()
    return (
        <Box style={{ display: display ? display : 'flex', justifyContent: justifyContent ? justifyContent : "center" }}>
            <button type={type ? type : "button"} style={{ backgroundColor: buttonColor ? buttonColor : "rgb(223,124,109)", padding: padding ? padding : "25px 40px" }} className={classes.button} >
                <Typography variant="body1" color={textColor} style={{ fontWeight: fontWeight ? fontWeight : 100 }}>
                    {text}
                </Typography>
            </button>
        </Box>

    )

}

