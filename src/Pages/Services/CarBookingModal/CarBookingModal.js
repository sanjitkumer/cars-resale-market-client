import React from 'react';
import { useContext } from 'react';
import toast from 'react-hot-toast';
import { AuthContext } from '../../../contexts/AuthProvider';

const CarBookingModal = () => {

    const {user} = useContext(AuthContext);

    const handleCarBooking = event =>{
        event.preventDefault();
        const form = event.target;
        const color = form.color.value;
        const name = form.name.value;
        const email = form.email.value;
        const phone = form.phone.value;

        const CarBooking = {
            color,
            name,
            email,
            phone,
        }

        fetch('https://cars-resale-market-server.vercel.app/carBookings', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(CarBooking)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
          if(data.acknowledged){
            toast.success('Car booking confirmed')
          }
        })

        // console.log(CarBooking);
    }


    return (
        <>
        <input type="checkbox" id="carBooking-Modal" className="modal-toggle" />
        <div className="modal">
          <div className="modal-box relative">
              <label htmlFor="carBooking-Modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
              <h3 className="text-lg font-bold">Select your car!</h3>
             
              <form onSubmit={handleCarBooking} className='grid grid-cols-1 gap-3 mt-6'>
              {/* <input type="text" placeholder="Type here" className="input w-full input-bordered" /> */}

               <select name="color" type="text" className="select select-bordered w-full">
                    <option disabled selected>Choice your car color?</option>
                    <option>Red</option>
                    <option>Gray</option>
                    <option>Black</option>
               </select>

              <input name="name" type="text" defaultValue={user?.displayName} disabled placeholder="Your name" className="input w-full input-bordered" />
              <input name="email" type="email" defaultValue={user?.email} readOnly disabled placeholder="Email address" className="input w-full input-bordered"/>
              <input name="phone" type="text" placeholder="phone number" className="input w-full input-bordered" />
              <br />
              <input type="submit" value="submit" className="btn btn-accent w-full input-bordered"/>

              </form>

          </div>
        </div>
            
        </>
    );
};

export default CarBookingModal;