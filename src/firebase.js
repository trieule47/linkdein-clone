import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyBvEhZ3i1kuf3ElE33JxuoZDXvdh9PQm8M",
    authDomain: "linkedin-clone-2a9e8.firebaseapp.com",
    projectId: "linkedin-clone-2a9e8",
    storageBucket: "linkedin-clone-2a9e8.appspot.com",
    messagingSenderId: "409448999097",
    appId: "1:409448999097:web:72d333c7ffea9cb79d9368"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
 
export { db, auth };