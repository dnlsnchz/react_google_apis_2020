import React, { Component } from 'react';
import Button from '@material-ui/core/Button'
import firebase from './initializers/firebase';
import { Avatar, withStyles, IconButton } from '@material-ui/core';
import ExitToApp from '@material-ui/icons/ExitToApp';

import { connect } from 'react-redux';
import { saveToken, clearToken } from './initializers/actions';

class Login extends Component {
    constructor(props) {
        super(props);
        this.login = this.login.bind(this);
        this.logout = this.logout.bind(this);

        this.state = {
            userLoggedIn: false,
            photoURL: ''
        }
    }
    componentDidMount() {
        firebase.auth().onAuthStateChanged((user) => {
            console.log(user);
            if (user) {
                this.setState({
                    userLoggedIn: true,
                    photoURL: user.providerData[0].photoURL,
                })
            } else {
                this.setState({
                    userLoggedIn: false,
                    photoURL: '',
                })
            }
        })
    }
    logout() {
        firebase.auth().signOut().then(() => {
            this.props.clearToken();
        }).catch(console.log);
    }
    logInButton() {
        if (this.state.userLoggedIn) return (
            [<Avatar src={this.state.photoURL} />, (<IconButton color="inherit" onClick={this.logout}> <ExitToApp /></IconButton>)]
        );
        return (<Button variant="contained" onClick={this.login}>
            Iniciar Sesion con Google
              </Button>);
    }
    login() {
        let provider = new firebase.auth.GoogleAuthProvider();
        provider.addScope('https://www.googleapis.com/auth/photoslibrary.readonly');

        firebase.auth().signInWithPopup(provider).then(result => {
            let token = result.credential.accessToken;
            console.log(token);

            this.props.saveToken(token);
        }).catch(err => {
            console.log(err);
        });
    }
    render() {
        return (
            <div >
                <p>{this.props.token}</p>
                {this.logInButton()}
            </div>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        token: state.token
    }
}
//const saveToken = (token) => {
//    return {
//        type: 'SET_TOKEN',
//        token
//    }
//}
const mapDispatchToProps = {
    saveToken,
    clearToken
}
export default connect(mapStateToProps,mapDispatchToProps )(Login)
//export default withStyles({
//    container: {className={this.props.classes.container}>
//        display: 'flex',
//        flexDirection: 'row'
//    }
//})(Login);