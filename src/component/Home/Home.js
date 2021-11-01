import React, { useEffect, useState } from 'react';
import Place from '../Place/Place';
import './Home.css'

// HashLoader
import { css } from "@emotion/react";
import HashLoader from "react-spinners/HashLoader";
import Footer from '../Footer/Footer';

// Can be a string as well. Need to ensure each key-value pair ends with ;
const override = css`
  display: block;
  margin: 0 auto;
  border-color: red;
`;

const Home = () => {
   const [places, setPlaces] = useState([])
   
   // HashLoader states
   let [loading, setLoading] = useState(true);
   let [color, setColor] = useState("#3a206e");

   let dataBsSlide = 0
   let ariaLabelCounter = 1 

   console.log(places)
   useEffect(() => {
      fetch('https://explorebd.herokuapp.com/places')
      .then(res => res.json())
      .then(data => setPlaces(data))
   }, [])





   



   return (
      <>
      { places.length === 0 ? 
         <div className="sweet-loading loader-parent">
            <HashLoader color={color} loading={loading} css={override} size={150} />
         </div>

      :

      <>
      <div className="container-fluid theme-bg pb-3">
         <div id="carouselExampleIndicators" className="container carousel slide slider-parent" data-bs-ride="carousel">
            <div className="carousel-indicators">
               {
                  places.map(place => <button key={place._id} type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to={`${dataBsSlide++}`} className={(places.indexOf(place) === 0 ? " active" : "" )} aria-current="true" aria-label={`Slide ${ariaLabelCounter++}`}></button>)
               }
            </div>
            <div className="carousel-inner">
               {
                  places.map(place => (
                     <div key={place._id} className={"carousel-item" + (places.indexOf(place) === 0 ? " active" : '' )}>
                        <img src={place.image} className="d-block w-100" alt="..."/>
                     </div>
                  ))
               }
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
               <span className="carousel-control-prev-icon" aria-hidden="true"></span>
               <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
               <span className="carousel-control-next-icon" aria-hidden="true"></span>
               <span className="visually-hidden">Next</span>
            </button>
         </div>
         </div>      
      
      <div className="container">
            <div className="pt-5">
               <h1 className="places-headding pb-4 text-center theme-text">Amazing places to visit</h1>
               <div className="row justify-content-center g-3 g-lg-3 g-md-2 mb-5">
               {
                  places.map(place => <Place key={place._id} prop={place}></Place>)
               }
               </div>
            </div>

            <div>
               <h1 className="places-headding pb-4 text-center theme-text">Some important info</h1>
               <div className="info-wrapper row justify-content-center">
                  <div className="col-12 col-lg-9 p-4 text-white theme-bg rounded mb-4">
                     <h3>Heath</h3>
                     <p>Public health services in Bangladesh are free for foreign tourists. Therefore, if you are in an accident, need medical attention, or have any health issues, just call the Mobile Emergency Medical Service on the toll-free number below.</p>
                     <p>Government Mobile Emergency Medical Service: 999</p>
                  </div>
                  <div className="col-12 col-lg-9 p-4 text-white theme-bg rounded mb-4">
                     <h3>Vaccination</h3>
                     <p>In order to enter Bangladesh, it is not mandatory to be vaccinated against any specific type of disease. However, your shoud be vaccinated against common diseases before the visit which is also good for your own heath security. Wherever in the world you go, you need to keep yourself protected from the diseases people carry and try to prevent speading the diseases you carry.</p>
                  </div>
                  <div className="col-12 col-lg-9 p-4 text-white theme-bg rounded mb-4">
                     <h3>Covid-19</h3>
                     <p>The world was forced to slow down due to the COVID-19 pandemic. However, as vaccination advances, your next trip to Brazil can already happen!</p>
                  </div>
               </div>
            </div>
      </div>
      <Footer></Footer>
      </>
      }
      </>
   );
};

export default Home;