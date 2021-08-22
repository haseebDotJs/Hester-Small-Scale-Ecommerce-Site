import React from 'react'
import { Container, Box,Typography, Grid } from '@material-ui/core'
import { makeStyles } from '@material-ui/styles'
import { Link } from "react-router-dom"
import YourEmail from './Compos/YourEmail'
import OrderSummary from './Compos/OrderSummary'
import Shipping from './Compos/Shipping'

const useStyles = makeStyles((theme) => ({
    body: {
        minHeight: '100vh',
        backgroundColor: "whitesmoke"
    },
    header: {
        background: "#fff",
        padding: '15px 0',
        borderBottom: "1px solid rgba(91,91,91,0.1)"
    },
    logo: {
        fontSize: '1.25rem',
        fontWeight: [theme.typography.fontWeightMedium],
        cursor: 'pointer',
        [theme.breakpoints.down('sm')]: {
            fontSize: '1rem'
        }
    },


}))

const Checkout = () => {
    const classes = useStyles()

    return (
        <Box className={classes.body}>
            <Box className={classes.header}>
                <Container maxWidth="md">
                    <Box>
                        <Link to="/">
                            <Typography className={classes.logo}>
                                Hester
                            </Typography>
                        </Link>
                    </Box>
                </Container>
            </Box>
            <Box className={classes.body} >
                <Container maxWidth="md">
                    <Box mt={5} >
                        <Box>
                            <Grid container spacing={4}>
                                <Grid item xs={12} sm={6}>
                                    <Box>
                                        <YourEmail />
                                    </Box>
                                    <Box mt={2}>
                                        <Shipping />
                                    </Box>
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <OrderSummary />
                                </Grid>
                            </Grid>
                        </Box>
                    </Box>
                </Container>
            </Box>

        </Box >
    )
}

export default Checkout
