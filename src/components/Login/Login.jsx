import React, { useContext } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Box, Typography } from '@material-ui/core';
import { useForm } from 'react-hook-form'
import { GlobalState } from '../../context/GlobalState'
import Signup from '../Signup/Signup'
import cx from "classnames"

const useStyles = makeStyles((theme) => ({
    loginContainer: {
        width: '100%',
        backgroundColor: 'white',
        padding: theme.spacing(6, 5),
        borderRadius: "5px",
        [theme.breakpoints.down("sm")]: {
            width: 'auto',
            padding: theme.spacing(4, 4),
        }
    },
    title: {
        fontSize: '1.35rem'
    },
    inputField: {
        boxSizing: 'border-box',
        width: '100%',
        padding: '14px 7px',
        border: "2.5px solid transparent",
        borderBottom: '2.5px solid rgba(224,224,224,0.6)',
        fontSize: '.75rem',
        "&:focus": {
            border: "2.5px solid #5b5b5b",
            backgroundColor: 'rgba(224,224,224,0.3)'
        }
    },
    button: {
        width: '100%',
        border: 'none',
        backgroundColor: '#3d3d3d',
        color: 'white',
        padding: '10px',
        fontSize: '.75rem',
        cursor: 'pointer'
    },
    account: {
        fontSize: '.75rem',
    },
    login: {
        cursor: 'pointer'
    }
}));

const Login = () => {
    const classes = useStyles();
    const { register, handleSubmit, reset } = useForm({})
    const { modalContent: [, setModalContent] } = useContext(GlobalState)

    const onSubmit = (loginForm) => {
        reset()
    }
    const handleCreateAccount = () => {
        console.log('i am setting modal content');
        setModalContent(<Signup />)
    }
    return (
        <Box className={classes.loginContainer} >
            <Box>
                <Typography className={classes.title} variant="h6" color="textPrimary" align="center">
                    Welcome to Hester
                </Typography>
            </Box>
            <Box mt={1}>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <input className={classes.inputField} type="email" name="email" placeholder="Email" ref={register} required autoFocus />
                    <input className={classes.inputField} type="password" name="password" placeholder="Password" ref={register} required />
                    <Box mt={2}>
                        <button className={classes.button} type="submit">Login</button>
                    </Box>
                    <Box mt={1}>
                        <Typography color="textPrimary" align="center" >
                            <span className={classes.account}>Don't have an account?</span> <span className={cx(classes.account, classes.login)} onClick={handleCreateAccount}>Create account</span>
                        </Typography>
                    </Box>

                </form>
            </Box>
        </Box>
    )
}
export default Login
