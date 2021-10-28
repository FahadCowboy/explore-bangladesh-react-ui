import React from 'react';
import { Link } from 'react-router-dom';
import './Login.css'

const Login = () => {

  const handleEmail = () => {
    
  }

  const handleLogin = () => {

  }

  const handlePassword = () => {

  }

  const handleEmailPaaLogin = () => {

  }

  const handleGoogleLogin = () => {

  }



   return (
      <div className="form-container d-flex justify-content-center align-items-center">
         <div className="form-wrapper bg-white p-4 border border-light">
            <h2 className="text-primary">Login your account</h2>
            <form onSubmit={handleLogin} className="">
               <div className="mb-3">
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
               </div>
               <div className="d-flex flex-column">
                  <button type="submit" className="btn btn-primary" onClick={handleEmailPaaLogin}>Login</button>
                  <button type="button" className="btn btn-outline-warning mt-2" onClick={handleGoogleLogin}>Login with Goole</button>
                  <Link to="/signup" className="mt-2">but Not registered yet?</Link>
               </div>
            </form>
         </div>
      </div>
   );
};
export default Login;