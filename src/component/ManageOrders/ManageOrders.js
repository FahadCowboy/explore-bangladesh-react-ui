import React, { useEffect, useState } from 'react';
import './ManageOrders.css'

const ManageOrders = () => {
   const [orders, setOrders] = useState([])

   useEffect(() => {
      fetch(`https://explorebd.herokuapp.com/orders`)
      .then(res => res.json())
      .then(data => setOrders(data))
   }, [])

   const handleOrderDelete = id => {
      const isAgreeToDelete = window.confirm('Are you agree to cancell this order?')
      if(isAgreeToDelete){
         fetch(`https://explorebd.herokuapp.com/orders/${id}`, {
            method: 'DELETE'
         })
         .then(res => res.json())
         .then(data => {
            if(data.deletedCount === 1) {
               const filterdOrders = orders.filter(order => order._id !== id)
               setOrders(filterdOrders)
            }
         })
      }
   }

   const handleOrderConfirm = () => {

   }

   return (
      <div className="container d-flex flex-column align-items-center my-5">
         <h1 className="orders-headding pb-4 text-center theme-text">Manage all the orders</h1>
         {
            orders.map(order => (
               <div key={order._id} className="card mb-3 border-0" style={{maxWidth: "700px"}}>
                  <div className="row g-0 theme-bg">
                     <div className=" col-5 col-md-6">
                        <img src={order.image} className="h-100 img-fluid rounded-start" alt="..."/>
                     </div>
                     <div className="col-7 col-md-6 text-white theme-bg rounded-end d-flex flex-column justify-content-between">
                        <div className="card-body order-wrapper pb-0">
                           <h5 className="card-title mb-1 ">{order.place}</h5>
                           <p className="card-text mb-1">{order.name}</p>
                           <p className="card-text mb-1 d-none d-sm-block">{order.email}</p>
                           <p className="card-text mb-1 d-none d-sm-block">{order.address}</p>
                        </div>
                        <div className="ms-auto me-3 mb-3">
                           <button onClick={() => handleOrderConfirm(order._id)} type="button" className="logout-btn btn btn-outline-info btn-sm fw-bold me-2">Confirm</button>
                           <button onClick={() => handleOrderDelete(order._id)} type="button" className="logout-btn btn btn-outline-warning btn-sm fw-bold">Cancel</button>
                        </div>
                     </div>
                  </div>
               </div>
            ))
         }
      </div>
   );
};



export default ManageOrders;