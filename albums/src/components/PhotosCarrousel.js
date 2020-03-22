import React, { Component } from 'react';
import { withStyles, Card, Typography, CardContent } from '@material-ui/core';

import { PoseGroup } from 'react-pose';

import Box from '../animations/Box'
function PhotosCarrousel(props) {
    return (
        <div className={props.classes.container}>
            <PoseGroup>
                {props.photos.map((photo, index) => {
                    return (
                        <Box key={photo.id} position={index} className={props.classes.card}>
                            <Card >
                                <img src={photo.baseUrl} className={props.classes.img} />
                                <CardContent>
                                    <Typography variant="caption" component="p">
                                        {photo.filename}
                                    </Typography>
                                </CardContent>
                            </Card>
                        </Box>
                    );
                })}
            </PoseGroup>
        </div>
    );
}

export default withStyles({
    container: {
        display: 'flex',
        flexDirection: 'row',
        overflowX: 'scroll',
        justifyContent: 'center',
        padding: '1em 0'
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