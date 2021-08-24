import './NavigationOverlay.css'
import React, { useRef, useEffect, useContext } from 'react'
import { GlobalState } from '../../context/GlobalState'
import { Box, Typography, Badge } from "@material-ui/core"
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';
import { Link } from 'react-router-dom'
import {
    useBodyScrollLock,
} from "@weahead/react-customizable-modal";
import { makeStyles } from '@material-ui/core/styles';
import cx from "classnames"


const useStyles = makeStyles((theme) => ({
    mobileMenuItems: {
        fontSize: '2rem',
        fontWeight: theme.typography.fontWeightLight
    },

    cart: {
        display: "flex",
        alignItems: "center"
    }
}))
const NavigationOverlay = ({ menuOpen: [menuOpen, setMenuOpen], menuItems, handleLogin }) => {
    const classes = useStyles();
    const { items: { items } } = useContext(GlobalState)
    useBodyScrollLock();
    const nav = useRef()
    useEffect(() => {
        if (menuOpen) {
            nav.current.style.height = "100%"
        } else {
            nav.current.style.height = "0%"
        }
    }, [menuOpen])

    const closeMenu = () => {
        setMenuOpen(false)
    }
    const totalQuantity = items.reduce((acc, item) => {
        return (acc + +item.quantity)
    }, 0)
    return (
        <Box className="overlay" ref={nav} >
            <Box>
                <Box className="overlay-content">
                    <Box mb={2}>
                        {
                            menuItems.map(menu => {
                                const { item } = menu
                                const url = item.replace(/ /g, "-")
                                return (
                                    <Box mb={2} key={url}>
                                        <Link to={`/${url}`} key={url} onClick={closeMenu}>
                                            <Typography className={classes.mobileMenuItems} variant="h3" style={{ textTransform: 'capitalize' }} >
                                                {item}
                                            </Typography>
                                        </Link>
                                    </Box>
                                )
                            })
                        }
                    </Box>
                    <Box mb={2}>
                        <Typography className={cx(classes.mobileMenuItems, "login")} variant="h3" onClick={handleLogin}  >
                            Login
                        </Typography>
                    </Box>
                    <Box >
                        <Link to="/cart" >
                            <Box className={classes.cart}>
                                <Badge badgeContent={totalQuantity ? totalQuantity : '0'} >
                                    <ShoppingCartOutlinedIcon style={{ fontSize: "2rem" }} />
                                </Badge>
                                <Box ml={2}>
                                    <Typography variant="h3" className={classes.mobileMenuItems}>
                                        Cart
                                    </Typography>
                                </Box>
                            </Box>
                        </Link>
                    </Box>
                </Box>
            </Box>
        </Box >
    )
}

export default NavigationOverlay
