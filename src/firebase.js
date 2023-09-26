// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import firebase from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCCY_GHbsjqdnee01MaCuZ_xgcivGTUFoM",
    authDomain: "freaking-fit-v2.firebaseapp.com",
    projectId: "freaking-fit-v2",
    storageBucket: "freaking-fit-v2.appspot.com",
    messagingSenderId: "614374729494",
    appId: "1:614374729494:web:463bddcf018586d0279237",
    measurementId: "G-KW7GG5LM63",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = firebase.auth();
export const firestore = firebase.firestore();
