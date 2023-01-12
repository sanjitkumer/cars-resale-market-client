import React, { useContext } from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthProvider';

const Navbar = () => {
    const {user, logOut} = useContext(AuthContext);
    const {toggleBtn, setToggleBtn}= useState(false);

    const toggle = ()=>{
      setToggleBtn(!toggleBtn);
    }

    const handleLogOut = () =>{
        logOut()
        .then(() =>{})
        .catch(err => console.log(err) )
    }

    const menuItems = <>
         <li><Link to="/">Home</Link></li>
         <li><Link to="/services">Services</Link></li>   
         <li><Link to="/blog">Blog</Link></li>            
         {
             user?.uid ? 
             <>
              <li><Link to="/dashboard">Dashboard</Link></li> 
              <li><button onClick={handleLogOut}>sign out</button></li>
              </>
              :
             <li><Link to="/login">Login</Link></li>
         }      
        </>   


    return (
        <div className="navbar bg-slate-200  mx-auto">
             <div className="navbar-start">
                  
                  <div className="dropdown">
                      <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                      </label>
                      <ul tabIndex={1} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                      {menuItems}                            
                      </ul>
                  </div>

                  <Link className='flex justify-between items-center gap-4' to='/' ><img src="https://cdn4.vectorstock.com/i/1000x1000/63/58/car-logo-vector-36016358.jpg" style={{height: '40px'}}  alt=''/> <span className='lg:text-3xl text-center text-orange-600 font-semibold sm:text-sm'>Resale Market</span>  </Link>           
             </div>

             <div className="navbar-center hidden lg:flex">
                  <ul className="menu menu-horizontal p-0">
                     {menuItems} 
                  </ul>
             </div>

             <input onClick={toggle} type="checkbox" className="toggle" checked />

              <label htmlFor="dashboard-drawer" tabIndex={2} className="btn btn-ghost lg:hidden">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
              </label>
        </div>
    );
};

export default Navbar;