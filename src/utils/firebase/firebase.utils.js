import { initializeApp } from "firebase/app";
import { getAuth, signInWithRedirect, signInWithPopup, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyBTjkC3vzmRPEnmR7i7uK5MZ5Mxp15dFpI",
    authDomain: "e-shop-db-92dfb.firebaseapp.com",
    projectId: "e-shop-db-92dfb",
    storageBucket: "e-shop-db-92dfb.appspot.com",
    messagingSenderId: "111341008250",
    appId: "1:111341008250:web:0e56f357cb18905c87d2c3"
  };
  
  // Initialize Firebase
  const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();

provider.setCustomParameters({
    prompt: 'select_account',
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);



