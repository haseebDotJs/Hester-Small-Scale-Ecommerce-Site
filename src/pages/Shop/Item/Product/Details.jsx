import React, { useState, useContext } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { Box, Typography } from '@material-ui/core';
import { MyButton, MySimpleButton } from '../../../../components/Button'
import { useForm } from "react-hook-form";
import { GlobalState } from '../../../../context/GlobalState'

const useStyles = makeStyles((theme) => ({
    description: {
        fontWeight: 300,
        lineHeight: 1.75
    },
    quantity: {
        width: '120px',
        padding: theme.spacing(2, 2),
        marginTop: theme.spacing(1)
    },

    getNotified: {
        display: "flex",
        justifyContent: 'space-between',
        alignItems: 'center',
        [theme.breakpoints.down("xs")]: {
            alignItems: "flex-start",
            justifyContent: "flex-start",
            flexDirection: 'column',
        }
    },
    getNotifiedEmail: {
        padding: theme.spacing(3, 2),
        flexGrow: 1,
        boxSizing: "border-box",
        border: "1px solid rgb(224,224,224)",
        "&:focus": {
            border: "1px solid black",
            color: "black"
        },
        [theme.breakpoints.down("xs")]: {
            width: "100%",
        }
    },

    getNotifiedText: {
        fontWeight: 300,
        lineHeight: 1.75
    },

}));

const Details = ({ pickle }) => {
    const classes = useStyles()
    const [quantity, setQuantity] = useState(1)
    const [signup, setSignup] = useState(false)
    const { handleSubmit, register } = useForm();
    const { add__item } = useContext(GlobalState)

    const onSubmit = async () => {
        console.log("form is submitting");
        setSignup(true)
    }

    return (
        <Box >
            <Box >
                <Typography variant="h3" style={{ textTransform: 'capitalize', fontWeight: 500 }}>
                    {pickle.title}
                </Typography>
            </Box>
            <Box my={3}>
                {pickle.sale ?
                    <Box style={{ display: 'flex' }}>
                        <Typography variant="h6" color="primary" >
                            ${pickle.cutPrice.toFixed(2)}
                        </Typography>
                        <Typography variant="h6" style={{ textDecoration: "line-through", marginLeft: 5 }}>
                            ${pickle.price.toFixed(2)}
                        </Typography>
                    </Box>
                    :
                    <Typography variant="h6" >
                        ${pickle.price.toFixed(2)}
                    </Typography>
                }
            </Box>
            {pickle.availibility < 10 && <Box mb={3}><Typography varaint="body1" color="primary" style={{ fontSize: "14px" }}>Only {pickle.availibility} available</Typography></Box>}
            {pickle.sale && <Box mb={3}><Typography variant="body1" style={{ fontWeight: 700 }} color="primary">SALE</Typography></Box>}
            {pickle.soldOut && <Box mb={3}><Typography variant="h6" style={{ fontWeight: 700 }}>SOLD OUT</Typography></Box>}
            <Box>
                <Typography variant="body1" className={classes.description}>
                    {pickle.description}
                </Typography>
            </Box>

            {pickle.soldOut ?
                <Box mt={4}>
                    <Box mb={2}>
                        <Typography className={classes.getNotifiedText} variant="body1">Get notified by email when this product is back in stock.</Typography>
                    </Box>
                    {
                        signup
                            ?
                            <MyButton buttonColor="rgb(242,242,242)" textColor="textPrimary" fontWeight="400" text="Signed Up!" display="block" />
                            :
                            <form onSubmit={handleSubmit(onSubmit)}>
                                <Box className={classes.getNotified}>
                                    <input type="email" className={classes.getNotifiedEmail} ref={register} placeholder="Email Address" required />
                                    <Box mt={{ xs: 2, sm: false }} ml={{ xs: false, sm: 1 }} >
                                        <MySimpleButton buttonColor="rgb(223,124,109)" textColor="textSecondary" text="Sign Up" type="submit" justifyContent="flex-start" padding="20px 40px" />
                                    </Box>
                                </Box>
                            </form>
                    }
                </Box>
                : <Box>
                    <Box mt={5} mb={3}>
                        <Typography variant="body1">
                            Quantity:
                        </Typography>
                        <input type="number" className={classes.quantity} value={quantity} onChange={(e) => setQuantity(e.target.value)} min={1} />
                    </Box>
                    <Box>
                        <MyButton buttonColor="rgb(223,124,109)" textColor="textSecondary" text="Add To Cart" display="block" padding="20px 40px" onClick={() => add__item} />
                    </Box>
                </Box>
            }
        </Box>
    )
}

export default Details
