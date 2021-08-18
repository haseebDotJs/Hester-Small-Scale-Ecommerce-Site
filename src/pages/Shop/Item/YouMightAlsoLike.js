import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { Box, Typography, Grid } from '@material-ui/core';
import { Link } from "react-router-dom"


const useStyles = makeStyles((theme) => ({
    cardContainer: {
        textAlign: "center"
    },
    itemCard: {
        position: "relative",
        "&:hover": {
            "& $hoverImage": {
                opacity: 1
            }
        }
    },
    hoverImage: {
        position: "absolute",
        top: 0,
        right: 0,
        left: 0,
        bottom: 0,
        objectFit: "contain",
        opacity: 0,
        transition: "opacity 1s ease,transform 1s ease"
    }
}));

const YouMightAlsoLike = ({ randomItems }) => {
    const classes = useStyles()

    return (
        <>
            <Box mb={2}>
                <Typography variant="h3" style={{ fontWeight: 500 }}>
                    You Might Also Like
                </Typography>
            </Box>
            <Grid container spacing={2}>
                {randomItems.map(pickle => {
                    const url = pickle.title.replace(/ /g, "-")
                    return (
                        <Grid item xs={12} sm={4} key={pickle.title}>
                            <Box className={classes.cardContainer}>
                                <Link to={`/shop/${url}`}>
                                    <Box className={classes.itemCard}>
                                        {/* <img src={hoverPic.title === pickle.title ? hoverPic.image : pickle.image} alt="pickle" style={{transition: "1s ease-out" }}/> */}
                                        <img src={pickle.image} alt="pickle" style={{ transition: "1s ease-out", }} />
                                        <img className={classes.hoverImage} src={pickle.insideImage} alt="pickle" />
                                    </Box>
                                    <Box mb={1}>
                                        <Typography variant="h6" style={{ textTransform: 'capitalize' }}>
                                            {pickle.title}
                                        </Typography>
                                    </Box>
                                    <Box>
                                        {pickle.sale ?
                                            <Box style={{ display: 'flex', justifyContent: "center" }}>
                                                <Typography variant="body1" color="primary" >
                                                    ${pickle.cutPrice.toFixed(2)}
                                                </Typography>
                                                <Typography variant="body1" style={{ textDecoration: "line-through", marginLeft: 5 }}>
                                                    ${pickle.price.toFixed(2)}
                                                </Typography>
                                            </Box>
                                            :
                                            <Typography variant="body1" >
                                                ${pickle.price.toFixed(2)}
                                            </Typography>
                                        }
                                        {pickle.availibility < 10 && <Typography varaint="body1">Only {pickle.availibility} available</Typography>}
                                        {pickle.sale && <Typography variant="body1" style={{ fontWeight: 700 }} color="primary">SALE</Typography>}
                                        {pickle.soldOut && <Typography variant="h6" style={{ fontWeight: 700 }}>SOLD OUT</Typography>}
                                    </Box>
                                </Link>
                            </Box>
                        </Grid>
                    )
                })}
            </Grid>
        </>
    )

}

export default YouMightAlsoLike
