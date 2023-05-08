// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { getAuth } from 'firebase/auth'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyD2AFpEWBUVFBoCQIEDGZrgwtkfMOLYviQ",
    authDomain: "netflix-clone-project-22017.firebaseapp.com",
    projectId: "netflix-clone-project-22017",
    storageBucket: "netflix-clone-project-22017.appspot.com",
    messagingSenderId: "47023702684",
    appId: "1:47023702684:web:701c05aaca9dfce597a359"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp()
const db = getFirestore()
const auth = getAuth()

export default app
export { auth, db }