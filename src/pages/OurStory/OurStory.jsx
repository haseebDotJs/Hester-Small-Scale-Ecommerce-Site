import React from 'react'
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'
import { Box, Container } from '@material-ui/core';
import { PaddedBox } from '../../components/PaddedBox';
import Green from './Green'
import Produce from './Produce'
import Story from './Story'

const OurStory = () => {
    console.log('our story is rendering');
    return (
        <Box>
            <Header />
            <PaddedBox >
                <Container maxWidth="md">
                    <Story />
                </Container>
                <Green />
                <Container maxWidth="md">
                    <Produce />
                </Container>
            </PaddedBox>
            <Footer />
        </Box >
    )
}

export default OurStory
