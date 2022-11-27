import React, { useContext, useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../Contexts/AuthContext/AuthProvider';
import useToken from '../../../hooks/useToken';

const Signup = () => {

    const [error, setError] = useState('')
    const { createUser, updateUser } = useContext(AuthContext);
    const [createdUserEmail, setCreatedUserEmail] = useState('')
    const [token] = useToken(createdUserEmail)

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
        const name = form.name.value;
        const image = form.image.files[0];
        const role = form.role.value;
        const email = form.email.value;
        const password = form.password.value;
        const imageHostKey = process.env.REACT_APP_imgbb_key;

        const formData = new FormData()
        formData.append('image', image);
        const url = `https://api.imgbb.com/1/upload?key=${imageHostKey}`

        fetch(url, {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(imageData => {
                const photoURL = imageData.data.display_url;
                if (imageData.success) {
                    createUser(email, password)
                        .then(result => {
                            const user = result.user;
                            console.log(user);
                            form.reset();
                            setError('');
                            handelUpdateUser(name, photoURL)
                            // toast.success('Registered successfully!')
                        })
                        .catch(error => {
                            console.error(error);
                            setError(error.message);
                        })
                    const handelUpdateUser = (name, photoURL) => {
                        const profile = {
                            displayName: name,
                            photoURL
                        }
                        updateUser(profile)
                            .then(() => {
                                saveUserToDB(name, email, role);
                            })
                            .catch((error) => console.error(error))
                    }
                }
            })
            .catch(error => console.error(error))
    }

    const saveUserToDB = (userName, userEmail, userRole) => {
        const userDB = { userName, userEmail, userRole };
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
                if (data.acknowledged) {
                    console.log(data)
                    toast.success('Registered successfully!')
                    setCreatedUserEmail(userEmail)
                    // getUserToken(userEmail)
                }
            })
    }

    // const getUserToken = email => {
    //     fetch(`http://localhost:5000/jwt?email=${email}`)
    //     .then(res => res.json())
    //     .then(data=>{
    //         if(data.accessToken){
    //             localStorage.setItem('accessToken', data.accessToken);
    //             navigate('/');
    //         }
    //     })
    // }

    return (
        <div className="hero  bg-base-200">
            <div className="hero-content flex-col lg:flex-row-reverse">

                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form onSubmit={handelSubmit} className="card-body">
                        <h1 className=" mx-12 text-4xl mb-3 font-bold">Signup now</h1>
                        <span className="label-text text-center text-lg">Select your account type</span>

                        {/* user role  */}
                        {/* <div className='flex items-center justify-evenly'>
                            <div className='flex items-center'>
                                <input type="radio" name="userRole" value="buyer" className="radio mr-2" onChange={e => setUserRole(e.target.value)} required checked={true}/> Buyer
                            </div>
                            <div className='flex items-center'>
                                <input type="radio" name="userRole" value="seller" className="radio mr-2" onChange={e => setUserRole(e.target.value)} required /> Seller
                            </div>
                        </div> */}
                        <div>
                            <select name='role' className="select select-bordered w-full ">
                                <option selected>Buyer</option>
                                <option>Seller</option>
                            </select>
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
                            <input type="file" name='image' className="file-input file-input-bordered w-full max-w-xs" required />
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