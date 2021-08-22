import './NavigationOverlay.css'
import React, { useRef, useEffect } from 'react'
import { Box, Typography } from "@material-ui/core"
import { Link } from 'react-router-dom'
import {
    useBodyScrollLock,
} from "@weahead/react-customizable-modal";
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({
    mobileMenuItems: {
        fontSize: '2.5rem',
        fontWeight: theme.typography.fontWeightLight
    }
}))
const NavigationOverlay = ({ menuOpen: [menuOpen, setMenuOpen], menuItems, handleLogin }) => {
    const classes = useStyles();
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

    return (
        <Box className="overlay" ref={nav} >
            <Box>
                <Box className="overlay-content">
                    <Box mb={3}>
                        {
                            menuItems.map(menu => {
                                const { item } = menu
                                const url = item.replace(/ /g, "-")
                                return (
                                    <Box mb={3} key={url}>
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
                    <Box>
                        <Typography className={classes.mobileMenuItems} variant="h3" onClick={handleLogin}  >
                            Login
                        </Typography>
                    </Box>
                </Box>
            </Box>
        </Box >
    )
}

export default NavigationOverlay
