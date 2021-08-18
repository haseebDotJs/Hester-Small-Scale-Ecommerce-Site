import React, { useEffect } from 'react'
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'
import { makeStyles } from '@material-ui/core/styles';
import { Box, Grid, Container, Typography } from '@material-ui/core';
import { PaddedBox } from '../../components/PaddedBox';
import { BlogData } from './BlogData'
import { useParams } from 'react-router-dom'
import Icon from '@material-ui/core/Icon';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos'
import cx from "classnames"
import { Link } from "react-router-dom"


const useStyles = makeStyles((theme) => ({
    title: {
        textTransform: 'capitalize',
        fontWeight: 500
    },
    description: {
        lineHeight: 2,
        fontWeight: 300
    },
    previousItem: {
        display: 'flex',
        alignItems: 'center'
    },
    nextItem: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-end'
    },
    navigateTitle: {
        textTransform: 'capitalize',
        fontWeight: 500,
        fontSize: "2rem",
        [theme.breakpoints.down('sm')]: {
            fontSize: "1.3rem"
        }
    },
    navigateTitleLeft: {
       textAlign: 'left'
    },
    naviagetTitleRight: {
        textAlign: 'right'
    },
    icon: {
        display: 'block',
        fontSize: '2rem',
        [theme.breakpoints.down('sm')]: {
            fontSize: "1.3rem"
        }
    },
}));



const BlogPage = () => {
    const classes = useStyles()
    const { title } = useParams()
    const originalTitle = title.replace(/-/g, " ")
    const blog = BlogData.find((blog) => blog.title === originalTitle)
    const index = BlogData.indexOf(blog)
    const previousItem = index <= 0 ? {} : BlogData[index - 1]
    const nextItem = BlogData.length - 1 === index ? {} : BlogData[index + 1]
    const previousItemUrl = previousItem.title && `/blog/${previousItem.title.replace(/ /g, "-")}`
    const nextItemUrl = nextItem.title && `/blog/${nextItem.title.replace(/ /g, "-")}`

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [previousItemUrl, nextItemUrl])

    return (
        <Box>
            <Header />
            <PaddedBox >
                <Container maxWidth="md">
                    <Box style={{ textAlign: 'center' }} mb={{ xs: 12, sm: 18 }}>
                        <Box mb={{ xs: 2, sm: 5 }}>
                            <Typography variant="body1" >
                                May 29
                            </Typography>
                        </Box>
                        <Box mb={8}>
                            <Typography variant="h2" className={classes.title}>
                                {blog.title}
                            </Typography>
                        </Box>
                        <Box mb={3}>
                            <Typography className={classes.description} variant="body1" align="left">
                                {blog.description.para1}
                            </Typography>
                        </Box>
                        <Box>
                            <Typography className={classes.description} variant="body1" align="left">
                                {blog.description.para2}
                            </Typography>
                        </Box>
                    </Box>
                </Container>
                <Container maxWidth="lg">
                    <Box>
                        <Grid container alignItems="center" spacing={2}>
                            <Grid item xs={6} >
                                {
                                    previousItem.title &&
                                    <Link to={previousItemUrl}>
                                        <Box className={cx(classes.item, classes.previousItem)}>
                                            <Box>
                                                <Icon>
                                                    <ArrowBackIosIcon className={classes.icon} />
                                                </Icon>
                                            </Box>
                                            <Box ml={1}>
                                                <Typography variant="h4" className={cx(classes.navigateTitle,classes.navigateTitleLeft)}>
                                                    {previousItem.title}
                                                </Typography>
                                            </Box>
                                        </Box>
                                    </Link>
                                }
                            </Grid>
                            <Grid item xs={6} >
                                {
                                    nextItem.title &&
                                    <Link to={nextItemUrl}>
                                        <Box className={cx(classes.item, classes.nextItem)}>
                                            <Box mr={1} >
                                                <Typography variant="h4" className={cx(classes.navigateTitle,classes.naviagetTitleRight)}>
                                                    {nextItem.title}
                                                </Typography>
                                            </Box>
                                            <Box>
                                                <Icon>
                                                    <ArrowForwardIosIcon className={classes.icon} />
                                                </Icon>
                                            </Box>
                                        </Box>
                                    </Link>
                                }
                            </Grid>
                        </Grid>
                    </Box>
                </Container>
            </PaddedBox>
            <Footer />
        </Box >
    )
}

export default BlogPage
