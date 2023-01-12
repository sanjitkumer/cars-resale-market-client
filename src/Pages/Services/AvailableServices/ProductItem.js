import React, { useEffect, useState } from 'react';
import CarBookingModal from '../CarBookingModal/CarBookingModal';
import ProductCard from './ProductCard';

const ProductItem = () => {
    const [productOptions, setProductOption]= useState([]);

    useEffect(() =>{
        fetch('https://cars-resale-market-server.vercel.app/productItems')
        .then(res => res.json())
        .then(data => setProductOption(data))

    },[])


    return (
        <section className='w-11/12 mx-auto'>
            <p className='text-center text-orange-700 font-extrabold text-5xl mt-8 mb-8'>Available Product </p>
            <div className='grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                {
                    productOptions.map(option => <ProductCard
                        key = {option._id}
                        productOption ={option}                    
                    ></ProductCard> )
                }
            </div>
            <CarBookingModal></CarBookingModal>
        </section>
    );
};

export default ProductItem;