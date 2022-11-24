import React, { useContext, useState } from 'react';
import toast from 'react-hot-toast';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../Contexts/AuthContext/AuthProvider';

const Signup = () => {

    const [error, setError] = useState('')
    const { createUser, updateUserProfile } = useContext(AuthContext)

    const handelSubmit = (event) => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        // const photoURL = form.photoURL.value;
        const email = form.email.value;
        const password = form.password.value;

        console.log(name, email, password)

        createUser(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                form.reset();
                setError('');
                // handelUpdateUserProfile(name, photoURL)
                toast.success('Registered successfully!')
            })
            .catch(error => {
                console.error(error);
                setError(error.message);
            })

        const handelUpdateUserProfile = (name, photoURL) => {
            const profile = {
                displayName: name,
                photoURL: photoURL
            }
            updateUserProfile(profile)
                .then(() => { })
                .catch((error) => console.error(error))
        }


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
                                <input type="radio" name="radio-1" className="radio" />
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
                                <span className="label-text">Chose Your Photo</span>
                            </label>
                            <input type="file" className="file-input file-input-bordered w-full max-w-xs" required/>
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