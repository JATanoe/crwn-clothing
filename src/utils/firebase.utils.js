// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app"
import {
   getAuth,
   signInWithPopup,
   signInWithRedirect,
   GoogleAuthProvider,
} from "firebase/auth"
import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore"

// Your web app's Firebase configuration
const firebaseConfig = {
   apiKey: "AIzaSyDKeV7Nhc_JQuwEQWuk8-dX3AEwhjR8U5w",
   authDomain: "crwn-clothing-db-bb531.firebaseapp.com",
   projectId: "crwn-clothing-db-bb531",
   storageBucket: "crwn-clothing-db-bb531.firebasestorage.app",
   messagingSenderId: "344907490900",
   appId: "1:344907490900:web:e2f5eaa9a62f63fcb7afc1",
}

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig)

const provider = new GoogleAuthProvider()

provider.setCustomParameters({
   prompt: "select_account",
})

export const auth = getAuth()
export const signInWithGooglePopup = () => signInWithPopup(auth, provider)

export const db = getFirestore()

export const createUserDocumentFromAuth = async (userAuth) => {
   const userDocRef = doc(db, "users", userAuth.uid)

   console.log(userDocRef)

   const userSnapshot = await getDoc(userDocRef)
   console.log(userSnapshot)
   console.log(userSnapshot.exists())

   if (!userSnapshot.exists()) {
      const { displayName, email } = userAuth
      const createdAt = new Date()

      try {
         await setDoc(userDocRef, { displayName, email, createdAt })
      } catch (error) {
         console.log("Error creating the user", error.message)
      }
   }

   return userDocRef
}
