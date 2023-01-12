// import { success } from 'daisyui/src/colors';
import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider';
import useToken from '../../hooks/useToken';

const SignUp = () => {
    const {register, formState:{ errors}, handleSubmit} = useForm();
    const {createUser, updateUser} = useContext(AuthContext);
    const [signUpError, setSignUpError] = useState('');

    const [createUserEmail, setCreateUserEmail] = useState('')
    const [token] = useToken(createUserEmail);
    const navigate = useNavigate();

    if(token){
        navigate('/');
    }

    const handleSignUp = (data ) =>{
        // console.log(data);
        setSignUpError('');
        createUser(data.email, data.password)
        .then(result => {
            const user = result.user;
            console.log(user);
            toast.success('user Created Successfully.')

            const userInfo = {
                displayName: data.name 
            }
            updateUser(userInfo)
            .then(() =>{
                saveUser(data.name, data.email);
                // navigate('/');
            })
            .catch(err => console.log(err));
        })
        .catch(error => {            
            console.log(error)
            setSignUpError(error.message)
        });
    }

    const saveUser = (name, email) => {
        const user ={name, email};
        fetch('http://localhost:5000/users', {
            method: 'POST', 
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
        .then(res => res.json())
        .then(data =>{
            // getUserToken(email);
            // console.log( 'save user', data);
            // navigate('/');

            setCreateUserEmail(email);
           
        })     
    }

    // const getUserToken = email =>{
    //     fetch(`http://localhost:5000/jwt?email=${email}`)
    //     .then(res => res.json())
    //     .then(data => {
    //         if(data.accessToken){
    //             localStorage.setItem('accessToken', data.accessToken);
    //             // navigate('/');
    //         }
    //     })
    // }

    return (
        <div className='h-[800px] flex justify-center items-center'>
            <div className='w-96 p-7'>
                <h2 className='text-xl text-center'>Sign Up</h2>
                <form onSubmit={handleSubmit(handleSignUp)}>

                   <div className="form-control w-full max-w-xs">
                      <label className="label"><span className="label-text">Name</span></label>
                     <input type="text" {...register("name", {
                        required: "Name is Required"
                     })}
                      className="input input-bordered w-full max-w-xs"/>
                      {errors.name && <p className='text-red-600'> {errors.name.message} </p>}
                    </div>
                    
                    <div className="form-control w-full max-w-xs">
                      <label className="label"><span className="label-text">Email</span></label>
                     <input type="email"
                     {...register("email",
                      {required: "Email Address is required"})}
                      className="input input-bordered w-full max-w-xs"  />        {errors.email && <p className='text-red-600'> {errors.email?.message} </p>} 
                    </div>

                    <div className="form-control w-full max-w-xs">
                      <label className="label"><span className="label-text">Password</span></label>
                      <input type="password" 
                      {...register("password",
                      {required:"password is required",  
                       minLength:{ value: 6, message: 'password must be 6 characters long'},
                       pattern: {value: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])/, message: "password must have uppercase, number and special character"}
                       })}
                       className="input input-bordered w-full max-w-xs"  />
                       {errors.password && <p className='text-red-600'> {errors.password?.message} </p>}                   
                    </div>  

                    <input className='btn btn-accent w-full mt-4' value='Sign Up' type="submit" />
                    {signUpError && <p className='text-red-600'>{signUpError} </p>}
                </form>
                 <p>Already Have an Account <Link className='text-secondary' to='/login'> Please login</Link> </p>
                <div className="divider">OR</div>
                 <button className='btn btn-outline w-full'>CONTINUE WITH GOOGLE </ button>
            </div>
        </div>
    );
};

export default SignUp;