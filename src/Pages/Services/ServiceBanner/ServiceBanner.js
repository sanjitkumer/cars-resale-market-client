import React from 'react';

const ServiceBanner = () => {
    return (
        <div className="card card-side bg-base-100 w-11/12 mx-auto shadow-xl mt-16 grid lg:grid-cols-2 sm:grid-cols-1  ">
            <figure className='p-10  lg:w-full'><img src="https://thumbs.dreamstime.com/z/latest-brand-new-white-range-rover-evoque-beautiful-car-suv-nature-deep-alps-bestselling-model-wild-115177891.jpg" alt="Movie"/></figure>
           <div className="mt-8 lg:w-3/4">
            <h2 className="card-title text-center text-orange-600">Resale Car Services!!</h2>
            <p>Regardless of the age of the vehicle, we again found that Carmax is the best bet for a seller looking to get top dollar. The difference in offers is particularly pronounced for vehicles produced in the last six years, as well as those from 2009 and earlier.</p>
            <br />          
            <h2 className="card-title text-center text-orange-600">Resale cars center!!</h2>
            <p>Image result for cars is a 2006 American computer-animated sports comedy film produced by Pixar Animation Studios and released by Walt Disney Pictures.. The difference in offers is particularly pronounced for vehicles produced in the last six years, as well as those from 2009 and earlier.</p>
            </div>
        </div>
    );
};

export default ServiceBanner;