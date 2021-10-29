import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'

const Header = () => {
   return (
   <nav class="container-fluid px-0 navbar navbar-expand-lg theme-bg bg-primary">
      <div class="container">
         <Link class="navbar-brand logo" to="#">
            Explore Bangladesh
         </Link>
         <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
         </button>
         <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
               <li class="nav-item">
                  <Link class="nav-link text-white link-font-weight" to="/home">Home</Link>
               </li>
               <li class="nav-item">
                  <Link class="nav-link text-white link-font-weight" to="#">Link</Link>
               </li>
               <li class="nav-item">
                  <Link class="nav-link text-white link-font-weight" to="#">Link</Link>
               </li>
               <li class="nav-item">
                  <Link class="nav-link text-white link-font-weight" to="#">Link</Link>
               </li>
               <li class="nav-item">
                  <Link class="nav-link text-white link-font-weight" to="#">Link</Link>
               </li>
            </ul>
            <form class="d-flex">
               <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
               <button class="btn btn-outline-success" type="submit">Search</button>
            </form>
         </div>
      </div>
   </nav>
   );
};

export default Header;