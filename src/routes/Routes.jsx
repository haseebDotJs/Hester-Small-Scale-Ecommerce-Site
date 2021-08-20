import { Routes, Route } from 'react-router-dom'
import { Box } from '@material-ui/core'
import Home from '../pages/Home/Home'
import Shop from '../pages/Shop/Shop'
import Item from '../pages/Shop/Item/Item'
import OurStory from '../pages/OurStory/OurStory'
import Blog from '../pages/Blog/Blog'
import BlogPage from '../pages/Blog/BlogPage'
import Cart from '../pages/Cart/Cart'
import NotFound from '../pages/NotFound/NotFound'
import Header from '../components/Header/Header'
const MyAppRoutes = () => {
    return (
        <Box>
            <Routes >
                <Route path="/" element={<Home />} />
                <Route path="/shop">
                    <Route path="/" element={<Shop />} />
                    <Route path="/:title" element={<Item />} />
                </Route>
                <Route path="our-story" element={<OurStory />} />
                <Route path="/blog">
                    <Route path="/" element={<Blog />} />
                    <Route path="/:title" element={<BlogPage />} />
                </Route>
                <Route path="/cart" element={<Cart />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
        </Box>
    )
}

export default MyAppRoutes
