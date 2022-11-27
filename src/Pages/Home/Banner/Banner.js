import React from 'react';
import car from '../../../assets/images/car.jpeg'

const Banner = () => {
    return (
        <div className="hero">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <img src={car} className="rounded-lg lg:w-1/2 shadow-2xl" alt='' />
    <div>
      <h1 className='text-2xl text-orange' >Advertisement Feature</h1>
      <h1 className="text-5xl font-bold">What really makes <br />
      a good family car?</h1>
      <p className="py-6">Image result for car details
Automotive detailing goes beyond the kind of simple cleaning your car might get from driving through the rollers at a car wash. Detailing doesn't include paintwork or body repairs, but involves cleaning, restoring and finishing every individual part or surface of the car as much as possible.</p>
      <button className='btn btn-primary rounded-xl'>Getting Started</button>
    </div>
  </div>
</div>
    );
};

export default Banner;