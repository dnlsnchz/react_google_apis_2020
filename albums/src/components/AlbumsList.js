import React from 'react';
import { withStyles, Grid } from '@material-ui/core';
import AlbumCard from './AlbumCard';
import { PoseGroup } from 'react-pose';

import Box from '../animations/Box'

function AlbumsList(props) {
    console.log('¿props.mainAlbum', props.mainAlbum, props.mainAlbum ? 'exit' : 'enter', (props.mainAlbum ? 'exit' : 'enter'));
    return (

        <Grid container spacing={16} justify="center">
            <PoseGroup>
                {
                    props.albums.map((album, index) => {
                        return (
                            !props.mainAlbum && [
                            <Box key={index} position={index} pose={props.mainAlbum ? 'exit' : 'enter'}>
                                <AlbumCard setAlbum={props.setAlbum} album={album} />
                            </Box>
                            ]
                        )
                    })
                }
            </PoseGroup>
        </Grid>
    );
}

export default withStyles({})(AlbumsList)