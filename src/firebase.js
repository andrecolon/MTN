// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyBMZiTdIW31WbiBApRwTkJbw4tZcHCaS1A",
    authDomain: "mtn--men-s-torah-network.firebaseapp.com",
    projectId: "mtn--men-s-torah-network",
    storageBucket: "mtn--men-s-torah-network.appspot.com",
    messagingSenderId: "898649701566",
    appId: "1:898649701566:web:b7f97f73780d2be6d7b2ef",
    measurementId: "G-6RYHHRTL5P"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export {auth, provider};
export default db;

