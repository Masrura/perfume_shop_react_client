import { initializeApp } from "firebase/app";
import firebaseConfig from "./firebase.config";
const initializeAuthentication = () => {
    initializeApp(firebaseConfig);
}
// Initialize Firebase
export default initializeAuthentication;