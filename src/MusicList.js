import React from 'react';
import {Card, CardContent, Typography} from '@mui/material';

export default function MusicList ({list}) {
    return (
        <div>
            {list.results.map(item => {
                return (
                <Card>
                    <CardContent>
                        <Typography variant="subtitle1"> {item.artistName}</Typography>
                        <Typography variant="subtitle2"> {item.collectionCensoredName}</Typography>
                    </CardContent>
                </Card>)
            })}
        </div>
    );
}
