import React, { useEffect, useState } from 'react';
import Place from '../Place/Place';
import './Home.css'

const Home = () => {
   const [places, setPlaces] = useState([])
   let dataBsSlide = 0
   let ariaLabelCounter = 1 
   useEffect(() => {
      fetch('https://explorebd.herokuapp.com/places')
      .then(res => res.json())
      .then(data => setPlaces(data))
   }, [])
   return (
      <div className="container">
         <div id="carouselExampleIndicators" className="theme-bg carousel slide slider-parent" data-bs-ride="carousel">
            <div className="carousel-indicators">
               {
                  places.map(place => <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to={`${dataBsSlide++}`} className={(places.indexOf(place) === 0 ? " active" : "" )} aria-current="true" aria-label={`Slide ${ariaLabelCounter++}`}></button>)
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
                  <div className="col-12 col-lg-9">
                     <h3>Heath</h3>
                     <p>Public health services in Bangladesh are free for foreign tourists. Therefore, if you are in an accident, need medical attention, or have any health issues, just call the Mobile Emergency Medical Service on the toll-free number below.</p>
                     <p>Government Mobile Emergency Medical Service: 999</p>
                  </div>
                  <div className="col-12 col-lg-9">
                     <h3>Vaccination</h3>
                     <p>In order to enter Bangladesh, it is not mandatory to be vaccinated against any specific type of disease. However, your shoud be vaccinated against common diseases before the visit which is also good for your own heath security. Wherever in the world you go, you need to keep yourself protected from the diseases people carry and try to prevent speading the diseases you carry.</p>
                  </div>
                  <div className="col-12 col-lg-9">
                     <h3>Covid-19</h3>
                     <p>The world was forced to slow down due to the COVID-19 pandemic. However, as vaccination advances, your next trip to Brazil can already happen!</p>
                  </div>
               </div>
            </div>
      </div>
   );
};

export default Home;