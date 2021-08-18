import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Container, Box, Typography, Grid } from '@material-ui/core';
import InstagramIcon from '@material-ui/icons/Instagram';


const useStyles = makeStyles((theme) => ({
    footerContainer: {
        backgroundColor: 'rgb(223,124,109)'
    },
    iconContainer: {
        display: 'flex',
        justifyContent: 'flex-end',
        cursor: 'pointer',
        [theme.breakpoints.down('xs')]: {
            justifyContent: 'flex-start'
        }
    },
    icon: {
        fill: '#ffffff',
    },
    address: {
        fontWeight: 300,
        lineHeight: 1.75
    }
}));

const Footer = () => {
    const classes = useStyles()

    return (

        <Box className={classes.footerContainer} pt={7} pb={6}>
            <Container maxWidth="lg">
                <Grid container>
                    <Grid item xs={12} md={6}>
                        <Box >
                            <Typography variant="h5" color="textSecondary" style={{ fontWeight: '600' }}>
                                Hester
                            </Typography>
                        </Box>
                        <Box my={4}>
                            <Typography className={classes.address} variant="body1" color="textSecondary">
                                123 Demo Street
                            </Typography>
                            <Typography className={classes.address} variant="body1" color="textSecondary">
                                New York, NY 10000
                            </Typography>
                            <Typography className={classes.address} variant="body1" color="textSecondary">
                                (555) 555-555
                            </Typography>
                        </Box>
                        <Box my={4}>
                            <Typography variant="body1" color="textSecondary">
                                Made with Squarespace
                            </Typography>
                        </Box>

                    </Grid >
                    <Grid item xs={12} md={6}>
                        <Box className={classes.iconContainer}>
                            <InstagramIcon className={classes.icon} />
                        </Box>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
}
export default Footer
