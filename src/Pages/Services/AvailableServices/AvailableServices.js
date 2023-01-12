import { useQuery } from '@tanstack/react-query';
import CarBookingModal from '../CarBookingModal/CarBookingModal';
// import React, { useEffect, useState } from 'react';
import ServicesOptions from './ServicesOptions';

const AvailableServices = () => {
    // const [servicesOptions, setServicesOptions] = useState([]);

    const {data:servicesOptions  = []} = useQuery({
        queryKey:['categories'],
        queryFn: async()=> {
            const res = await  fetch('https://cars-resale-market-server.vercel.app/categories')
            const data = await res.json();
            return data;
        }
         
    })

    // useEffect(() =>{
    //     fetch('https://cars-resale-market-server.vercel.app/categories')
    //     .then(res => res.json())
    //     .then(data => setServicesOptions(data))
    // },[])


    return (
        <div className='w-11/12 mx-auto mt-8 bg-base-100'>
            <p className='text-center text-orange-700 font-extrabold text-5xl mt-8 mb-8'>Available Services </p>
            <div className='grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                {
                    servicesOptions.map(option => <ServicesOptions
                    key = {option._id}
                    servicesOption ={option}
                    ></ServicesOptions>)
                }
            </div>
            <CarBookingModal></CarBookingModal>
        </div>
    );
};

export default AvailableServices;