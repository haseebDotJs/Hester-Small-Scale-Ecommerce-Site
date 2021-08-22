import React, { useContext } from 'react'
import { Box, Paper, Typography, Grid } from '@material-ui/core'
import { makeStyles } from '@material-ui/styles'
import { useForm } from "react-hook-form";
import { GlobalState } from '../../../context/GlobalState'

const useStyles = makeStyles((theme) => ({
    nameContainer: {
        width: '50%',
        display: 'inline-block'
    },
    input: {
        padding: theme.spacing(1, 2),
        width: "100%",
        boxSizing: "border-box",
        border: "1px solid rgb(224,224,224)",
        placeholder: {
            color: "red"
        },
        "&:focus": {
            border: "1px solid black",
            color: "black"
        },
    },
    info: {
        fontSize: '.7rem',
        color: 'gray'
    },
    field: {
        marginTop: '.5rem'
    },
    shippingOptions: {
        fontWeight: [theme.typography.fontWeightMedium]
    },
    placeOrder: {
        width: '100%',
        outline: 0,
        border: 'none',
        textAlign: 'center',
        boxShadow: 'none',
        cursor: 'pointer',
        borderRadius: 0,
        padding: "10px 40px",
        backgroundColor: 'rgb(39,39,39)',
        color: '#fff',
    },
}))

const Shipping = () => {
    const classes = useStyles()
    const { handleSubmit, register,reset } = useForm();
    const { signUp: [signUp] } = useContext(GlobalState)

    const onSubmit = () => {
       reset()
    }


    return (
        <Paper square style={{ opacity: signUp ? 1 : 0.9 }} disabled>
            <Box p={3}>
                <Box>
                    <Typography variant="h6" style={{ color: signUp ? 'black' : 'gray' }}>
                        <span style={{ marginRight: '4px', fontSize: 'inherit', }}>2.</span>  Shipping
                    </Typography>
                </Box>
                {signUp &&
                    <Box mt={2}>
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <Box >
                                <Box style={{ display: 'flex' }}>
                                    <Box className={classes.nameContainer}>
                                        <Box >
                                            <input className={classes.input} type="text" name="fname" placeholder="First Name" ref={register} required />
                                        </Box>
                                    </Box>
                                    <Box ml={1} className={classes.nameContainer}>
                                        <Box >
                                            <input className={classes.input} type="text" name="lname" placeholder="Last Name" ref={register} required />
                                        </Box>
                                    </Box>
                                </Box>
                                <Box className={classes.field}>
                                    <input type="text" name="address_1" className={classes.input} ref={register} placeholder="Address 1" required />
                                </Box>
                                <Box className={classes.field}>
                                    <input type="text" name="address_2" className={classes.input} ref={register} placeholder="Address 2" required />
                                </Box>
                                <Box className={classes.field}>
                                    <select className={classes.input} name="Country" ref={register}>
                                        <option value="Pakistan">Pakistan</option>
                                        <option value="India">India</option>
                                        <option value="United States">United States</option>
                                        <option value="Canada">Canada</option>
                                    </select>
                                </Box>
                                <Box className={classes.field}>
                                    <Grid container spacing={1}>
                                        <Grid item xs={4}>
                                            <input type="text" name="zip_code" className={classes.input} ref={register} placeholder="Zip Code" required />
                                        </Grid>
                                        <Grid item xs={4}>
                                            <input type="text" name="city" className={classes.input} ref={register} placeholder="City" required />
                                        </Grid>
                                        <Grid item xs={4}>
                                            <select className={classes.input} name="state" ref={register}>
                                                <option value="SD">SD</option>
                                                <option value="KPK">KPK</option>
                                                <option value="BAL">BAL</option>
                                                <option value="PUN">PUN</option>
                                            </select>
                                        </Grid>
                                    </Grid>
                                </Box>
                                <Box className={classes.field}>
                                    <input type="text" name="phone_number" className={classes.input} ref={register} placeholder="Phone Number" required />
                                </Box>
                                {/* <Box mt={3}>
                                    <Box>
                                        <Typography className={classes.shippingOptions} variant="body1" >
                                            Shipping Options
                                        </Typography>
                                    </Box>
                                    <Box mt={1}>
                                        <Typography variant="body2" className={classes.info}>
                                            You cannot continue checkout because there are no shipping options available.
                                        </Typography>
                                    </Box>
                                </Box> */}
                                <Box mt={2} >
                                    <button className={classes.placeOrder} type="submit">
                                        Place Order
                                    </button>
                                </Box>
                            </Box>
                        </form>
                    </Box>
                }
            </Box>
        </Paper>
    )
}

export default Shipping
