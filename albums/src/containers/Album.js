import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setPhotos, clearPhotos, clearAlbum } from '../initializers/actions';
import axios from 'axios';
import PhotosList from '../components/PhotosList';


class Album extends Component {

    componentDidUpdate(prevProps) {
        console.log("componentDidUpdate", prevProps);
        console.log("this.props.mainAlbum", this.props.mainAlbum);
        if (this.props.mainAlbum && prevProps.mainAlbum !== this.props.mainAlbum) {
            if (process.env.NODE_ENV === "production") {
                this.loadPhotos();
            } else {
                import('../data/photos').then(module => {
                    this.props.setPhotos(module.default.mediaItems);
                })
            }

        }
    }

    loadPhotos() {
        axios({
            method: 'POST',
            url: 'https://photoslibrary.googleapis.com/v1/mediaItems:search',
            headers: {
                'Authorization': `Bearer ${this.props.token}`
            },
            data: {
                albumId: this.props.mainAlbum.id
            }
        }).then(
            r => {
                this.props.setPhotos(r.data.mediaItems);
            }).catch(console.log);
    }

    render() {
        return (<PhotosList
            clearAlbum={this.props.clearAlbum}
            clearPhotos={this.props.clearPhotos}
            album={this.props.mainAlbum}
            photos={this.props.photos}
        />);
    }
}
const mapStateToProps = (state) => ({
    mainAlbum: state.mainAlbum,
    token: state.token,
    photos: state.photos
});

const mapDispatchToProps = {
    setPhotos,
    clearAlbum,
    clearPhotos
}

export default connect(mapStateToProps, mapDispatchToProps)(Album);