import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './Place.css'

const Place = props => {
   const {_id, name, image} = props.prop
   return (
      <div className="card custom-border-none text-white col-12 col-lg-4 col-md-6">
         <img src={image} className="card-img" alt=""/>
         <div className="card-img-overlay d-flex flex-column justify-content-end">
            <div className="d-flex justify-content-between">
               <h5 className="card-title mb-0 palce-name">{name}</h5>
               <Link to={`/booking/${_id}`} className="book-now-btn text-uppercase mt-1">Book now +</Link>
            </div>
         </div>
      </div>
   );
};

export default Place;