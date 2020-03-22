import React, { useState} from 'react'
import { Card, withStyles, CardMedia, CardContent, Typography } from '@material-ui/core'
import posed from 'react-pose';

const Box = posed.div({
	open: {
		opacity: 1,
		height : 'auto'
	},
	close: {
		opacity: 0,
		height: 0
	}
});

function AlbumCard(props) {
	const [showAlbums, setShowAlbums] = useState(false);

	setTimeout(() => setShowAlbums(true), 3000);
	return (
		<Box pose={showAlbums ? 'open' : 'close'}>
		<Card className={props.classes.item} onClick={() => props.setAlbum(props.album)}>
			<CardMedia className={props.classes.media} image={props.album.coverPhotoBaseUrl} />
			<CardContent>
				<Typography variant="h5" component="h2" glutterBottom>{props.album.title} </Typography>
				<Typography component="p" >{props.album.mediaItemsCount} foto(s)</Typography>
			</CardContent>
			</Card>
		</Box>
	);
}
export default withStyles({
	item: {
		minWidth: '350px',
		margin: '1em',
		boxSizing: 'border-box'
	},
	media: {
		minHeight: '200px'
	}
})(AlbumCard)