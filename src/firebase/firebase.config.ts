import { FirebaseOptions } from "firebase/app";
const firebaseOptions: FirebaseOptions = {
    apiKey: process.env.REACT_APP_API_KEY,
    authDomain: process.env.REACT_APP_AUTH_DOMAIN,
    projectId: process.env.REACT_APP_PROJECT_ID,
    storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
    measurementId: process.env.REACT_APP_MEASUREMENT_ID,
    appId: process.env.REACT_APP_APP_ID,
    messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
};

export default firebaseOptions;