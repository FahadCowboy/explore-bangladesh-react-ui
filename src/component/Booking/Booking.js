import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import './Booking.css'

const Booking = () => {
   const {id} = useParams()
   const [place, setPlace] = useState({})
   useEffect(() => {
      fetch(`http://localhost:4000/places/${id}`)
      .then(res => res.json())
      .then(data => setPlace(data))
   }, [])

   const handleBooking = e => {
      e.preventDefault()
   }

   return (
      <div className="container">
         <div className="row my-5 rounded book-now-wrapper">
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
                     <input type="text" className="form-control mb-4" id="placeName"  placeholder="Drop place name"/>
                     <label for="placeName" className="form-label">Place name</label>
                  </div>
                  <div className="form-floating pb-3">
                     <input type="text" className="form-control mb-4" id="yourName" placeholder="Drop your name"/>
                     <label for="yourName" className="form-label">Your name</label>
                  </div>
                  <div className="form-floating pb-3">
                     <input type="email" className="form-control mb-4" id="yourEmail" placeholder="Drop your email"/>
                     <label for="yourEmail" className="form-label">Email</label>
                  </div>
                  <div className="form-floating pb-3">
                     <input type="text" className="form-control mb-4" id="address" placeholder="Drop your address"/>
                     <label for="address" className="form-label">Address</label>
                  </div>
                  <div className="form-floating pb-3">
                     <input type="submit" value="Book +" class="btn btn-primary"/>
                  </div>
               </div>
            </form>
         </div>
      </div>
   );
};

export default Booking;