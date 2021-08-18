import React, { useState, useEffect } from 'react'
import { Box, Grid } from '@material-ui/core';
import MainImage from './MainImage'
import SideImages from './SideImages'

const Images = ({ pickle }) => {
  
    return (
        <Box >
            <Grid item xs={3} md={1}>
                <Box my={{ xs: 3, md: false }}>
                    <SideImages pickle={pickle} setImage={setImage} />
                </Box>
            </Grid>
            <Grid item xs={12} md={6}>
                <Box mt={{ xs: false, md: 5 }} style={{ display: "flex", justifyContent: 'center' }}>
                    <MainImage pickle={pickle} image={image} />
                </Box>
            </Grid>
        </Box>
    )
}

export default Images
