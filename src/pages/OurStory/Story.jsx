import React from 'react'
import { Box, Typography } from '@material-ui/core';

const Story = () => {

    return (
        <Box>
            <Box mt={{ xs: 4, sm: 12 }} mb={{ xs: 8, sm: 12 }}>
                <Box mb={{ xs: 4, sm: 5 }}>
                    <Typography variant="h4" style={{ fontWeight: 500 }}>
                        Our Story
                    </Typography>
                </Box>
                <Box mb={2}>
                    <Typography variant="h5" style={{ fontWeight: 300, lineHeight: 1.8 }}>
                        Since 2005, Hester has done more than refine an old tradition. Guided by an international palate, we fuse unique pickling techniques from around the world to create the most interesting flavors and textures.
                    </Typography>
                </Box>
                <Box>
                    <Typography variant="h5" style={{ fontWeight: 300, lineHeight: 1.8 }}>
                        Hester makes everything in small batches from our home base in New York. To achieve optimal flavor, our products age from three weeks to four months, making every pickle worth your patience.
                    </Typography>
                </Box>
            </Box>
        </Box >
    )
}

export default Story
