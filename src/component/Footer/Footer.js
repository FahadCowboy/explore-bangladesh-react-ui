import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import './Footer.css';
import { faFacebookF, faGithub, faInstagram, faLinkedinIn, faTwitter } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
   const {user} = useAuth()
   console.log(user)
   return (
      <div className="container-fluid footer-wrap theme-bg">
         <div className="container py-4">
            <div className="d-block d-md-flex flex-wrap justify-content-between align-items-start">
               <div className="justify-content-between mb-4" id="navbarSupportedContent">
                  <h3 className="text-warning mb-3">Navigation</h3>
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

               <div className="mb-4">
                  <h3 className="text-warning mb-3">Dev's Social</h3>
                  <div className="d-flex justify-content-between">
                     <span><FontAwesomeIcon className="text-white fs-2 me-2" icon={faInstagram}/></span>
                     <span><FontAwesomeIcon className="text-white fs-2 mx-2" icon={faFacebookF}/></span>
                     <span><FontAwesomeIcon className="text-white fs-2 mx-2" icon={faGithub}/></span>
                     <span><FontAwesomeIcon className="text-white fs-2 mx-2" icon={faLinkedinIn}/></span>
                     <span><FontAwesomeIcon className="text-white fs-2 ms-2" icon={faTwitter}/></span>
                  </div>
               </div>

               <div className="w-25 d-none d-md-block">
                  <h3 className="text-center text-warning mb-3">Hot tourist zone in Bangladesh</h3>
                  <img src="https://ik.imagekit.io/xqucpzloy5c/Explore_Bangladesh_Project/TravelMapOfBangladesh_BgD6WugfZ.jpg?updatedAt=1635689329545" className="w-25 mx-auto d-block" alt="" />
               </div>
               <div className="text-white d-flex align-items-center p-2 bg-dark rounded mb-4">
                  <div className="me-3">
                     <img className="rounded" src={user?.photoURL} alt="" />
                  </div>
                  <div className="d-flex flex-column justify-content-between">
                     <h5 className="mb-1">{user?.displayName}</h5>
                     <p className="mb-1">{user?.email}</p>
                     {user?.emailVerified ? <p className="mb-1">Google <FontAwesomeIcon className="text-info mt-2" icon={faCheckCircle}/></p> : <p>Not yet verified by Google</p>}
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
};

export default Footer;