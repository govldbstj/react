import React from 'react';
import {Typography, AppBar} from '@mui/material';

export default function App () {
    return (
        <React.Fragment>
            <AppBar position="static">
                <Typography align="center" variant="h3" color="inherit">Favorite Music</Typography>
            </AppBar>
        </React.Fragment>
    )
}

