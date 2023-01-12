import React from 'react';
import { Link } from 'react-router-dom';

const ServicesOptions = ({servicesOption }) => {
    const {title,img, name, details, location, resalePrice, originalPrice, use} =servicesOption ;
    return (
        <div className="card  shadow-xl">
        <figure><img className='w-11/12 h-80 rounded-lg' src={img} alt="Shoes" /></figure>
        <div className="card-body">
          <h2 className="card-title">{title}</h2>
          <p>{details}</p>
         <div className='flex justify-between items-center '>
            <div className='mt-4'>
              <p>Category: {name}</p>
              <p>LOcation : {location}</p>
              <p>Use Duration : {use}</p> 
           </div>
           <div className=''>
              <p>Sale Price : <span className='text-orange-600'>{resalePrice}</span></p>
              <p>Original Price : <span className='text-orange-600'>{originalPrice}</span></p>
           </div>      
         </div>     

          <div className="card-actions justify-center">
            <Link to='/productItem' className='text-center'>
             <button className="btn btn-primary">See all</button>            
            </Link>
          </div>
        </div>
      </div>
    );
};

export default ServicesOptions;
