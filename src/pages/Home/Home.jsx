import React, { useEffect, useContext } from 'react'
import { Box } from '@material-ui/core';
import Hero from './Hero'
import Ingredients from './Ingredients'
import Pink from './Pink'
import Dill from './Dill'
import Footer from '../../components/Footer/Footer'
import { GlobalState } from '../../context/GlobalState'

const Home = () => {
    // const { color: [, setColor] } = useContext(GlobalState)
    // useEffect(() => {
    //     console.log('home is rendering');
    //     // setColor('#fff')
    //     return () => {
    //         console.log('home is leaving');
    //         // setColor("#000")
    //     }
    // })
    // const classes = useStyles()
    return (
        <Box >
            <Hero />
            <Ingredients />
            <Pink />
            <Dill />
            <Footer />
        </Box>
    )

}

export default Home
