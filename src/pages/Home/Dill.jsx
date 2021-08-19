import React from 'react'
import { useTheme } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { Box, Typography, Container, Grid } from '@material-ui/core';
import { MyButton } from '../../components/Button'
import cucumber from '../../images/cucumber.jpeg'
import chilli from '../../images/chilli.jpeg'
import cabbage from '../../images/cabbage.jpeg'


const Dill = () => {
    const theme = useTheme()
    const isMedium = useMediaQuery(theme.breakpoints.down('sm'));
    return (
        <Box py={7}>
            <Container maxWidth="lg">
                <Box>
                    <Box>
                        <Typography variant="h4" style={{ fontWeight: 500 }} align='center'>
                            What’s the Dill?
                        </Typography>
                    </Box>
                    <Box mt={4}>
                        <Typography variant="body1" style={{ fontWeight: 300 }} align='center'>
                            Sign up with your email address to receive news and updates.
                        </Typography>
                    </Box>
                    <Box mt={4}>
                        <MyButton buttonColor="lightcoral" textColor="textSecondary" text="Subscribe Me" width="230px" />
                    </Box>
                    <Box mt={8}>
                        <Grid container spacing={isMedium ? 2 : 5}>
                            <Grid item xs={6} sm={4}>
                                <Box>
                                    <img src={cucumber} alt="cucumber" />
                                </Box>
                            </Grid>
                            <Grid item xs={6} sm={4}>
                                <Box>
                                    <img src={chilli} alt="chilli" />
                                </Box>
                            </Grid>
                            <Grid item xs={6} sm={4}>
                                <Box>
                                    <img src={cabbage} alt="cabbage" />
                                </Box>
                            </Grid>
                        </Grid>
                    </Box>
                </Box>
            </Container>
        </Box>
    )

}

export default Dill
