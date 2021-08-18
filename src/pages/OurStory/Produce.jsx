import React from 'react'
import { Box, Typography } from '@material-ui/core';


const Produce = () => {
    return (
        <Box mt={{ xs: 10, sm: 18 }} mb={{ xs: 10, sm: 20}}>
            <Box>
                <Box mb={{ xs: 4, sm: 5 }}>
                    <Typography variant="h4" style={{ fontWeight: 500, lineHeight: 1.4 }}>
                        Hester produces fresh, organic produce from local farmers in New York. Even our spices are fresh. Just because pickling is a preservation process doesn’t mean you can use dried-up thyme or week-old asparagus that’s already a little spongy.
                    </Typography>
                </Box>
                <Box >
                    <Typography variant="h5" style={{ fontWeight: 300, lineHeight: 1.8 }}>
                        We want to give our customers crisp, crunchy and delicious pickled vegetables and fruits. Most of all, we want to expand people’s palates and prove that pickles don’t always come in a green or red variety.
                    </Typography>
                </Box>
            </Box>
        </Box >
    )
}

export default Produce
