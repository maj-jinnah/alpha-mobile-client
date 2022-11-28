import { useQuery } from '@tanstack/react-query';
import React, { useContext, useState } from 'react';
import toast from 'react-hot-toast';
import Loader from '../../../components/Loader/Loader';
import { AuthContext } from '../../../Contexts/AuthContext/AuthProvider';

const MyProducts = () => {

    const [isAdvertise, setIsAdvertise] = useState('')
    const { user } = useContext(AuthContext)


    const { data: myPhones = [], refetch } = useQuery({
        queryKey: ['myproduct', user?.email],
        queryFn: async () => {
            const res = await fetch(`http://localhost:5000/myproduct?email=${user?.email}`, {
                headers: {
                    authorization: `bearer ${localStorage.getItem('accessToken')}`
                }
            });
            const data = await res.json();
            return data;
        }
    })

    const handelDelete = id => {
        fetch(`http://localhost:5000/myproduct/${id}?email=${user.email}`, {
            method: 'DELETE',
            headers: {
                authorization: `bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.deletedCount > 0) {
                    toast.success("Product successfully deleted!")
                    refetch();
                }
            })
    }

    const handelAdvertise = phone => {
        const { name, price, sellingPrice, location, seller, sellerMail, use, date, purchaseDate, description, sellerPhoneNumber, condition, category_id, image, status } = phone

        const phoneInfo = { name, price, sellingPrice, location, seller, sellerMail, use, date, purchaseDate, description, sellerPhoneNumber, condition, category_id, image, status }

        fetch(`http://localhost:5000/advertise?email=${user.email}`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
                authorization: `bearer ${localStorage.getItem('accessToken')}`
            },
            body: JSON.stringify(phoneInfo)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.acknowledged) {
                    toast.success("Successfully advertise done")
                    setIsAdvertise(true)
                }
                else {
                    toast.error(data.message)
                }
            })

    }


    return (
        <div className='mt-2 mb-10'>
            <h1 className="ml-5 mb-5 text-3xl font-semibold">My Products</h1>
            <div>
                {
                    myPhones.map((phone, i) =>
                        <div key={i}>
                            <div className="card card-compact w-96 bg-base-100 shadow-xl">
                                <figure className='h-64'><img src={phone.image} alt="Shoes" /></figure>
                                <div className="card-body">
                                    <h2 className="card-title">{phone.name}</h2>
                                    <p className='text-base'>Selling Price : {phone.sellingPrice} Taka</p>

                                    <div className="card-actions justify-between">
                                        <button onClick={() => handelDelete(`${phone._id}`)} className="btn btn-warning btn-sm">delete</button>
                                        <div>
                                            {
                                                phone.status === true ? <>
                                                    <button className="btn btn-primary " disabled>sold</button>
                                                </> :
                                                    <>
                                                        <div className="badge badge-secondary">Available</div>
                                                        {isAdvertise === true ?
                                                            <button onClick={() => handelAdvertise(phone)} disabled
                                                                className="btn btn-primary btn-sm ml-2">Advertise</button>
                                                            :
                                                            <button onClick={() => handelAdvertise(phone)}
                                                                className="btn btn-primary btn-sm ml-2">Advertise</button>
                                                        }
                                                    </>
                                            }
                                        </div>
                                    </div>
                                    {/* <p>{phone._id}</p> */}
                                </div>
                            </div>
                        </div>)
                }
            </div>
        </div>
    );
};

export default MyProducts;