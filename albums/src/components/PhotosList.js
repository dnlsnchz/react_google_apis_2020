import React, { Component } from 'react';
import { withStyles, Typography, Button } from '@material-ui/core';
import PhotosCarrousel from './PhotosCarrousel';


function PhotosList(props) {
    function clear() {
        props.clearAlbum();
        props.clearPhotos();
    }
    return (
        <div className={props.classes.topSpace}>
            {
                props.album && [
                    <Typography key="album-title" variant="h4" component="h2" >{props.album ? props.album.title : ""}</Typography>,
                    <Button key="album-back-button" onClick={clear}>Regresar atrás</Button>,
                    <Typography key="album-subtitle" variant="headline" component="h2" >Fotos del álbum</Typography>,
                    <Typography key="caption" variant="caption" component="p" >{props.photos.length} foto(s) en este álbum</Typography>,

                ]
            }
            <PhotosCarrousel photos={props.photos} />
        </div>
    )
}
export default withStyles({
    topSpace: {
        marginTop: '2em'
    }

})(PhotosList);