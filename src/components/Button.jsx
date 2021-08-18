import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { Box, Typography } from '@material-ui/core';
import { Link } from "react-router-dom"

const useStyles = makeStyles((theme) => ({
    shopNowButton: {
        outline: 0,
        border: 'none',
        textAlign: 'center',
        boxShadow: 'none',
        margin: 'auto',
        cursor: "pointer",
        borderRadius: 0,
        "&:hover": {
            opacity: .85,
            boxShadow: 'none',
        }
    }
}));

export const MyButton = ({ type, text, link, buttonColor, textColor, display, justifyContent, fontWeight,padding,onClick }) => {
    const classes = useStyles(buttonColor)
    return (
        <Box style={{ display: display ? display : 'flex', justifyContent: justifyContent ? justifyContent : "center" }}>
            <Link to={link ? link : ""}>
                <button type={type ? type : "button"} style={{ backgroundColor: buttonColor, width: "100%" ,padding: padding ? padding : "25px 40px" }} className={classes.shopNowButton} onClick={onClick && onClick} >
                    <Typography variant="body1" color={textColor} style={{ fontWeight: fontWeight ? fontWeight : 600 }}>
                        {text}
                    </Typography>
                </button>
            </Link>
        </Box>

    )

}
export const MySimpleButton = ({ type,  text,buttonColor, textColor, display, justifyContent, fontWeight, padding }) => {
    const classes = useStyles(buttonColor)
    return (
        <Box style={{ display: display ? display : 'flex', justifyContent: justifyContent ? justifyContent : "center" }}>
            <button type={type ? type : "button"} style={{ backgroundColor: buttonColor ? buttonColor : "rgb(223,124,109)", padding: padding ? padding : "25px 40px" }} className={classes.shopNowButton} >
                <Typography variant="body1" color={textColor} style={{ fontWeight: fontWeight ? fontWeight : 100 }}>
                    {text}
                </Typography>
            </button>
        </Box>

    )

}

