import React from 'react';
import { Link } from 'react-router-dom';
import './Order.css'

const Order = ({prop}) => {
   const {_id, place, name, email, image, address} = prop
   console.log(prop)
   const handleOrderDelete = () => {
      fetch(`http://localhost:4000/orders/${_id}`, {
         method: 'DELETE'
      })
      .then(res => res.json())
      .then(data => {
         if(data.deletedCount === 1) {
            
         }
      })
   }
   return (
      <div className="card mb-3 border-0" style={{maxWidth: "540px"}}>
         <div className="row g-0">
            <div className=" col-12 col-lg-6">
               <img src={image} className="img-fluid rounded-start" alt="..."/>
            </div>
            <div className=" col-12 col-md-6 col-lg-6 text-white theme-bg rounded-end">
               <div className="card-body order-wrapper">
                 <h5 className="card-title mb-1 ">{place}</h5>
                  <p className="card-text mb-1 ">{name}</p>
                  <p className="card-text mb-1 ">{email}</p>
                  <p className="card-text mb-1 ">{address}</p>
               </div>
               <div>
                  <button onClick={handleOrderDelete} type="button" className="logout-btn btn btn-outline-warning btn-sm fw-bold">Log out</button>
               </div>
            </div>
         </div>
      </div>
   );
};



export default Order;