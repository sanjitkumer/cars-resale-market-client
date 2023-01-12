import React from 'react';

const OurProduct = () => {
    return (
        <div className="card mt-8 mb-8 bg-slate-100 w-11/12 mx-auto shadow-xl">
            <h2 className='text-4xl text-center mt-14 font-semibold text-orange-600 bg-slate-100 w-auto mx-auto'>About Our resale market Products!!</h2>
          <figure className="px-10 pt-10">
          <img src="https://i.ytimg.com/vi/0jyYrZj7ehw/maxresdefault.jpg" alt="Shoes" className="rounded-xl" />
          </figure>
           <div className="card-body items-center text-center">
             <h2 className="card-title text-3xl font-semibold">Our Product</h2>
              <p className='w-3/4'>Resale shopping refers to buying pre-owned merchandise. Resale shopping is also commonly know as buying second-hand, buying used and re-commerce. Image result for about our resale product market
              A reseller is a business that purchases products from manufacturers, liquidators, or other retailers and then sells them to its own customers.</p>
              <div className="card-actions">
              <button className="btn btn-primary">Buy Now</button>
             </div>
           </div>
        </div>
    );
};

export default OurProduct;