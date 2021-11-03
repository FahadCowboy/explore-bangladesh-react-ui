import { useEffect, useState } from "react";
import { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged, signOut, GithubAuthProvider, getIdToken } from "firebase/auth";
import initializeAuthentication from "../Firebase/firebase.init";

initializeAuthentication()

const useFirebase = () => {
   const [user, setUser] = useState(null)
   const [isLoading, setIsLoading] = useState(true)
   
   const auth = getAuth()
   const googleProvider = new GoogleAuthProvider();
   const gitHubProvider = new GithubAuthProvider()

   const googleSignin = () => {
      setIsLoading(true)
      return signInWithPopup(auth, googleProvider)
   }

   const gitHubLogin = () => {
      return signInWithPopup(auth, gitHubProvider)
   }


   const logOut = () => {
      setIsLoading(true)
      signOut(auth)
      .then(() => {
      })
      .finally(() => setIsLoading(false))
   }

   useEffect(() => {
      onAuthStateChanged(auth, (user) => {
         if (user) {
            getIdToken(user)
            .then(idToken => localStorage.setItem("idToken", idToken))

            setUser(user)
         } else {
            setUser(null)
         }
         setIsLoading(false)
       })
   }, [user])

   return{
      user,
      googleSignin,
      logOut,
      setUser,
      gitHubLogin,
      isLoading,
      setIsLoading
   }
}

export default useFirebase