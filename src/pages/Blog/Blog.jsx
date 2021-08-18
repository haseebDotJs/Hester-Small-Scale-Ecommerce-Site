import React from 'react'
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'
import { makeStyles } from '@material-ui/core/styles';
import { Box, Grid, Container, Typography } from '@material-ui/core';
import { PaddedBox } from '../../components/PaddedBox';
import { BlogData } from './BlogData'
import { Link } from 'react-router-dom'



const useStyles = makeStyles((theme) => ({
    image: {
        minHeight: '65vh',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        cursor: 'pointer',
        [theme.breakpoints.down('sm')]: {
            minHeight: '45vh',
        }
    },
    title: {
        textTransform: 'capitalize',
        fontWeight: 500,
        cursor: 'pointer',
    },
    readMore: {
        color: 'rgb(232,144,109)',
        textDecoration: 'underline',
        textUnderlineOffset: "5px",
        cursor: 'pointer',
    }
}));



const Blog = () => {
    const classes = useStyles()
    console.log('blog is rendering');
    return (
        <Box>
            <Header />
            <PaddedBox >
                <Container maxWidth="lg">
                    <Grid container spacing={6}>
                        {
                            BlogData.map(blog => {
                                const url = blog.title.replace(/ /g, "-")
                                return (
                                    <Grid item xs={12} sm={6} key={url}>
                                        <Box style={{ textAlign: 'center' }}>
                                            <Link to={url}>
                                                <Box mb={5} className={classes.image} style={{ backgroundImage: `url(${blog.image})` }}>
                                                </Box>
                                            </Link>
                                            <Box mb={2}>
                                                <Typography variant="body1" >
                                                    {blog.date}
                                                </Typography>
                                            </Box>
                                            <Box mb={2}>
                                                <Link to={url}>
                                                    <Typography variant="h4" className={classes.title}>
                                                        {blog.title}
                                                    </Typography>
                                                </Link>
                                            </Box>
                                            <Box mb={{xs: 0,sm: 2}}>
                                                <Link to={url}>
                                                    <Typography variant="body1" className={classes.readMore}>
                                                        Read More
                                                    </Typography>
                                                </Link>
                                            </Box>
                                        </Box>
                                    </Grid>
                                )
                            })
                        }
                    </Grid>
                </Container>
            </PaddedBox>
            <Footer />
        </Box >
    )
}

export default Blog
