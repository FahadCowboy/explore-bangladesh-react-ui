import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import './Footer.css';

const Footer = () => {
   const {user} = useAuth()
   console.log(user)
   return (
      <div className="container-fluid footer-wrap theme-bg">
         <div className="container py-4">
            <div className="row align-items-center">
               <div className="col-12 col-lg-4 justify-content-between" id="navbarSupportedContent">
                  <ul className="navbar-nav mb-2 pe-lg-5">
                     <li className="nav-item">
                        <Link className="nav-link p-0 pb-2 text-white link-font-weight" to="/home">Home</Link>
                     </li>
                     <li className="nav-item">
                        <Link className="nav-link p-0 pb-2 text-white link-font-weight" to="/orders">Orders</Link>
                     </li>
                     <li className="nav-item">
                        <Link className="nav-link p-0 pb-2 text-white link-font-weight" to="/allOrders">Manage Orders</Link>
                     </li>
                     <li className="nav-item">
                        <Link className="nav-link p-0 pb-2 text-white link-font-weight" to="/addPlace">Add new place</Link>
                     </li>
                     <li className="nav-item">
                        <Link className="nav-link p-0 pb-2 text-white link-font-weight" to="#">Link</Link>
                     </li>
                  </ul>
               </div>
               <div className="col-12 col-lg-4 ">
                  <h4 className="text-center text-white">Hot tourist zone in Bangladesh</h4>
                  <img src="https://ik.imagekit.io/xqucpzloy5c/Explore_Bangladesh_Project/TravelMapOfBangladesh_BgD6WugfZ.jpg?updatedAt=1635689329545" className="w-25 mx-auto d-block" alt="" />
               </div>
               <div className="col-12 col-lg-4 text-white d-flex align-items-center p-2 bg-dark rounded">
                  <div className="me-3">
                     <img className="rounded" src={user?.photoURL} alt="" />
                  </div>
                  <div>
                     <h5 className="mb-1">{user?.displayName}</h5>
                     <p className="mb-1">{user?.email}</p>
                     <p className="mb-1">{user?.emailVerified ? "Google verified user" : "Not yet verified by Google"}</p>
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
};

export default Footer;