import React from 'react';

const ProductCard = ({productOption}) => {
    const{img,name,details,location, resalePrice, originalPrice, use }= productOption;
    return (
        <div className='mb-20'>
            <div className="card shadow-xl h-full w-11/12 mx-auto">
               <figure><img className='w-11/12 h-80 rounded-lg' src={img} alt="Shoes" /></figure>
              <div className="card-body">
                   <h2 className="card-title">{name}</h2>
                   <p>{details}</p>
                   <p>Location : {location}</p>
                   <p>Resale Price: <span className='text-orange-600'>{resalePrice}</span></p>
                   <p>Original Price : <span className='text-orange-600'>{originalPrice}</span></p>
                   <p>Use : {use} </p> 
                   
                   <div className="card-actions justify-end">
                      <label htmlFor="carBooking-Modal"
                       className="btn btn-primary"
                       >Buy Now</label>
                   </div>
              </div>
            </div>
        </div>
    );
};

export default ProductCard;