import React, { useContext, useEffect } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { Box, Typography, Container } from '@material-ui/core';
import { MyButton } from '../../components/Button'
import Header from '../../components/Header/Header'
import HeroBg from '../../images/hero-bg.jpg'
import { GlobalState } from '../../context/GlobalState'
import { Link } from "react-router-dom"


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
    heroTitle: {
        fontSize: '4rem',
        fontWeight: [theme.typography.fontWeightBold],
        [theme.breakpoints.down('sm')]: {
            fontSize: '3rem'
        }
    },
    header: {
        color: '#fff'
    }
}));

const Hero = () => {
    const classes = useStyles()
    const { menuOpen: [menuOpen], color: [, setColor] } = useContext(GlobalState)
    useEffect(() => {
        setColor('#fff')
        return () => {
            setColor('#000')
        }
    }, [])
    return (
        <Box >
            <Box className={classes.heroContainer}>
                <Box className={classes.overlay}>
                    <Header color={{ color: !menuOpen && "#fff" }} />
                    <Container maxWidth="lg" className={classes.hero} >
                        <Box >
                            <Box mb={4}>
                                <Typography className={classes.heroTitle} variant="h2" color="textSecondary" align="center">
                                    Pickle Perfection
                                </Typography>
                            </Box>
                            <Box>
                                <Link to='/shop'>
                                    <MyButton buttonColor="#ffffff" textColor="primary" text="Shop Now" />
                                </Link>
                            </Box>
                        </Box>
                    </Container>
                </Box>
            </Box>
        </Box>
    )

}

export default Hero
