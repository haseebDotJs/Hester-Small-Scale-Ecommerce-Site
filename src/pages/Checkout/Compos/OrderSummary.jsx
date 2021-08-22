import React, { useContext } from 'react'
import { GlobalState } from '../../../context/GlobalState'
import { Box, Paper, Typography, Grid } from '@material-ui/core'
import { makeStyles } from '@material-ui/styles'
import cx from "classnames"

const useStyles = makeStyles((theme) => ({
    imgTitContainer: {
        display: 'flex',
        alignItems: 'flex-start'
    },

    itemImage: {
        width: '70px',
        minWidth: "70px",
        border: '0.2px solid rgba(224,224,224,0.5)'
    },
    title: {
        fontSize: '.8rem',
        textTransform: 'capitalize'
    },
    quantityContainer: {
        width: '80px',
        marginLeft: 'auto',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        border: '0.2px solid rgba(224,224,224,0.5)',
    },
    qty: {
        fontSize: '.65rem',
        color: "gray",
    },
    quantity: {
        fontSize: '.8rem',
        border: 'none',
        textAlign: 'right',
        width: '30px'
    },
    bill: {
        fontSize: '.8rem',
    },
    remove: {
        color: 'gray',
        fontSize: '.7rem',
        cursor: 'pointer',
    },
    subTotal: {
        color: "gray",
        fontSize: '.8rem'
    },
    total: {
        fontSize: '.8rem',
        fontWeight: [theme.typography.fontWeightMedium],
    }
}))

const OrderSummary = () => {
    const classes = useStyles()
    const { items: { items }, delete__item, subTotal, changeItemsQuantity } = useContext(GlobalState)


    return (
        <Paper square className={classes.userData} >
            <Box px={3} py={3}>
                <Box>
                    <Typography variant="h6">
                        Order Summary
                    </Typography>
                </Box>
                <Box mt={2}>
                    {items.length > 0 && items.map((item) => (
                        <Box mb={2} key={item.id}>
                            <Grid container >
                                <Grid item xs={6}>
                                    <Box className={classes.imgTitContainer}>
                                        <Box >
                                            <img className={classes.itemImage} src={item.image} alt="pickle" />
                                        </Box>
                                        <Box ml={1}>
                                            <Typography className={classes.title} >{item.title}</Typography>
                                        </Box>
                                    </Box>
                                </Grid>
                                <Grid item xs={6} align="right">
                                    <Box>
                                        <Typography className={classes.bill}>
                                            ${(item.price * item.quantity).toFixed(2)}
                                        </Typography>
                                    </Box>
                                    <Box className={classes.quantityContainer}>
                                        <Box ml={1}>
                                            <Typography className={classes.qty}>
                                                Qty
                                            </Typography>
                                        </Box>
                                        <Box>
                                            <input className={classes.quantity} type="number" defaultValue={item.quantity} max={item.availibility} onChange={(e) => changeItemsQuantity(e.target.value, item.id)} min={1} />
                                        </Box>
                                    </Box>
                                    <Box>
                                        <Typography className={cx(classes.bill, classes.remove)} onClick={() => delete__item(item)}>
                                            Remove
                                        </Typography>
                                    </Box>
                                </Grid>
                            </Grid>
                        </Box>
                    ))}
                    <Box>
                        <Grid container >
                            <Grid item xs={6}>
                                <Typography className={classes.subTotal}>
                                    Subtotal
                                </Typography>
                                <Typography className={classes.subTotal}>
                                    Tax
                                </Typography>
                                <Typography className={classes.subTotal}>
                                    Shipping
                                </Typography>
                                <Typography className={classes.total}>
                                    Total
                                </Typography>

                            </Grid>
                            <Grid item xs={6} align="right">
                                <Typography className={classes.subTotal}>
                                    ${subTotal}
                                </Typography>
                                <Typography className={classes.subTotal}>
                                    -
                                </Typography>
                                <Typography className={classes.subTotal}>
                                    -
                                </Typography>
                                <Typography className={classes.total}>
                                    ${subTotal}
                                </Typography>
                            </Grid>
                        </Grid>
                    </Box>
                </Box>
            </Box>
        </Paper>
    )
}

export default OrderSummary
