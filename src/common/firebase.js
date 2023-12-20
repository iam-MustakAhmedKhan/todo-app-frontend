// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import {GoogleAuthProvider,getAuth,signInWithPopup} from "firebase/auth"

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyABjy5raaH6o3rCwT8GxQ3sLq-eS-GHa7Q",
    authDomain: "todo-app-cfc31.firebaseapp.com",
    projectId: "todo-app-cfc31",
    storageBucket: "todo-app-cfc31.appspot.com",
    messagingSenderId: "32580486842",
    appId: "1:32580486842:web:137f740af159500f39a483",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const provider = new GoogleAuthProvider();
const auth = getAuth()

export const authUsingGoogle = () => {
    try {
        const googleAuth = signInWithPopup(auth, provider)
        
        return googleAuth
    } catch (err) {
        console.log(err);
    }
}

