import React, { Component } from 'react';
import { withStyles, Typography, Button } from '@material-ui/core';
import PhotosCarrousel from './PhotosCarrousel';


function PhotosList(props) {
    return (
        <div>
            {props.album && [
                <Typography variant="h4" component="h2" >{props.album ? props.album.title : ""}</Typography>,
                <Button>Regresar atrás</Button>,
                <Typography variant="headline" component="h2" >Fotos del álbum</Typography>,
                <Typography variant="caption" component="p" >{props.photos.length} foto(s) en este álbum</Typography>,
                <PhotosCarrousel photos={props.photos} />
            ]}
        </div>
    )
}
export default withStyles({})(PhotosList);