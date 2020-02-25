import firebase from 'firebase'

const config = {
    apiKey: "AIzaSyDdxDxF9cCpBBUjdOKJOs-IcSNJ81B6KQQ",
    authDomain: "albumes-facilito-react-ca60d.firebaseapp.com",
    databaseURL: "https://albumes-facilito-react-ca60d.firebaseio.com",
    projectId: "albumes-facilito-react-ca60d",
    storageBucket: "albumes-facilito-react-ca60d.appspot.com",
    messagingSenderId: "11342757992",
    appId: "1:11342757992:web:ea4a20d4c16592c8b77bdd",
    measurementId: "G-QC4L2L2MZV"
};

firebase.initializeApp(config);

export default firebase;