import React,{useEffect} from 'react'
// import { GlobalState } from '../../context/GlobalState'
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'
import { makeStyles } from '@material-ui/core/styles';
import { Box, Typography, Container, Grid } from '@material-ui/core';
// import { MyButton } from './Button'
import { Api } from './Api'
import { Link } from "react-router-dom"
import { PaddedBox } from '../../components/PaddedBox';

const useStyles = makeStyles(() => ({
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

const Shop = () => {
    const classes = useStyles()
    console.log('shop is rendering');
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    return (
        <Box>
            <Header />
            <PaddedBox >
                {/* <Box mt={{ xs: false, md: 8 }} mb={6}> */}
                <Container maxWidth="lg">
                    <Grid container spacing={2}>
                        {Api.map((pickle) => {
                            const url = pickle.title.replace(/ /g, "-")
                            return (
                                <Grid item xs={12} sm={6} md={4} key={Math.random() * 999999}>
                                    <Box className={classes.cardContainer}>
                                        <Link to={url}>
                                            <Box className={classes.itemCard}>
                                                {/* <img src={hoverPic.title === pickle.title ? hoverPic.image : pickle.image} alt="pickle" style={{transition: "1s ease-out" }}/> */}
                                                <img src={pickle.image} alt="pickle" style={{ transition: "1s ease-out" }} />
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
                </Container>
            </PaddedBox>
            <Footer />
        </Box >
    )
}

export default Shop
