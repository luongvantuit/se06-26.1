import { initializeApp, FirebaseApp } from "firebase/app";
import firebaseOptions from "./firebase.config";

const firebaseApp: FirebaseApp = initializeApp(firebaseOptions);

export default firebaseApp;