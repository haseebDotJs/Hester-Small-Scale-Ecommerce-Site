import React, { useContext } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Box, Typography } from '@material-ui/core';
import { GlobalState } from '../../context/GlobalState'
import Login from '../Login/Login'
import cx from 'classnames'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from "yup";
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';

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
    nameContainer: {
        width: '50%',
        display: 'inline-block'
    },
    inputContainer: {
        display: 'flex',
        alignItems: 'center',
    },
    inputField: {
        boxSizing: 'border-box',
        width: '100%',
        margin: 'auto',
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
        margin: 'auto',
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
    signin: {
        cursor: 'pointer'
    },
    required: {
        fill: 'rgb(245,0,87)',
        width: '7px'
    },
    error: {
        fontSize: '.55rem',
        color: 'rgb(245,0,87)'
    }
}));

const Signup = () => {
    const classes = useStyles();
    const { modalContent: [, setModalContent] } = useContext(GlobalState)

    const schema = Yup.object().shape({
        fname: Yup
            .string()
            .required()
            .max(16, 'Must not be longer than 16 characters'),
        lname: Yup
            .string()
            .required()
            .max(16, 'Must not be longer than 16 characters'),
        email: Yup
            .string()
            .required()
            .matches(/^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/, "Please enter a valid email"),
        password: Yup
            .string()
            .required()
            .min(10, 'Must be atleast 10 characters')
            .max(16, 'Must not be longer than 16 characters')
            .matches(/^(?=.*[a-z])(?=.*[A-Z])/, "Password must contain upper and lower case characters"),
        confirmPassword: Yup
            .string()
            .required('Field is required!')
            .oneOf([Yup.ref('password'), null], 'Passwords do not match')
    })

    const { register, handleSubmit, errors, reset } = useForm({
        resolver: yupResolver(schema)
    })

    const onSubmit = (signupForm) => {
        console.log('signupform', signupForm);
        reset()
    }

    const handleSignin = () => {
        setModalContent(<Login />)
    }
    return (
        <Box className={classes.loginContainer} >
            <Box>
                <Typography className={classes.title} variant="h6" color="textPrimary" align="center">
                    Create Account
                </Typography>
            </Box>
            <Box mt={1}>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <Box style={{ display: 'flex' }}>
                        <Box className={classes.nameContainer}>
                            <Box className={classes.inputContainer}>
                                {errors.fname && errors.fname.type === 'required' && <FiberManualRecordIcon className={classes.required} />}
                                <input className={classes.inputField} type="text" name="fname" placeholder="First Name" ref={register} autoFocus />
                            </Box>
                            {errors.fname && errors.fname.type !== 'required' && <Typography variant="body2" className={classes.error}>{errors.fname.message}</Typography>}
                        </Box>
                        <Box ml={1} className={classes.nameContainer}>
                            <Box className={classes.inputContainer}>
                                {errors.lname && errors.lname.type === 'required' && <FiberManualRecordIcon className={classes.required} />}
                                <input className={classes.inputField} type="text" name="lname" placeholder="Last Name" ref={register} />
                            </Box>
                            {errors.lname && errors.lname.type !== 'required' && <Typography variant="body2" className={classes.error}>{errors.lname.message}</Typography>}
                        </Box>
                    </Box>
                    <Box className={classes.inputContainer}>
                        {errors.email && errors.email.type === 'required' && <FiberManualRecordIcon className={classes.required} />}
                        <input className={classes.inputField} type="text" name="email" placeholder="Email" ref={register} />
                    </Box>
                    {errors.email && errors.email.type !== 'required' && <Typography variant="body2" className={classes.error}>{errors.email.message}</Typography>}

                    <Box className={classes.inputContainer}>
                        {errors.password && errors.password.type === 'required' && <FiberManualRecordIcon className={classes.required} />}
                        <input className={classes.inputField} type="password" name="password" placeholder="Create Password" ref={register} />
                    </Box>
                    {errors.password && errors.password.type !== 'required' && <Typography variant="body2" className={classes.error}>{errors.password.message}</Typography>}

                    <Box className={classes.inputContainer}>
                        {errors.confirmPassword && errors.confirmPassword.type === 'required' && <FiberManualRecordIcon className={classes.required} />}
                        <input className={classes.inputField} type="password" name="confirmPassword" placeholder="Re-type Password" ref={register} />
                    </Box>
                    {errors.confirmPassword && errors.confirmPassword.type !== 'required' && <Typography variant="body2" className={classes.error}>{errors.confirmPassword.message}</Typography>}

                    <Box mt={2}>
                        <button className={classes.button} type="submit">Create Account</button>
                    </Box>

                    <Box mt={1}>
                        <Typography color="textPrimary" align="center" >
                            <span className={classes.account}>Already have an account?</span> <span className={cx(classes.signin, classes.account)} onClick={handleSignin}>Sign in</span>
                        </Typography>
                    </Box>

                </form>
            </Box>
        </Box>
    )
}
export default Signup
