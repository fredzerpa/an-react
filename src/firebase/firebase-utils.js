import * as firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyCl6v3nayRl9uWa8woTHCon3LTBxB2xEBE",
    authDomain: "geminids-dcb7b.firebaseapp.com",
    databaseURL: "https://geminids-dcb7b.firebaseio.com",
    projectId: "geminids-dcb7b",
    storageBucket: "geminids-dcb7b.appspot.com",
    messagingSenderId: "481750074053",
    appId: "1:481750074053:web:8bcafee06ac290a8a066ac",
    measurementId: "G-D67TMLGQP1"
};

export const createUserProfileDocument = async(userAuth, additionalData) => {

    if(!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`);

    const snapShot = await userRef.get();

    if (!snapShot.exists) {
        const { displayName, email } = userAuth;
        const createdAt = new Date();

        try {
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData
            });
        } catch (error) {
            console.log('error creating user', error.message);
        }
    }
    return userRef;
};

firebase.initializeApp(config);

export const auth      = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;

