import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyDo8LmzwheyvLmKlm3XiRF1_Ba8uRcAtX0",
    authDomain: "fooddel-999fb.firebaseapp.com",
    projectId: "fooddel-999fb",
    storageBucket: "fooddel-999fb.appspot.com",
    messagingSenderId: "339803020493",
    appId: "1:339803020493:web:f82501182edda80ebb9d84"
  };
  
!firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app();

export default firebase;