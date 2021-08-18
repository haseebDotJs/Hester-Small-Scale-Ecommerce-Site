import './Hamburger.css'
import React, { useEffect, useRef } from 'react'
import { Box } from "@material-ui/core"

const Hamburger = ({ menuOpen: [menuOpen, setMenuOpen], color }) => {
    const menuBtn = useRef()
    const menuBurger = useRef()

    /* when user is toggling between responsive screen sizes,
     so if he open hamburger and move towards deskttop screen
     and then again come toward mobile screen then hamburger
     will be close but hamburger will be showing cross sign,
     so to fix that this use effect is being used
    */
    useEffect(() => {
        if(!menuOpen){
        menuBtn.current.classList.remove('open');
        menuBurger.current.classList.remove('big-sticks')
        setMenuOpen(false)
        }
    }, [menuOpen])
    const handleHamburger = () => {
        if (!menuOpen) {
            menuBtn.current.classList.add('open');
            menuBurger.current.classList.add('big-sticks')
            setMenuOpen(true)
        } else {
            menuBtn.current.classList.remove('open');
            menuBurger.current.classList.remove('big-sticks')
            setMenuOpen(false)
        }
    }
    console.log('color', color);
    return (
        <Box className="menu-btn open" ref={menuBtn} onClick={handleHamburger} >
            <Box className="menu-btn__burger big-sticks" ref={menuBurger} style={{ backgroundColor: menuOpen ? '#000' : color ? color.color : "#000" }} />
            {/* <Box className="menu-btn__burger menu-btn__burger1" /> */}
        </Box>
    )
}

export default Hamburger
