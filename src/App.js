import React from 'react';
import {Typography, AppBar, CssBaseline} from '@mui/material';
import MusicList from './MusicList';
import music_list from './data';

export default function App () {
    return (
        <React.Fragment>
            <CssBaseline/>

            <AppBar position="fixed">
                <Typography align="center" variant="h3" color="inherit">Favorite Music</Typography>
            </AppBar>

            <div style={{height: 60, width: '100%'}}></div>
            <MusicList list={music_list}>
            </MusicList>

        </React.Fragment>
    )
}

