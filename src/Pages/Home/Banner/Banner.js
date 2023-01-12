import React from 'react';
import car from '../../../assets/images/car.jpeg'

const Banner = () => {
    return (
      <div className="hero bg-slate-100 w-11/12 mx-auto mt-8">
        <div className="hero-content flex-col lg:flex-row">
          <img src={car} className="rounded-lg lg:w-1/2 shadow-2xl mt-20" alt='' />
          <div className='px-6'>
            <h1 className='text-5xl font-extrabold text-orange-400 ' >Advertisement Feature</h1>
            <h1 className="text-4xl gap-x-8 font-bold mt-4">What really makes <br />
            a good family car?</h1>
            <p className="mt-4">Image result for car details
            Automotive detailing goes beyond the kind of simple cleaning your car might get from driving through the rollers at a car wash. Detailing doesn't include paintwork or body repairs, but involves cleaning, restoring and finishing every individual part or surface of the car as much as possible.</p>
            <button className='btn btn-primary rounded-xl mt-4'>Getting Started</button>
          </div>
        </div>
      </div>
    );
};

export default Banner;