import React from 'react'
import { Box, Typography, Container, Grid } from '@material-ui/core';
import { MyButton } from '../../components/Button'
import pickle1 from '../../images/pickle1.jpeg'
import pickle2 from '../../images/pickle2.jpeg'
import pickle3 from '../../images/pickle3.jpeg'
import { Link } from 'react-router-dom'


const Ingredients = () => {
    return (
        <Box py={7}>
            <Container maxWidth="lg">
                <Box>
                    <Box>
                        <Typography variant="h4" style={{ fontWeight: 500 }} align='center'>
                            Only the Highest Quality Ingredients
                        </Typography>
                    </Box>
                    <Box mt={4}>
                        <Typography variant="body1" style={{ fontWeight: 300 }} align='center'>
                            In fact, we grow most of them ourselves on our 17-acre farm!
                        </Typography>
                    </Box>
                    <Box my={8}>
                        <Grid container>
                            <Grid item xs={12} sm={4}>
                                <Box style={{ cursor: "pointer" }}>
                                    <img src={pickle1} alt="pickle1" />
                                </Box>
                            </Grid>
                            <Grid item xs={12} sm={4}>
                                <Box style={{ cursor: "pointer" }}>
                                    <img src={pickle2} alt="pickle2" />
                                </Box>
                            </Grid>
                            <Grid item xs={12} sm={4}>
                                <Box style={{ cursor: "pointer" }}>
                                    <img src={pickle3} alt="pickle3" />
                                </Box>
                            </Grid>
                        </Grid>
                    </Box>
                    <Box>
                        <Link to="/shop">
                            <MyButton buttonColor="lightcoral" textColor="textSecondary" text="Shop Now" />
                        </Link>
                    </Box>
                </Box>
            </Container>
        </Box>
    )

}

export default Ingredients
