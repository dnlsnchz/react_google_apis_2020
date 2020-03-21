import React, { Component } from 'react';
import './App.css';
import Button from '@material-ui/core/Button'
import { withStyles } from '@material-ui/core';
import Login from './containers/Login';
import AppNav from './components/AppNav';
import Albums from './containers/Albums';


class App extends Component {
    
    render() {
        return (
            <div className="App">
                <AppNav />
                <Albums />
            </div>
        );
    }
}


export default withStyles({
    button: {
        backgroundColor: 'red'
    },
    sombra: {
        boxShadow : '0px 0px 5px rgba(0,0,0,0.5)'
    }
})(App);
