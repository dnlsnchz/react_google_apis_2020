import React, { Component } from 'react';
import firebase from '../initializers/firebase';

import { connect } from 'react-redux';
import { saveToken, clearToken } from '../initializers/actions';
import AuthElements from '../components/AuthElements';



class Login extends Component {
    constructor(props) {
        super(props);
        this.login = this.login.bind(this);
        this.logout = this.logout.bind(this);


    }
    logout() {
        firebase.auth().signOut().then(() => {
            this.props.clearToken();
        }).catch(console.log);
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
            <AuthElements
                login={this.login}
                logout={this.logout}
                user={this.props.user}
            />
        )
    }
}
const mapStateToProps = (state) => {
    return {
        token: state.token,
        user: state.user,
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