import React, { useContext } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { Box, Typography, Container } from '@material-ui/core';
import { MyButton } from '../../components/Button'
import Header from '../../components/Header/Header'
import HeroBg from '../../images/hero-bg.jpg'
import { GlobalState } from '../../context/GlobalState'

const useStyles = makeStyles((theme) => ({
    heroContainer: {
        backgroundImage: `url(${HeroBg})`,
        opacity: 1,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        [theme.breakpoints.down('md')]: {
            backgroundPosition: "center"
        }
    },
    overlay: {
        backgroundColor: "rgba(223,124,109,.2)",
        minHeight: '100vh'
    },
    hero: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '85vh',
    },
    header: {
        color: '#fff'
    }
}));

const Hero = () => {
    const classes = useStyles()
    const { menuOpen: [menuOpen] } = useContext(GlobalState)

    return (
        <Box >
            <Box className={classes.heroContainer}>
                <Box className={classes.overlay}>
                    <Header color={{ color: !menuOpen && "#fff" }} />
                    <Container maxWidth="lg" className={classes.hero} >
                        <Box >
                            <Box mb={4}>
                                <Typography variant="h2" color="textSecondary" style={{ fontWeight: 700 }} align="center">
                                    Pickle Perfection
                                </Typography>
                            </Box>
                            <Box>
                                <MyButton buttonColor="#ffffff" textColor="primary" text="Shop Now" link="/shop" />
                            </Box>
                        </Box>
                    </Container>
                </Box>
            </Box>
        </Box>
    )

}

export default Hero
