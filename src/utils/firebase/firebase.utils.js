import { initializeApp } from 'firebase/app'
import {
    getAuth,
    signInWithRedirect,
    signInWithPopup,
    GoogleAuthProvider,
} from 'firebase/auth';

import {
  getFirestore,
  doc,
  getDoc,
  setDoc
} from 'firebase/firestore'

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAAbfZr4AUHjzpDRcLKOw5QRiCW0gaFDYI",
    authDomain: "crwn-clothing-db-da5d6.firebaseapp.com",
    projectId: "crwn-clothing-db-da5d6",
    storageBucket: "crwn-clothing-db-da5d6.appspot.com",
    messagingSenderId: "793732291322",
    appId: "1:793732291322:web:d9c33e3ea0dc539a1fc743"
  };
  
  // Initialize Firebase
  const firebaseapp = initializeApp(firebaseConfig);


  const provider = new GoogleAuthProvider();

  provider.setCustomParameters({
    prompt: "select_account"
  });
  
  export const auth = getAuth();
  
  export const signInWithGooglePopup = () => signInWithPopup(auth, provider);
  //build the database using the firestore instance 
  export const db = getFirestore();
  //uses db created above to create a collection called user 
  export const createUserDocumentfromAuth = async (userAuth) => {
    const userDocRef = doc(db, 'user', userAuth.uid);
  //snapshot allows us to check whether an instance exists inside our db
    const userSnapshot = await getDoc(userDocRef);
    console.log(userSnapshot);
    console.log(userSnapshot.exists());

    if(!userSnapshot.exists()){
      const { displayName, email } = userAuth;
      const createdAt = new Date();

      try{
        await setDoc(userDocRef, {
          displayName,
          email,
          createdAt,
        });
      }catch(error){
        console.log('error creating user', error.message);
      }
    }
    return userDocRef;
  };

 
