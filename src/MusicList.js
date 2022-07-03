import React from 'react';
import {Card, CardContent, CardActions, Typography, IconButton} from '@mui/material';
import {Favorite, FavoriteBorder} from '@mui/icons-material';

const styles = {
    content : {},
    layout : {
        display : 'flex',
        justifyContent : 'center'
    },
    card: {
        minWidth: 275,
        maxWidth: 600,
        marginBottom : "20pt",
        marginLeft : 'auto',
        marginRight : 'auto',
    },
};

export default function MusicList ({list}) {
    return (
        <div>
            {list.results.map(item => {
                return (
                <Card sx={styles.card} key={item.collectionId}>
                    <CardContent>
                        <Typography variant="subtitle1"> {item.artistName}</Typography>
                        <Typography variant="subtitle2"> {item.collectionCensoredName}</Typography>
                    </CardContent>
                    <CardActions>
                        <IconButton>
                            {item.like ? <Favorite /> : <FavoriteBorder />}
                        </IconButton>
                    </CardActions>

                </Card>)
            })}
        </div>
    );
}
