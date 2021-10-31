import axios from 'axios';
import React from 'react';
import { useForm } from 'react-hook-form';
import './AddPlace.css'

const AddPlace = () => {

   const { register, handleSubmit, reset } = useForm();
   const onSubmit = data => {
      console.log(data)
      axios.post('https://explorebd.herokuapp.com/places', data)
         .then(function (response) {
            if(response.data.insertedId){
               alert('A new place is successfully added.')
               console.log(response);
               reset()
            }
         })
         .catch(function (error) {
            console.log(error);
         })
   };

   return (
      <div className="container d-flex justify-content-center my-5">
         <form onSubmit={handleSubmit(onSubmit)} className="col-12 col-md-12 py-5 col-lg-5 p-4 text-center theme-bg d-flex flex-column justify-content-center rounded">
            <h2 className="text-white mb-5">Book a cottage</h2>
            <div>
               <div className="form-floating pb-3">
                  <input type="text" {...register("name")} className="form-control mb-4" id="placeName" placeholder="Drop place name"/>
                  <label htmlFor="placeName" className="form-label">Place name</label>
               </div>
               <div className="form-floating pb-3">
                  <input type="text" {...register("image")} className="form-control mb-4" id="yourEmail" placeholder="Drop image uri" />
                  <label htmlFor="yourEmail" className="form-label">Image URI</label>
               </div>
               <div className="form-floating pb-3">
                  <textarea type="text" {...register("description")} rows="5" className="form-control h-none mb-4" id="address" placeholder="Drop description"/>
                  <label htmlFor="address" className="form-label">Description</label>
               </div>
               <div className="form-floating pb-3">
                  <input type="submit" value="Book +" className="btn btn-primary"/>
                  
               </div>
            </div>
         </form>
      </div>
   );
};

export default AddPlace;