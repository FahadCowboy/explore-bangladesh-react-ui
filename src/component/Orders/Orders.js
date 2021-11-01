import React, { useEffect, useState } from 'react';
import useAuth from '../../hooks/useAuth';
import './Orders.css'

// HashLoader
import { css } from "@emotion/react";
import HashLoader from "react-spinners/HashLoader";
import Footer from '../Footer/Footer';

// Can be a string as well. Need to ensure each key-value pair ends with ;
const override = css`
  display: block;
  margin: 0 auto;
  border-color: red;
  padding: 5px;
`;

const Orders = () => {
   const { user } = useAuth()
   const [orders, setOrders] = useState([])
   const [isConfirm, setIsConfirm] = useState(false)

   // HashLoader states
   let [loading, setLoading] = useState(true);
   let [color, setColor] = useState("#3a206e");

   useEffect(() => {
      fetch(`https://explorebd.herokuapp.com/orders/${user.email}`)
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

   
   return (
      <>
      { orders.length === 0 ? 
         <div className="sweet-loading loader-parent">
            <HashLoader color={color} loading={loading} css={override} size={150} />
         </div>

      :

      <>
      <div className="container d-flex flex-column align-items-center my-5">
         <h1 className="orders-headding pb-4 text-center theme-text">Places you have chosen</h1>
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
                        <div className="ms-auto me-3 mb-3 d-flex justify-content-end align-items-center">
                           {
                              order.orderStatus === true ?
                              <button className="confirmed-btn btn btn-primary p-1 btn-lg disabled" tabIndex="-1" aria-disabled="true">Confirmed</button>
                              :
                              <p className="m-0 me-2">Pending</p>

                           }
                           <button onClick={() => handleOrderDelete(order._id)} type="button" className="logout-btn btn btn-outline-warning btn-sm fw-bold">Cancel Order</button>
                        </div>
                     </div>
                  </div>
               </div>
            ))
         }
      </div>
      <Footer></Footer>
      </>
      }
      </>
   );
};

export default Orders;