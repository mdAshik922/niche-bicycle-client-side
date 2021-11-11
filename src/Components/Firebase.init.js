import firebaseConfig from "./Firebase/Firebase.config";
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
const initializeFirebase = () => {
    initializeApp(firebaseConfig);
}

export default initializeFirebase;