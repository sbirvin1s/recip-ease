/*========== EXTERNAL MODULES ==========*/
import axios from 'axios';
import { initializeApp } from "firebase/app";
import 'firebase/auth';

/*========== INTERNAL MODULES ==========*/


// Import the functions you need from the SDKs you need
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: axios.get('auth/firebaseAPI'),
  authDomain: axios.get('auth/firebaseDomain'),
  projectId: axios.get('auth/firebaseProjectID'),
  storageBucket: axios.get('auth/firebaseStorage'),
  messagingSenderId: axios.get('auth/firebaseMessageID'),
  appId: axios.get('auth/firebaseAppID')
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


/*========== EXPORTS ==========*/
export const auth = app.auth();
export default app;

/*========== STYLES ==========*/