import React, { useContext, useEffect, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { FaGoogle } from 'react-icons/fa';
import { GoogleAuthProvider } from 'firebase/auth';
import { AuthContext } from '../../../Contexts/AuthContext/AuthProvider';
import toast from 'react-hot-toast';
import useToken from '../../../hooks/useToken';

const Login = () => {

    const { googleProviderSignIn, signInUser } = useContext(AuthContext)
    const [error, setError] = useState('');
    const [loginUserEmail, setLoginUserEmail] = useState('');
    const [token] = useToken(loginUserEmail);

    const provider = new GoogleAuthProvider()

    const navigate = useNavigate()
    const location = useLocation()
    const from = location.state?.from?.pathname || "/";

    useEffect(() => {
        if (token) {
            navigate(from, { replace: true })
        }
    }, [token, from, navigate])

    const handelSubmit = (event) => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        // console.log(email, password)
        setError('')

        signInUser(email, password)
            .then((result) => {
                const user = result.user
                console.log(user)
                toast.success('Log in Successful')
                setLoginUserEmail(user.email)
                // navigate(from, { replace: true })
            })
            .catch((error) => {
                console.error(error)
                setError(error)
            })
    }

    const handelGoogleSignIn = () => {
        googleProviderSignIn(provider)
            .then((result) => {
                const user = result.user
                console.log(user)
                // setUserRole('Buyer')
                // toast.success('Log in Successful')
                // navigate(from, { replace: true })
                saveUserToDB(user.displayName, user.email, user.photoURL)
            })
            .catch((error) => {
                console.error(error)
            })
    }

    const saveUserToDB = (userName, userEmail, photoURL) => {
        const userDB = { userName, userEmail, photoURL, userRole: 'Buyer' };
        console.log(userDB);
        fetch('http://localhost:5000/users', {
            method: 'POST',
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(userDB)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                toast.success('Log in Successful')
                setLoginUserEmail(userEmail)
                // navigate(from, { replace: true })
            })
    }



    return (
        <div className="hero bg-base-200">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form onSubmit={handelSubmit} className="card-body">
                        <h1 className=" mx-16 text-4xl font-bold">Login now</h1>
                        <p className='text-center'>Log in to access your account</p>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="text" placeholder="email" name='email' className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" placeholder="password" name='password' className="input input-bordered" />
                            <label className="label">
                                <p className='text-red-600'>{error}</p>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Log In</button>
                            <p className='text-center mt-3'>Don't have an account yet? <Link to='/signup'> <span className='text-violet-800'>Signup Now</span></Link></p>
                        </div>


                        <div className="flex items-center w-full my-4">
                            <hr className="w-full dark:text-gray-900" />
                            <p className="px-3 dark:text-gray-900">OR</p>
                            <hr className="w-full dark:text-gray-900" />
                        </div>

                        <div className='flex flex-col'>
                            <button onClick={handelGoogleSignIn} className="btn btn-primary mb-5"><FaGoogle className='text-xl mr-3'></FaGoogle>Login with Google</button>
                        </div>
                    </form>

                </div>
            </div>
        </div>
    );
};

export default Login;