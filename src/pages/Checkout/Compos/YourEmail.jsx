import React, { useState, useContext } from 'react'
import { Box, Paper, Typography, Grid } from '@material-ui/core'
import { makeStyles } from '@material-ui/styles'
import { useForm } from "react-hook-form";
import { GlobalState } from "../../../context/GlobalState"

const useStyles = makeStyles((theme) => ({
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
    switcher: {
        backgroundColor: "#fff",
        border: "none",
        outline: "none",
        textDecoration: "underline",
        cursor: "pointer",
        fontSize: "inherit",
        padding: 0,
        margin: 0,
        color: 'inherit'
    },
    continue: {
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
    edit: {
        marginLeft: 'auto',
        color: 'gray',
        cursor: 'pointer'
    },
    email: {
        fontSize: '.8rem',
        textOverflow: "ellipsis",
        wordWrap: "break-word"
    }
}))


const YourEmail = () => {
    const classes = useStyles()
    const [switchForm, setSwitchForm] = useState(false)
    const { handleSubmit, register, reset } = useForm();
    const { signUp: [signUp, setSignUp] } = useContext(GlobalState)
    const [email, setEmail] = useState("")

    const onSubmit = (data) => {
        setEmail(data)
        setSignUp(true)
        reset()
    }

    return (
        <Paper square>
            <Box p={3} >
                <Box>
                    <Grid container alignItems="center">
                        <Grid item xs={signUp ? 8 : 12}>
                            <Typography variant="h6">
                                <span style={{ marginRight: '4px', fontSize: 'inherit' }}>1.</span>  Your Email
                            </Typography>
                        </Grid>
                        {
                            signUp &&
                            <Grid item xs={4}>
                                <Typography variant="body1" className={classes.edit} align="right" onClick={() => setSignUp(false)}>
                                    Edit
                                </Typography>
                            </Grid>
                        }
                    </Grid>
                </Box>
                {signUp ?
                    <Box mt={2}>
                        <Typography className={classes.email}>
                            {email.email}
                        </Typography>
                    </Box>
                    :
                    <Box mt={2}>
                        {
                            !switchForm ?
                                < form onSubmit={handleSubmit(onSubmit)}>
                                    <Box >
                                        <input type="email" name="email" className={classes.input} ref={register} placeholder="Email" required />
                                        <Box mt={1}>
                                            <Typography variant="body2" className={classes.info}>
                                                You'll receive receipts and notifications at this email address.
                                                Already have an account? <button type="button" className={classes.switcher} onClick={() => setSwitchForm(true)}>Sign in</button>
                                            </Typography>
                                        </Box>
                                        <Box mt={2} >
                                            <button className={classes.continue} type="submit">
                                                Continue
                                            </button>
                                        </Box>
                                    </Box>
                                </form>
                                :
                                < form onSubmit={handleSubmit(onSubmit)}>
                                    <Box >
                                        <Box>
                                            <input type="email" name="email" className={classes.input} ref={register} placeholder="Email" required />
                                        </Box>
                                        <Box mt={1}>
                                            <input type="password" name="password" className={classes.input} ref={register} placeholder="Password" required />
                                        </Box>
                                        <Box mt={1}>
                                            <Typography variant="body2" className={classes.info}>
                                                Don't have an account? <button type="button" className={classes.switcher} onClick={() => setSwitchForm(false)}>Continue as guest</button>
                                            </Typography>
                                        </Box>
                                        <Box mt={2} >
                                            <button className={classes.continue} type="submit">
                                                Continue
                                            </button>
                                        </Box>
                                    </Box>
                                </form>
                        }
                    </Box>
                }

            </Box>
        </Paper>
    )
}

export default YourEmail
