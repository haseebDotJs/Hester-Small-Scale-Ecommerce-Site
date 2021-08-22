import { useContext } from 'react'
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'
import { Box, Container, Typography } from '@material-ui/core';
import { PaddedBox } from '../../components/PaddedBox'
import { Link } from "react-router-dom"
import { GlobalState } from '../../context/GlobalState';
import BasicTable from './Table/ItemChart'
import { makeStyles } from "@material-ui/core/styles"


const useStyles = makeStyles(() => ({
    checkOutContainer: {
        display: 'flex',
        justifyContent: 'flex-end'
    },
    checkOut: {
        outline: 0,
        border: 'none',
        textAlign: 'center',
        boxShadow: 'none',
        cursor: 'pointer',
        // marginLeft: 'auto',
        borderRadius: 0,
        padding: "10px 40px",
        backgroundColor: 'rgb(39,39,39)',
        color: '#fff',
        "&:hover": {
            opacity: .85,
            boxShadow: 'none',
        },

    }
}))
const Cart = () => {
    const classes = useStyles();
    const { items: { items } } = useContext(GlobalState)

    return (
        <Box style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
            <Header />
            <PaddedBox>
                <Container maxWidth="lg">
                    <Box mb={3}>
                        <Typography variant="h6" style={{ textTransform: 'uppercase' }}>
                            Shopping Cart
                        </Typography>
                    </Box>
                    <Box>
                        {
                            items.length < 1 ?
                                <Typography variant="body1" style={{ fontWeight: 300 }}>
                                    You have nothing in your shopping cart. <Link to="/shop"><Typography component="span" style={{ fontWeight: 300 }}>Continue Shopping</Typography></Link>
                                </Typography>
                                : <Box>
                                    <BasicTable />
                                    <Box className={classes.checkOutContainer} mt={5}>
                                        <Link to="/checkout">
                                            <button className={classes.checkOut}>
                                                Checkout
                                            </button>
                                        </Link>
                                    </Box>
                                </Box>
                        }
                    </Box>
                </Container>
            </PaddedBox>
            <Box style={{ marginTop: 'auto' }}>
                <Footer />
            </Box>
        </Box >
    )
}

export default Cart
