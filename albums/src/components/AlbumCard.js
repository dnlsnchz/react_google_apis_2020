import React, { useState } from 'react'
import { Card, withStyles, CardMedia, CardContent, Typography } from '@material-ui/core'

function AlbumCard(props) {
	return (
		<Card  className={props.classes.item} onClick={() => props.setAlbum(props.album)}>
			<CardMedia className={props.classes.media} image={props.album.coverPhotoBaseUrl} />
			<CardContent>
				<Typography variant="h5" component="h2" glutterbottom="true">{props.album.title} </Typography>
				<Typography component="p" >{props.album.mediaItemsCount} foto(s)</Typography>
			</CardContent>
		</Card>
	);
}
export default withStyles({
	item: {
		minWidth: '350px',
		margin: '1em',
		boxSizing: 'border-box',
		cursor:'pointer'
	},
	media: {
		minHeight: '200px'
	}
})(AlbumCard)