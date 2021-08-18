import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'
import { Box, Container, Typography } from '@material-ui/core';
import { PaddedBox } from '../../components/PaddedBox'
import { Link } from "react-router-dom"
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    text: {
        fontWeight: 300
    }
}));

const NotFound = () => {
    const classes = useStyles()
    return (
        < Box >
            <Header />
            <PaddedBox>
                <Container maxWidth="lg">
                    <Box>
                        <Box>
                            <Typography variant="body1" className={classes.text}>
                                We couldn't find the page you were looking for. This is either because:
                            </Typography>
                        </Box>
                        <Box my={3}>
                            <Typography component="ul">
                                <Box>
                                    <Typography variant="body1" component="li" style={{ listStyleType: "disc" }} className={classes.text}>
                                        There is an error in the URL entered into your web browser. Please check the URL and try again.
                                   </Typography>
                                </Box>
                                <Typography variant="body1" component="li" style={{ listStyleType: "disc" }} className={classes.text}>
                                    The page you are looking for has been moved or deleted.
                            </Typography>
                            </Typography>
                        </Box>
                        <Box>
                            <Typography variant="body1" className={classes.text}>
                                You can return to our homepage by <Link to="/"><Typography color="primary" component="span">clicking here</Typography></Link>
                            </Typography>
                        </Box> 
                    </Box>
                </Container>
            </PaddedBox>
            <Footer />
        </Box >
    )
}

export default NotFound
