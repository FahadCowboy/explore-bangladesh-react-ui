import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import './Booking.css'

const Booking = () => {
   const { id } = useParams()
   const { user } = useAuth()
   const [place, setPlace] = useState({})

   // const [placeName, setPlaceName] = useState('')
   // const [name, setName] = useState('')
   // const [email, setEmail] = useState('')
   const [address, setAddress] = useState('')


   useEffect(() => {
      fetch(`https://explorebd.herokuapp.com/places/${id}`)
      .then(res => res.json())
      .then(data => setPlace(data))
   }, [])

   // const handlePlaceName = e => {
   //    const place = e.target.value
   //    setPlaceName(place)
   // }

   // const handleUserName = e => {
   //    const name = e.target.value
   //    setName(name)
   // }

   // const handleEmail = e => {
   //    const email = user.email
   //    setEmail(email)
   // }

   const handleAddress = e => {
      const address = e.target.value
      setAddress(address)
   }

   const handleBooking = e => {
      e.preventDefault()
      const order = {
         place: place.name,
         name: user.displayName,
         email: user.email,
         address,
         image: place.image,
         orderStatus: false
      }
      console.log(order)
      fetch('https://explorebd.herokuapp.com/orders', {
         method: 'POST',
         headers: {
            "content-type": "application/json"
         },
         body: JSON.stringify(order)
      })
      .then(res => res.json())
      .then(data => console.log(data))
      .catch(err => console.log(err))

      console.log(order)
   }

   return (
      <div className="container">
         <div className="row mx-0 my-5 rounded book-now-wrapper">
            <div className="card place-detailes-wrap mb-3 col-12 col-md-12 col-lg-8">
               <img src={place.image} className="card-img-top" alt="..."/>
               <div className="card-body">
                  <h2 className="card-title">{place.name}</h2>
                  <p className="card-text">{place.description}</p>
               </div>
            </div>
            <form onSubmit={handleBooking} className="col-12 col-md-12 py-5 col-lg-4 text-center theme-bg d-flex flex-column justify-content-center rounded-end">
               <h2 className="text-white mb-5">Book a cottage</h2>
               <div>
                  <div className="form-floating pb-3">
                     <input type="text" className="form-control mb-4" id="placeName" readOnly  value={place.name || ''} placeholder="Drop place name"/>
                     <label htmlFor="placeName" className="form-label">Place name</label>
                  </div>
                  <div className="form-floating pb-3">
                     <input type="text" className="form-control mb-4" id="yourName" readOnly value={user.displayName} placeholder="Drop your name"/>
                     <label htmlFor="yourName" className="form-label">Your name</label>
                  </div>
                  <div className="form-floating pb-3">
                     <input type="email" className="form-control mb-4" id="yourEmail" placeholder="Drop your email" readOnly value={user.email || ''}/>
                     <label htmlFor="yourEmail" className="form-label">Email</label>
                  </div>
                  <div className="form-floating pb-3">
                     <input onBlur={handleAddress} type="text" className="form-control mb-4" id="address" placeholder="Drop your address"/>
                     <label htmlFor="address" className="form-label">Address</label>
                  </div>
                  <div className="form-floating pb-3">
                     {/* <Link to="/home"> */}
                        <input type="submit" value="Book +" className="btn btn-primary"/>
                        {/* </Link> */}
                     
                  </div>
               </div>
            </form>
         </div>
      </div>
   );
};

export default Booking;