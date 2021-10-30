import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../hooks/useAuth';
import Order from '../Order/Order';

const Orders = () => {
   const { user } = useAuth()
   const [orders, setOrders] = useState([])
   useEffect(() => {
      fetch(`http://localhost:4000/orders/${user.email}`)
      .then(res => res.json())
      .then(data => setOrders(data))
   }, [])
   useEffect(() => {
      setOrders(orders)
   }, [orders])

   
   return (
      <div className="d-flex flex-column align-items-center my-5">
         <h1 className="pb-4 text-center theme-text">Places you have chosen till now</h1>
         {
            orders.map(order => <Order key={order._id} prop={order}></Order>)
         }
      </div>
   );
};

export default Orders;