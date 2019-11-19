import firebase from './Firebase'
var db = firebase.firestore();

db.enablePersistence().catch(function(err) {
    if (err.code == 'failed-precondition') {
        console.log('error')
        // Multiple tabs open, persistence can only be enabled
        // in one tab at a a time.
        // ...
    } else if (err.code == 'unimplemented') {
        console.log('error')
        // The current browser does not support all of the
        // features required to enable persistence
        // .
    }
});

export default db;
