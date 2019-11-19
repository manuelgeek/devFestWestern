import * as firebase from 'firebase/app'
import 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'
import 'firebase/messaging'

var config = {

    apiKey: process.env.VUE_APP_FIREBASE_API_KEY,
    authDomain: "devfest-11a68.firebaseapp.com",
    databaseURL: "https://devfest-11a68.firebaseio.com",
    projectId: "devfest-11a68",
    storageBucket: "devfest-11a68.appspot.com",
    appId: process.env.VUE_APP_FIREBASE_APP_ID,
    messagingSenderId: process.env.VUE_APP_FIREBASE_MESSAGE_ID,

}; // 4. Get Firebase
firebase.initializeApp(config);

export default firebase