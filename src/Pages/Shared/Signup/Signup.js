import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Signup = () => {

    const [error, setError] = useState('')

    const handelSubmit = (event) => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const photoURL = form.photoURL.value;
        const email = form.email.value;
        const password = form.password.value;

        console.log(name, email, password)
    }

    return (
        <div className="hero  bg-base-200">
            <div className="hero-content flex-col lg:flex-row-reverse">

                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form onSubmit={handelSubmit} className="card-body">
                        <h1 className=" mx-12 text-4xl mb-3 font-bold">Signup now</h1>

                        <span className="label-text text-center text-lg">Select your account type</span>
                        <div className='flex items-center justify-evenly'>
                            <div className='flex items-center'>
                                <input type="radio" name="radio-1" className="radio"  />
                                <span className="label-text ml-2">Buyer</span></div>
                            <div className='flex items-center'>

                                <input type="radio" name="radio-1" className="radio" />
                                <span className="label-text ml-2">Seller</span> </div>
                        </div>


                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Your Name</span>
                            </label>
                            <input type="text" placeholder="your name" name='name' className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Photo URL</span>
                            </label>
                            <input type="text" placeholder="photo url" name='photoURL' className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" placeholder="email" name='email' className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" placeholder="password" name='password' className="input input-bordered" required />
                            <label className="label">
                                <p className='text-red-600'>{error}</p>
                            </label>
                        </div>
                        <div className="form-control mt-6 mb-5">
                            <button className="btn btn-primary">SIGNUP</button>
                            <p className='text-center mt-3'>Already have an account? <Link to='/login'> <span className='text-violet-800'>LogIn Now</span></Link></p>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Signup;