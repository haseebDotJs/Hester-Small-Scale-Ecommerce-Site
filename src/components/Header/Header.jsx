import './Header.css'
import React, { useState, useEffect, useMemo, useContext, useRef } from 'react';
import { GlobalState } from '../../context/GlobalState'
import { useTheme } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { makeStyles } from '@material-ui/core/styles';
import { AppBar, Container, Box, Grid, Paper } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
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
import { Api } from '../../pages/Shop/Api';

const useStyles = makeStyles((theme) => ({
    headerContainer: {
        position: 'relative',
        width: '100%',
        zIndex: 1,
        padding: theme.spacing(3, 0),
        color: color => color ? color.color : '#000'

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
        fontWeight: [theme.typography.fontWeightMedium],
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
    searchBox: {
        position: "relative",
        display: 'flex',
        alignItems: "center",
        borderRadius: "5px",
        height: "40px",
        padding: "5px 0px",
        cursor: "pointer",
        [theme.breakpoints.down("sm")]: {
            backgroundColor: "transparent",
        },
    },
    searchIcon: {
        color: color => color ? color.color : '#000',
        cursor: "pointer",
        fontSize: "1.5rem"
        // position: 'absolute',
        // backgroundColor: "green",
        // [theme.breakpoints.down("sm")]: {
        //     
        // },

    },
    searchText: {
        boxSizing: "border-box",
        // minWidth: 0,
        // maxWidth: "100px",
        border: "none",
        background: "none",
        padding: "0 5px 0 0",
        color: color => color ? color.color : '#000',
        transition: "all 0.4s",
        "&::placeholder": {
            color: color => color ? color.color : '#000',
        },
        [theme.breakpoints.down("sm")]: {
            width: "0",
        }
    },

    searchResultContainer: {
        position: 'absolute',
        width: '100%',
        top: "50px",
        [theme.breakpoints.down('sm')]: {
            position: 'fixed',
            zIndex: 1,
            /* Sit on top */
            left: 0,
            right: 0,
            top: "90px"
        }
    },
    searchResult: {
        display: 'flex',
        alignItems: 'center',
        borderBottom: '0.5px solid gray',
        padding: theme.spacing(1)
    },
    searchResultImage: {
        width: "60px",
        minWidth: "40px"
    },
    searchResultTitle: {
        fontSize: '.8rem',
    },
    cartIcon: {
        cursor: "pointer",
        fontSize: "40px",
        // width: "40px"
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
    },

}));

const Header = ({ color }) => {
    const classes = useStyles(color);
    const search = useRef(null);
    const initialState = useMemo(() => ({ shop: false, ourStory: false, blog: false }), [])
    const [active, setActive] = useState(initialState)
    const [searchOpen, setSearchOpen] = useState(false)
    const [searchInput, setSearchInput] = useState("")
    const { pathname } = useLocation()
    const { modal: [showModal, setShowModal], modalContent: [, setModalContent], menuOpen: [menuOpen, setMenuOpen], items: { items } } = useContext(GlobalState)
    const path = pathname.replace(/\//, "")
    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.down('sm'));

    const menuItems = [{ item: "shop", active: active.shop }, { item: "our story", active: active.ourStory }, { item: "blog", active: active.blog }]

    // calculating total quantity of items
    const totalQuantity = items.reduce((acc, item) => {
        return (acc + +item.quantity)
    }, 0)
    // const box1 = useRef()
    // const box3 = useRef()

    // searching for products according to keywords in search input
    const filteredProducts = searchInput.length > 0 ? Api.filter(item => {
        return item.title.toLowerCase().indexOf(searchInput.toLowerCase()) !== -1;
    }) : []


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
            setMenuOpen(false)
        }

    }, [path, matches, setMenuOpen])

    const handleLogin = () => {
        setShowModal(!showModal)
        setModalContent(<Login />)
    }

    const emptySearchInput = () => {
        setSearchInput("")
    }
    useEffect(() => {
        if (!matches) {
            search.current.style.width = `auto`
        }
        else {
            search.current.style.width = 0
        }
    }, [matches])
    const handleSearchClick = () => {
        if (!searchOpen) {
            setSearchOpen(true)
            search.current.style.width = `${window.innerWidth / 5}px`
        }
        else {
            setSearchOpen(false)
            search.current.style.width = "0"
            setSearchInput("")
        }
    };
    return (
        <Box>
            <Box>
                {showModal && <Modal />}
            </Box>
            <Box className={classes.headerContainer}  >
                <Container maxWidth="lg">
                    <AppBar position="static" style={{ boxShadow: 'none' }} color='transparent' >
                        <Toolbar disableGutters={true} >
                            <Grid container alignItems="center" >
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
                                        <div className={classes.searchBox}>
                                            <input
                                                type="text"
                                                name="search"
                                                autoComplete="off"
                                                placeholder="Search…"
                                                className={classes.searchText}
                                                id="search"
                                                value={searchInput}
                                                onChange={(e) => setSearchInput(e.target.value)}
                                                ref={search}
                                                disabled={(matches && !searchOpen) && true}
                                            />
                                            <Box mt={1} onClick={matches ? handleSearchClick : undefined}>
                                                <label htmlFor="search">
                                                    <SearchIcon className={classes.searchIcon} />
                                                </label>
                                            </Box>
                                            <div className={classes.searchResultContainer}>
                                                {searchInput.length > 0 &&
                                                    <Box>
                                                        < Paper variant="outlined">
                                                            {
                                                                filteredProducts.length < 1 ?
                                                                    <Box className={classes.searchResult}>
                                                                        <Typography variant="body1">No results!</Typography>
                                                                    </Box>
                                                                    :
                                                                    filteredProducts.map(item => {
                                                                        const url = item.title.replace(/ /g, "-")
                                                                        return (
                                                                            <Link to={`/shop/${url}`} onClick={emptySearchInput} key={item.title}>
                                                                                <Box className={classes.searchResult} key={item.id}>
                                                                                    <div>
                                                                                        <img className={classes.searchResultImage} src={item.image} alt="pickle" />
                                                                                    </div>
                                                                                    <div>
                                                                                        <Typography className={classes.searchResultTitle}>
                                                                                            {item.title}
                                                                                        </Typography>
                                                                                    </div>
                                                                                </Box>
                                                                            </Link>
                                                                        )
                                                                    })
                                                            }
                                                        </Paper>
                                                    </Box>
                                                }
                                            </div>
                                        </div>
                                        <Box ml={3} className={classes.desktop}>
                                            <Typography variant="body1" className={cx(classes.title2)} onClick={handleLogin} >
                                                Login
                                            </Typography>
                                        </Box>
                                        <Box ml={3} className={classes.desktop}>
                                            <Link to="/cart" className={cx(classes.cartIcon)} >
                                                <Badge badgeContent={totalQuantity ? totalQuantity : '0'} >
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
        </Box >
    )
}
export default Header
