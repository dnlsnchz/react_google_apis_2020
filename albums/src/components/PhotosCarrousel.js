import React, { Component } from 'react';
import { withStyles, Card, Typography, CardContent } from '@material-ui/core';


function PhotosCarrousel(props) {
    return (
        <div className={props.classes.container}>
            {props.photos.map((photo, index) => {
                return (
                    <Card key={photo.id} className={props.classes.card}>
                        <img src={photo.baseUrl} className={props.classes.img} />
                        <CardContent>
                            <Typography variant="caption" component="p">
                                {photo.filename}
                            </Typography>
                        </CardContent>
                    </Card>
                );
            })}
        </div>
    );
}

export default withStyles({
    container: {
        display: 'flex',
        flexDirection: 'row',
        overflowX: 'scroll',
        justifyContent: 'center',
        padding:'1em 0'
    },
    img: {
        maxWidth: '100%',
        height: 'auto'
    },
    card: {
        minWidth: '300px',
        marginRight: '1em'
    }
})(PhotosCarrousel);