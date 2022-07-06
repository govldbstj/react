import React from 'react';
import {Box, Tabs, Tab, Typography, AppBar, CssBaseline} from '@mui/material';
import SearchPage from './SearchPage';

export default function App () {
    const [currentTab, setCurrentTab] = React.useState(0);

    const handleTabChange = (event, newValue) => {
        setCurrentTab(newValue);
    }

    return (
        <React.Fragment>
            <CssBaseline/>

            <AppBar position="fixed">
                <Typography align="center" variant="h3" color="inherit">Favorite Music</Typography>
            </AppBar>
            <div style={{height: 60, width: '100%'}}></div>
            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                <Tabs value={currentTab} onChange={handleTabChange} aria-label="basic tabs"
                    centered >
                  <Tab label="Search Music" value={0}  />
                  <Tab label="Favorites" value={1}  />
                  <Tab label="More Contents"value={2}  />
                </Tabs>
            </Box>

            { currentTab == 0 && <SearchPage/> }
            { currentTab == 1 &&  
                <Typography align="center" variant="h2" > Item Two </Typography>}
            { currentTab == 2 &&  
                <Typography align="center" variant="h2" > Item Three </Typography>}

        </React.Fragment>
    )
}

