import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import './Header.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'

const Header = () => {
   const {user, logOut} = useAuth()

   return (
   <nav className="container-fluid px-0 navbar navbar-expand-lg theme-bg">
      <div className="container">
         <Link className="navbar-brand m-0" to="/home">
            <p className="logo">Explore <span className="text-danger logo">B</span><span className="text-success logo">D</span></p>
         </Link>
         <button className="navbar-toggler p-1 pt-0" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon text-white w-auto h-auto fs-1" ><FontAwesomeIcon icon={faBars} /></span>
         </button>
         <div className="collapse navbar-collapse justify-content-between" id="navbarSupportedContent">
            <ul className="navbar-nav menu-wrapper justify-content-center mb-2">
               <li className="nav-item">
                  <Link className="nav-link text-white link-font-weight" to="/home">Home</Link>
               </li>
               <li className="nav-item ms-5">
                  <Link className="nav-link text-white link-font-weight" to="/orders">Orders</Link>
               </li>
               <li className="nav-item ms-5">
                  <Link className="nav-link text-white link-font-weight" to="/allOrders">Manage Orders</Link>
               </li>
               <li className="nav-item ms-5">
                  <Link className="nav-link text-white link-font-weight" to="/addPlace">Add new place</Link>
               </li>
            </ul>
            {
             user ? 
               <div className="d-flex">
                  <div className="user-img-wrap me-2">
                     <img src={user.photoURL} className="w-100" alt="" />
                  </div>
                  <div className="user-name-email text-white d-flex flex-column justify-content-around">
                     <h5 className="user-name mb-0">{user.displayName}</h5>
                     <p className="user-email mb-0">{user.email}</p>
                  </div>
                  <div className="logout-btn-wrap d-flex align-items-center ms-4">
                     <button type="button" onClick={logOut} className="logout-btn btn btn-outline-warning btn-sm fw-bold">Log out</button>
                  </div>
               </div>
                :
               <div className="text-end">
                  <Link to="/login" className="btn btn-outline-light me-2">Login</Link>
               </div>
            }
            
         </div>
      </div>

      {/* <div className="container">
         <header className="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3">
            <Link className="navbar-brand logo" to="#">
                  Explore Bangladesh
            </Link>

            <ul className="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0">
            <li><Link className="nav-link text-white link-font-weight" to="/home">Home</Link></li>
            <li><Link className="nav-link text-white link-font-weight" to="#">Link</Link></li>
            <li><Link className="nav-link text-white link-font-weight" to="#">Link</Link></li>
            <li><Link className="nav-link text-white link-font-weight" to="#">Link</Link></li>
            <li><Link className="nav-link text-white link-font-weight" to="#">Link</Link></li>
            </ul>

            <div className="col-md-3 text-end">
            <button type="button" className="btn btn-outline-primary me-2">Login</button>
            <button type="button" className="btn btn-primary">Sign-up</button>
            </div>
         </header>
      </div> */}
   </nav>



   );
};

export default Header;