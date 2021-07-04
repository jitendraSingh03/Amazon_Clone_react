import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyCG_N2dtfoHD4DXr6vExbCHi_cXl4Co1As",
    authDomain: "react-clone-e4e77.firebaseapp.com",
    projectId: "react-clone-e4e77",
    storageBucket: "react-clone-e4e77.appspot.com",
    messagingSenderId: "327216007122",
    appId: "1:327216007122:web:c228622c031f2037be2a0b",
    measurementId: "G-ZYKFVTLXH2"
};

const firebaseApp =firebase.initializeApp(firebaseConfig);

const db=firebaseApp.firestore();
const auth=firebase.auth();


export {db,auth};

