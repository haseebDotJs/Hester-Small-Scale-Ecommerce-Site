import React from 'react'
import { Box } from "@material-ui/core"
import PinkPickleImage from '../../images/pink-image.jpg'
const Pink = () => {
    return (
        <Box style={{
            backgroundColor: "rgba(223,124,109,.2)",
        }}>
            <Box style={
                {
                    backgroundImage: `url(${PinkPickleImage})`,
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: 'center',
                    backgroundSize: 'cover',
                    minHeight: '100vh',
                }}>
            </Box>
        </Box>
    )
}

export default Pink
