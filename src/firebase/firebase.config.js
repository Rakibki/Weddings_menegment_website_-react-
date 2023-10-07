// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDcPrNCjF5wE5pIXIvSA5by3d39opOLn9Q",
  authDomain: "birthday-party-management.firebaseapp.com",
  projectId: "birthday-party-management",
  storageBucket: "birthday-party-management.appspot.com",
  messagingSenderId: "519191917914",
  appId: "1:519191917914:web:1a4387d5eb2b33a8c7ef63"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth