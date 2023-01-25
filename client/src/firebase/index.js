/*========== EXTERNAL MODULES ==========*/
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';

/*========== INTERNAL MODULES ==========*/

const firebaseConfig = {
  apiKey:"AIzaSyCNzX85xIaph3O0JNtZxEC3onFHv_ylZLI",
  authDomain:"recip-ease-23b62.firebaseapp.com",
  projectId:"recip-ease-23b62",
  storageBucket:"recip-ease-23b62.appspot.com",
  messagingSenderId:"449255269437",
  appId:"1:449255269437:web:af61da28dcaf02a85eb654",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

/*========== EXPORTS ==========*/
export const auth = getAuth(app);
export default app;

/*========== STYLES ==========*/