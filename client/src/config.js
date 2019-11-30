import * as firebase from "firebase";
    const config = {
        apiKey: process.env.REACT_APP_firebase_apiKey,
        authDomain: process.env.REACT_APP_firebase_authDomain,
        databaseURL: process.env.REACT_APP_firebase_databaseURL,
        storageBucket: process.env.REACT_APP_firebase_storageBucket
    };
    if (!firebase.apps.length) {
    firebase.initializeApp(config);
    }

    