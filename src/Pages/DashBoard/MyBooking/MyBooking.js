import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { useContext } from 'react';
import { AuthContext } from '../../../contexts/AuthProvider';

const MyBooking = () => {
    const { user } = useContext(AuthContext);

    const url = `http://localhost:5000/carBookings?email=${user?.email}`;


    const { data: carBookings = []} = useQuery({
        queryKey:['carBookings', user?.email],
        queryFn: async () => {
            const res = await fetch(url, {
              headers: {
                authorization: `bearer ${localStorage.getItem('accessToken')}`
              }
            });
            const data = await res.json();
            return data;
        }    
    })


    return (
        <div>
            <h3 className="text-3xl">My Bookings</h3>

            <div className="overflow-x-auto">
               <table className="table w-full">
                 <thead>
                    <tr>
                    <th></th>
                     <th>Name</th>
                     <th>email</th>
                     <th>Color</th>
                     <th>Phone</th>
                    </tr>
                  </thead>
                 <tbody>
                  {
                    carBookings &&
                    carBookings?.map((carBooking, i)=> <tr key={carBooking._id}>
                    <th>{i+1}</th>
                    <td>{carBooking.name}</td>
                    <td>{carBooking.email} </td>
                    <td>{carBooking.color} </td>
                    <td>{carBooking.phone} </td>
                    </tr>  
                    )
                  }          
                 </tbody>
               </table>
           </div>
        </div>
    );
};

export default MyBooking;