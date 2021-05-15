import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyBfd5kqrGr4cfReciR0-PwQja03qIf9_xM",
    authDomain: "todo-app-yy.firebaseapp.com",
    projectId: "todo-app-yy",
    storageBucket: "todo-app-yy.appspot.com",
    messagingSenderId: "874518694352",
    appId: "1:874518694352:web:726c6ff44c96e607b1d1d5",
    measurementId: "G-SSYK4GHP8T"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
export default db;

