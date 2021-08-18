import React from 'react'
import { Box } from "@material-ui/core"
import GreenPickleImage from '../../images/green-image.jpg'
const Green = () => {
    return (
        <Box style={{
            backgroundColor: "rgba(223,124,109,.2)",
        }}>
            <Box style={
                {
                    backgroundImage: `url(${GreenPickleImage})`,
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: 'center',
                    backgroundSize: 'cover',
                    minHeight: '100vh',
                }}>
            </Box>
        </Box>
    )
}

export default Green
