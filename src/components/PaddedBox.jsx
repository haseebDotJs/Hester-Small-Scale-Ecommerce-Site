import React from 'react'
import { Box } from "@material-ui/core"
export const PaddedBox = ({ children }) => {
    return (
        <Box mt={{ xs: 4, md: 8 }} mb={{ xs: 6, md: 8 }}>
            {children}
        </Box>
    )
}

