import React from 'react';
import { Link } from 'react-router-dom';
import { useState } from 'react';
// import useAuth from '../../hooks/useAuth';
import './Signup.css'


const Signup = () => {
   const [email, setEmail] = useState('')
   const [Password, setPassword] = useState('')
   const [name, setName] = useState('')
   const [errorPassword, setErrorPassword] = useState('')

   // const { error, registerWithEmailPassword} = useAuth()

   const handleEmail = e => {
      setEmail(e.target.value)
   }

   const handlePassword = e => {
      setPassword(e.target.value)
   }

   const handleName = e => {
      setName(e.target.value)
   }

   const handleRegistration = e => {
      e.preventDefault()

      if(Password.length < 6){
         return setErrorPassword('error')
      } else if (!/(?=.*?[A-Z])/.test(Password)) {
         return setErrorPassword('error')
      } else if(!/(?=.*?[a-z])/.test(Password)) {
         return setErrorPassword('error')
      } else if(!/(?=.*?[0-9])/.test(Password)) {
         return setErrorPassword('error')
      } else if(!/(?=.*?[#?!@$%^&*-])/.test(Password)) {
         return setErrorPassword('error')
      } else{
         setErrorPassword('')
      }
      // registerWithEmailPassword(name, email, Password)
   }

   return (
      <div className="form-container d-flex justify-content-center align-items-center">
         <div className="container form-wrapper bg-white p-4 border border-light">
            <h2 className="text-primary">Create new account</h2>
            <form onSubmit={handleRegistration} className="">
               <div className="mb-3">
                  <label htmlFor="fullName" className="form-label">Full Name</label>
                  <input onBlur={handleName} type="text" className="form-control" id="fullName" aria-describedby="fullName" required/>
               </div>
               <div className="mb-3">
                  <label htmlFor="exampleInputEmail1" className="form-label">Email</label>
                  {/* <input onBlur={handleEmail} type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" required/>
                  {
                     error === 'auth/email-already-in-use' && <p className="text-danger">{'This email already in use!'}</p>
                  } */}
               </div>
               <div className="mb-3">
                  <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                  <input onBlur={handlePassword} type="password" className="form-control" id="exampleInputPassword1" required/>
                  {
                     errorPassword && <div className="mt-3">
                        <p className="text-danger mb-0 text-small signup-pass-error">{'* Password should be at least 6 characters'}</p>
                        <p className="text-danger mb-0 text-small signup-pass-error">{'* At least one upper case'}</p>
                        <p className="text-danger mb-0 text-small signup-pass-error">{'* At least one lower case letter'}</p>
                        <p className="text-danger mb-0 text-small signup-pass-error">{'* At least one digit'}</p>
                        <p className="text-danger mb-0 text-small signup-pass-error">{'* At least one special character'}</p>
                     </div>
                  }
               </div>
               <div className="mb-3 form-check">
                  <input type="checkbox" className="form-check-input" id="exampleCheck1" required/>
                  <label className="form-check-label" htmlFor="exampleCheck1">I agree with terms and conditions</label>
               </div>
               <div className="d-flex flex-column">
                  <button type="submit" className="btn btn-primary">Sign up</button>
                     <Link to="/login" className="mt-2">Already have an account?</Link>
               </div>
            </form>
         </div>
      </div>
   );
};

export default Signup;