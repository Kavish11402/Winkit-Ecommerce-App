// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDlaLmOzIZCTaL8kuq3D10kOycSysRuGHw",
    authDomain: "winkit-ab377.firebaseapp.com",
    projectId: "winkit-ab377",
    storageBucket: "winkit-ab377.appspot.com",
    messagingSenderId: "637046697338",
    appId: "1:637046697338:web:89f99954950d07dc15bac3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)