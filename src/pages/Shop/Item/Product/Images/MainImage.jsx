import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { Box, } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    mainImage: {
        margin: "auto",
        width: "100%",
    }
}));


const MainImage = ({ pickle,image }) => {
    const classes = useStyles()

    return (
        <Box className={classes.mainImage}>
            <img src={image ? image : pickle.image} alt="pickle main" style={{ width: "100%" }} />
        </Box>
    )
}

export default MainImage
