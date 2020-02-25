import React, { Component } from 'react';
import { AppBar, Toolbar, withStyles, Typography } from '@material-ui/core';
import Login from '../containers/Login';

class AppNav extends Component {
    render() {
        return (
            <div>
                <AppBar position="static" className={this.props.classes.nav}>
                    <Toolbar >
                        <Typography variant="h6" component="h1" className={this.props.classes.grow}>
                            Albums
                        </Typography>
                        <Login />
                    </Toolbar>
                </AppBar>
            </div>
        )
    }
}



export default withStyles({
    grow: {
        flexGrow : 1
    },
    nav: {
        color: 'white'
    }
})(AppNav);