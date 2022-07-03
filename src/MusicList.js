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
    const [likes, setLikes] = React.useState({});

    const toggleFavorite = (id) => () => {
        // React Hooks useState() with Object
        // https://stackoverflow.com/questions/54150783/react-hooks-usestate-with-object
        setLikes({...likes, [id] : !likes[id]}); 
    }

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
                        <IconButton  onClick={toggleFavorite(item.collectionId)}>
                            {(likes[item.collectionId] === true) ? 
                                <Favorite /> : <FavoriteBorder /> }
                        </IconButton>
                    </CardActions>

                </Card>)
            })}
        </div>
    );
}
