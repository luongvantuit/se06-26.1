import { initializeApp, FirebaseApp } from "firebase/app";
import firebaseOptions from "./firebase.config";
import 'firebase/auth';
import { EmailAuthProvider, FacebookAuthProvider, GoogleAuthProvider } from "firebase/auth";

const firebaseApp: FirebaseApp = initializeApp(firebaseOptions);
export const Provider ={
    google: new GoogleAuthProvider(),
    email : new EmailAuthProvider(),
    facebook : new FacebookAuthProvider()
}

export default firebaseApp;