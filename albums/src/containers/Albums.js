import React, { Component } from 'react'
import { connect } from 'react-redux'
import { setAlbums, clearAlbums, setAlbum} from '../initializers/actions';
import Axios from 'axios';
import AlbumsList from '../components/AlbumsList';


class Albums extends Component {

    componentDidMount() {
        //this.loadPhotos();
        if (process.env.NODE_ENV == 'production') {
            this.loadPhotos();
        } else {
            import('../data/albums').then(module => {
                console.log(module.default);
                this.props.setAlbums(module.default.albums);
            })
        }
    }

    loadPhotos() {
        Axios({
            url: 'https://photoslibrary.googleapis.com/v1/albums',
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${this.props.token}`
            }
        }).then(
            r => {
                this.props.setAlbums(r.data.albums);
            }).catch(console.log);
    }

    render() {
        return ([(this.props.mainAlbum ? this.props.mainAlbum.title : ''),
        <AlbumsList setAlbum={this.props.setAlbum} albums={this.props.albums} />]);
    }
}

const mapStateToProps = (state) => ({
    albums: state.albums,
    token: state.token,
    mainAlbum: state.mainAlbum,
});

const mapDispatchToProps = {
    setAlbums,
    clearAlbums,
    setAlbum
}

export default connect(mapStateToProps, mapDispatchToProps)(Albums);