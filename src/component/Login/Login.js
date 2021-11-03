import { GithubAuthProvider } from '@firebase/auth';
import React from 'react';
import { Link, useHistory, useLocation } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import './Login.css'

const Login = () => {

   const {user, googleSignin, gitHubLogin, isLoading, setIsLoading} = useAuth()
   const location = useLocation()
   const history = useHistory()
   const redirect_uri = location.state?.from || '/home'

//   const handleEmail = () => {
    
//   }

  const handleLogin = () => {

  }

//   const handlePassword = () => {

//   }

//   const handleEmailPaaLogin = () => {

//   }

   const handleGoogleLogin = () => {
      googleSignin()
      .then(result => {

         const {displayName, email, photoURL} = result.user

         const user = {
            name: displayName,
            email: email,
            image: photoURL,
         }

         fetch(`https://explorebd.herokuapp.com/users/${email}`)
         .then(res => res.json())
         .then(data => {
            console.log(data)
            if(data.email === undefined){
               console.log(data)
               fetch('https://explorebd.herokuapp.com/users', {
                  method: 'POST',
                  headers: {
                     'content-type': 'application/json'
                  },
                  body: JSON.stringify(user)
               })
               .then(res => res.json())
               .then(data => console.log(data))
            }
         })
         
         history.push(redirect_uri)

      })
      .finally(() => setIsLoading(false))
   }
   const handleGitHubLogin = () => {
      gitHubLogin()
      .then(result => {
         history.push(redirect_uri)
         const credential = GithubAuthProvider.credentialFromResult(result);
         const token = credential.accessToken;
     
         // The signed-in user info.
         const user = result.user;
      })

   }



   return (
      <div className="form-container d-flex justify-content-center align-items-center">
         <div className="form-wrapper theme-bg bg-white p-4 border border-light">
            <h2 className="text-white text-center">Login your account</h2>
            <form onSubmit={handleLogin} className="">
               {/* <div className="mb-3">
                  <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                  <input onBlur={handleEmail} type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" required/>
               </div>
               <div className="mb-3">
                  <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                  <input onBlur={handlePassword} type="password" className="form-control" id="exampleInputPassword1" required/>
               </div>
               <div className="mb-3 form-check">
                  <input type="checkbox" className="form-check-input" id="exampleCheck1" required/>
                  <label className="form-check-label" htmlFor="exampleCheck1">Keep me logged in</label>
               </div> */}
               <div className="d-flex flex-column">
                  {/* <button type="submit" className="btn btn-primary" onClick={handleEmailPaaLogin}>Login</button> */}
                  <button type="button" className="btn btn-outline-warning mt-2" onClick={handleGoogleLogin}>Login with Goole</button>
                  {/* <button type="button" className="btn btn-outline-warning mt-2" onClick={handleGitHubLogin}>Login with GitHub</button> */}
                  {/* <Link to="/signup" className="mt-2">but Not registered yet?</Link> */}
               </div>
            </form>
         </div>
      </div>
   );
};
export default Login;