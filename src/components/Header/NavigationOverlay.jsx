import './NavigationOverlay.css'
import React, { useRef, useEffect } from 'react'
import { Box, Typography } from "@material-ui/core"
import { Link } from 'react-router-dom'
import {
    useBodyScrollLock,
} from "@weahead/react-customizable-modal";

const NavigationOverlay = ({ menuOpen: [menuOpen, setMenuOpen], menuItems, handleLogin }) => {
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
                                    <Link to={`/${url}`} key={url} onClick={closeMenu}>
                                        <Typography variant="h3" style={{ textTransform: 'capitalize' }} className='h2'>
                                            {item}
                                        </Typography>
                                    </Link>
                                )
                            })
                        }
                    </Box>
                    <Box>
                        <Typography variant="h3" onClick={handleLogin} className='login' >
                            Login
                        </Typography>
                    </Box>
                </Box>
            </Box>
        </Box >
    )
}

export default NavigationOverlay
