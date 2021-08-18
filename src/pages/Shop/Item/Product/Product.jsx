import React, { useState, useEffect } from 'react'
import { Box, Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import BreadCrumb from './BreadCrumb'
import SideImages from './Images/SideImages'
import MainImage from './Images/MainImage'
import Details from './Details'

const useStyles = makeStyles((theme) => ({
    mainImageGrid: {
        [theme.breakpoints.down("sm")]: {
            order: -1,
        }
    }
}));

const Product = ({pickle}) => {
    const [image, setImage] = useState(pickle.image)

    useEffect(() => {
        window.scrollTo(0, 0)
        return () => {
            console.log('I will work on component unmount');
            setImage("")
        }
    }, [pickle])


    const classes = useStyles()
    return (
        <Box>
            <Box mb={3}>
                <BreadCrumb />
            </Box>
            <Box>
                <Grid container>
                    <Grid item xs={3} md={1}>
                        <Box my={{ xs: 3, md: false }}>
                            <SideImages pickle={pickle} setImage={setImage} />
                        </Box>
                    </Grid>
                    <Grid item xs={12} md={6} className={classes.mainImageGrid}>
                        <Box mt={{ xs: false, md: 5 }} style={{ display: "flex", justifyContent: 'center' }}>
                            <MainImage image={image} pickle={pickle} />
                        </Box>
                    </Grid>
                    <Grid item xs={12} md={5}>
                        <Box mt={{ xs: false, md: 5 }}>
                            <Details pickle={pickle} />
                        </Box>
                    </Grid>
                </Grid>
            </Box>
        </Box >
    )
}

export default Product
