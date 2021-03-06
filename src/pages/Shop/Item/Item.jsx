// import { shuffle } from './Product/shuffle'
import { Api } from '../Api'
import Header from '../../../components/Header/Header'
import Footer from '../../../components/Footer/Footer'
import { Box, Container } from '@material-ui/core';
import { useParams } from "react-router-dom"
import Product from './Product/Product'
import YouMightAlsoLike from './Product/YouMightAlsoLike'
import { PaddedBox } from '../../../components/PaddedBox'
import NotFound from '../../NotFound/NotFound';


const Item = () => {
    const { title } = useParams()
    const originalTitle = title.replace(/-/g, " ")
    const pickle = Api.find((pickle) => pickle.title === originalTitle)
    // removing current item and randomly picking 5 items to put in (you might also like)
    const randomItems = Api.filter(pickle => pickle.title !== originalTitle).slice(0, 5)

    return (
        <Box>
            {
                pickle ?
                    <Box>
                        <Header />
                        <PaddedBox>
                            <Container maxWidth="lg">
                                <Box>
                                    <Product pickle={pickle} />
                                </Box>
                                <Box mt={{ xs: 5, md: 10 }} mb={{ xs: 8, md: 12 }}>
                                    <YouMightAlsoLike randomItems={randomItems} />
                                </Box>
                            </Container>
                        </PaddedBox>
                        <Footer />
                    </Box>
                    :
                    <NotFound />
            }
        </Box >
    )
}

export default Item
