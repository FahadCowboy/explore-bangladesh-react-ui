import { useEffect, useState } from "react";
import { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged, signOut, GithubAuthProvider } from "firebase/auth";
import initializeAuthentication from "../Firebase/firebase.init";

initializeAuthentication()

const useFirebase = () => {
   const [user, setUser] = useState(null)
   
   const auth = getAuth()
   const googleProvider = new GoogleAuthProvider();
   const gitHubProvider = new GithubAuthProvider()

   const googleSignin = () => {
      return signInWithPopup(auth, googleProvider)
   }

   const gitHubLogin = () => {
      return signInWithPopup(auth, gitHubProvider)
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
      logOut,
      setUser,
      gitHubLogin
   }
}

export default useFirebase