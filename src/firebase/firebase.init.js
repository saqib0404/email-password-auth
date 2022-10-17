// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBx2N-d9jbCPuP8OSN_DkfK7zGWVZLTAG8",
    authDomain: "email-password-auth-a9c70.firebaseapp.com",
    projectId: "email-password-auth-a9c70",
    storageBucket: "email-password-auth-a9c70.appspot.com",
    messagingSenderId: "424081610981",
    appId: "1:424081610981:web:43e6779303fc686abc9c0c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;