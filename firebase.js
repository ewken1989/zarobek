// Import the functions you need from the SDKs you need
import firebase from 'firebase/app';
import "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCByhh30Eiy4zqjoFxxIvu-XT_MzDFANWc",
  authDomain: "ewken1989-5ffb2.firebaseapp.com",
  projectId: "ewken1989-5ffb2",
  storageBucket: "ewken1989-5ffb2.appspot.com",
  messagingSenderId: "199457950832",
  appId: "1:199457950832:web:587605152d912afc7ff8b5"
};

// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();

export default db;