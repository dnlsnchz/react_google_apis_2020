import React from 'react';
import Button from '@material-ui/core/Button'
import { Avatar, withStyles, IconButton } from '@material-ui/core';
import ExitToApp from '@material-ui/icons/ExitToApp';

const AuthElements = function (props) {
    console.log(props);
    const logInButton = () => {
        if (props.user) return (
            [<Avatar src={props.user.providerData[0].photoURL} />,
            (<IconButton color="inherit" onClick={props.logout}> <ExitToApp /></IconButton>)]
        );
        return (<Button variant="contained" onClick={props.login}>
            Iniciar Sesion con Google
              </Button>);
    }

    return (
        <div className={props.classes.container}>
            <p>{props.token}</p>
            {logInButton()}
        </div>
    )
}
export default withStyles({
    container: {
        display: 'flex',
        flexDirection: 'row'
    }
})(AuthElements);