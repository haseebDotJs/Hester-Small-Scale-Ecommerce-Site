import './Header.css'
import React, { useState, useEffect, useMemo, useContext } from 'react';
import { GlobalState } from '../../context/GlobalState'
import { useTheme } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { makeStyles } from '@material-ui/core/styles';
import { AppBar, Container, Box, Grid } from '@material-ui/core';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';
import Badge from '@material-ui/core/Badge';
import { Link, useLocation } from 'react-router-dom'
import Modal from '../Modal/Modal'
import Login from '../Login/Login'
import NavigationOverlay from './NavigationOverlay'
import Hamburger from './Hamburger'
import cx from 'classnames'

const useStyles = makeStyles((theme) => ({
    headerContainer: {
        position: 'relative',
        width: '100%',
        zIndex: 1,
        padding: theme.spacing(3, 0),
        color: ({ color }) => color ? color : "#000",
    },
    box1: {
        display: 'flex',
        justifyContent: 'flex-start',
        alignItems: 'center'
    },
    title: {
        fontWeight: 300,
        marginRight: theme.spacing(4),
        cursor: 'pointer',
        textTransform: 'capitalize',
        [theme.breakpoints.down('sm')]: {
            color: '#000',
            marginRight: 0
        }
    },
    box2: {
        display: 'flex',
        justifyContent: 'center',
        textAlign: 'center',
        alignItems: 'flex-end',
    },
    logo: {
        fontSize: '2.5rem',
        fontWeight: '600',
        cursor: 'pointer',
        [theme.breakpoints.down('sm')]: {
            fontSize: '1.75rem'
        }
    },

    box3: {
        display: 'flex',
        justifyContent: 'flex-end',
        alignItems: 'center'
    },
    title2: {
        fontWeight: 300,
        cursor: "pointer"
    },
    cartIcon: {
        fontWeight: "thin",
        cursor: "pointer"
    },
    mobile: {
        [theme.breakpoints.up('md')]: {
            display: 'none'
        }
    },
    desktop: {
        [theme.breakpoints.down('sm')]: {
            display: 'none'
        }
    }
}));

const Header = ({ color }) => {
    const classes = useStyles(color);
    const initialState = useMemo(() => ({ shop: false, ourStory: false, blog: false }), [])
    const [active, setActive] = useState(initialState)
    const { pathname } = useLocation()
    const { modal: [showModal, setShowModal], modalContent: [, setModalContent], menuOpen: [menuOpen, setMenuOpen] } = useContext(GlobalState)
    const path = pathname.replace(/\//, "")

    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.down('sm'));

    const menuItems = [{ item: "shop", active: active.shop }, { item: "our story", active: active.ourStory }, { item: "blog", active: active.blog }]

    // const box1 = useRef()
    // const box3 = useRef()


    useEffect(() => {
        if (path.includes('shop')) {
            setActive(prev => ({ ...prev, shop: true }))
        }
        else if (path.includes('our-story')) {
            setActive(prev => ({ ...prev, ourStory: true }))
        }
        else if (path.includes('blog')) {
            setActive(prev => ({ ...prev, blog: true }))
        }

        //To make sure if a person opens hamburger in mobile version and expand the screen using console so the hamburger should be closed on 960px up automatically
        if (!matches) {
            console.log('i am running');
            setMenuOpen(false)
        }

    }, [path, matches])

    const handleLogin = () => {
        setShowModal(!showModal)
        setModalContent(<Login />)
    }

    return (
        <Box>
            <Box>
                {showModal && <Modal />}
            </Box>
            <Box className={classes.headerContainer} >
                <Container maxWidth="lg">
                    <AppBar position="static" style={{ boxShadow: 'none' }} color='transparent' >
                        <Toolbar disableGutters={true} >
                            <Grid container alignItems="center">
                                <Grid item xs={4}>
                                    <Box className={cx(classes.box1, classes.mobile)}>
                                        <Box>
                                            <Hamburger menuOpen={[menuOpen, setMenuOpen]} color={color} />
                                            {menuOpen && <NavigationOverlay menuOpen={[menuOpen, setMenuOpen]} menuItems={menuItems} handleLogin={handleLogin} />}
                                        </Box>
                                    </Box>
                                    <Box className={cx(classes.box1, classes.desktop)}>
                                        {
                                            menuItems.map(menu => {
                                                const { item, active } = menu
                                                const url = item.replace(/ /g, "-")
                                                return (
                                                    <Link to={`/${url}`} key={url}>
                                                        <Typography variant="body1" className={classes.title} style={{ textDecoration: active && 'underline', textUnderlineOffset: "5px" }}>
                                                            {item}
                                                        </Typography>
                                                    </Link>
                                                )
                                            })
                                        }
                                    </Box>
                                </Grid>

                                <Grid item xs={4}>
                                    <Box className={classes.box2}>
                                        <Link to="/" >
                                            <Box className={classes.logoContainer}>
                                                <Typography className={classes.logo} >
                                                    Hester
                                                </Typography>
                                            </Box>
                                        </Link>
                                    </Box>
                                </Grid>
                                <Grid item xs={4}>
                                    <Box className={classes.box3}>
                                        <Typography variant="body1" className={cx(classes.title2, classes.desktop)} onClick={handleLogin} >
                                            Login
                                        </Typography>
                                        <Box ml={3} className={classes.cartIcon}>
                                            <Link to="/cart">
                                                <Badge badgeContent={4}  >
                                                    <ShoppingCartOutlinedIcon />
                                                </Badge>
                                            </Link>
                                        </Box>
                                    </Box>
                                </Grid>
                            </Grid>
                        </Toolbar>

                    </AppBar>
                </Container>
            </Box >
        </Box>
    )
}
export default Header
