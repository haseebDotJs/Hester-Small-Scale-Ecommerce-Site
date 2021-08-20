import { useContext, useState } from 'react'
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'
import { Box, Container, Typography } from '@material-ui/core';
import { PaddedBox } from '../../components/PaddedBox'
import { Link } from "react-router-dom"
import { GlobalState } from '../../context/GlobalState';
import BasicTable from './Table/Table2'

const Cart = () => {
    console.log('cart is rendering');
    const { items: { items }, delete__item, update__item } = useContext(GlobalState)
    const [quantity, setQuantity] = useState([])
    console.log('cart items', items);
    // create a feature in reducer to update the items
    const changeItemsQuantity = (newQuantity, itemId) => {
        console.log('new quantity is: ', newQuantity);
        const extractItem = items.filter(item => item.id === itemId)
        const itemWithNewQuantity = [{ ...extractItem[0], quantity: newQuantity }]
        update__item(itemWithNewQuantity);
    }

    const theadData = ["item", "quantity", "Price"];

    const tbodyData = [
        {
            id: "1",
            items: ["John", "john@email.com", "01/01/2021"]
        },
        {
            id: "2",
            items: ["Sally", "sally@email.com", "12/24/2020"]
        },
        {
            id: "3",
            items: ["Maria", "maria@email.com", "12/01/2020"]
        },
    ]

    return (
        <Box style={{display: 'flex', flexDirection: 'column',minHeight: '100vh'}}>
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
                                </Box>
                        }
                    </Box>
                </Container>
            </PaddedBox>
            <Box style={{marginTop: 'auto'}}>
                <Footer />
            </Box>
        </Box >
    )
}

export default Cart
