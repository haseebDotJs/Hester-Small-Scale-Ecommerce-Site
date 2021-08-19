import React from 'react'
import { Box } from '@material-ui/core';
import Hero from './Hero'
import Ingredients from './Ingredients'
import Pink from './Pink'
import Dill from './Dill'
import Footer from '../../components/Footer/Footer'

const Home = () => {

    console.log('home is rendering');
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
