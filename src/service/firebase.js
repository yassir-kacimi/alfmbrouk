import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyBxSQrEL2N_hVl1_UAjwIxefi_WFch4z-w",
    authDomain: "chronomariage.firebaseapp.com",
    projectId: "chronomariage",
    storageBucket: "chronomariage.appspot.com",
    messagingSenderId: "278542700308",
    appId: "1:278542700308:web:9262d74840162ed141bc01",
    measurementId: "G-MW47Q1GJTR"
};


const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export {auth, provider};
export default db ; 