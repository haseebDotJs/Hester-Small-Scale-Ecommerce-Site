import { useContext } from 'react'
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'
import { Box, Container, Typography } from '@material-ui/core';
import { PaddedBox } from '../../components/PaddedBox'
import { Link } from "react-router-dom"
import { GlobalState } from '../../context/GlobalState';

const Cart = () => {
    console.log('cart is rendering');
    const { items: { items } } = useContext(GlobalState)
    console.log('cart items', items);
    return (
        <Box>
            <Header />
            <PaddedBox>
                <Container maxWidth="lg">
                    <Box mb={3}>
                        <Typography variant="h6" style={{ textTransform: 'uppercase' }}>
                            Shopping Cart
                        </Typography>
                    </Box>
                    <Box>
                        <Typography variant="body1" style={{ fontWeight: 300 }}>
                            You have nothing in your shopping cart. <Link to="/shop"><Typography component="span" style={{ fontWeight: 300 }}>Continue Shopping</Typography></Link>
                        </Typography>
                    </Box>

                </Container>
            </PaddedBox>
            <Footer />
        </Box >
    )
}

export default Cart
