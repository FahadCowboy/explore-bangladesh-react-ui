import React, { useEffect, useState } from 'react';
import Place from '../Place/Place';
import './Home.css'

const Home = () => {
   const [places, setPlaces] = useState([])
   useEffect(() => {
      fetch('http://localhost:4000/places')
      .then(res => res.json())
      .then(data => setPlaces(data))
   }, [])
   return (
      <div className="container">
         <div className="pt-5">
            <h1 className="places-headding pb-4 text-center theme-text">Amazing places to visit</h1>
            <div className="row justify-content-center g-lg-3 g-md-1">
            {
               places.map(place => <Place key={place._id} prop={place}></Place>)
            }
            </div>

         </div>
      </div>
   );
};

export default Home;