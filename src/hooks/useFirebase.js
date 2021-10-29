import { useEffect, useState } from "react";
import { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged, signOut } from "firebase/auth";
import initializeAuthentication from "../Firebase/firebase.init";

initializeAuthentication()

const useFirebase = () => {
   const [user, setUser] = useState(null)
   
   const auth = getAuth()
   const googleProvider = new GoogleAuthProvider();

   const googleSignin = () => {
      signInWithPopup(auth, googleProvider)
      .then(result => setUser(result))
   }

   const logOut = () => {
      signOut(auth)
      .then(() => {
         
      })
   }

   useEffect(() => {
      onAuthStateChanged(auth, (user) => {
         if (user) {
           setUser(user)
         } else {
            setUser(null)
         }
       })
   }, [user])

   return{
      user,
      googleSignin,
      logOut
   }
}

export default useFirebase