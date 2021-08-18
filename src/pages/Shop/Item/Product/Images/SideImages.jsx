import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { Box } from '@material-ui/core';




const useStyles = makeStyles((theme) => ({
    sideImages: {
        margin: "auto",
        width: "75%",
        [theme.breakpoints.down("sm")]: {
            display: 'flex',
            alignItems: 'center',
            width: "100%",
        }
    }
}));

const Item = ({ pickle, setImage }) => {
    const classes = useStyles()

    return (
        <Box className={classes.sideImages} >
            <Box>
                <img src={pickle.image} alt="pickle" style={{ cursor: "pointer" }} onClick={() => setImage(pickle.image)} />
            </Box>
            <Box>
                <img src={pickle.insideImage} alt="pickle inside" style={{ cursor: "pointer" }} onClick={() => setImage(pickle.insideImage)} />
            </Box>
        </Box>
    )
}

export default Item

