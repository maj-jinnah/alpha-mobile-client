import React, { useContext } from 'react';
import { AuthContext } from '../../../Contexts/AuthContext/AuthProvider';

const AddAProduct = () => {

    const { user } = useContext(AuthContext)

    const handelAddProduct = (event) => {
        event.preventDefault()
        const form = event.target;
        const buyerName = form.name.value;
        const buyerEmail = form.email.value;
        const phoneName = form.phoneName.value;
        const phonePrice = form.phonePrice.value;
        const buyerPhoneNumber = form.buyerPhoneNumber.value;
        const buyerMeetingLocation = form.meetingLocation.value;
    }
    return (
        <div className='mt-2'>
            <h1 className="ml-5 mb-5 text-3xl font-semibold">Add a product</h1>
            <h3 className='mt-5 text-center text-xl'>To add a product please fill up the form and submit it</h3>
            <div className='w-10/12'>
                <form onSubmit={handelAddProduct} className="grid grid-cols-1 md:grid-cols-2 gap-3 mt-3">
                    <input name='name' type="text" placeholder="Product Name" className="input input-bordered mt-2 w-full" required />
                    <input name='price' type="number" placeholder="Buying Price" className="input input-bordered mt-2 w-full" required />
                    <input name='sellingPrice' type="number" placeholder="Selling Price" className="input input-bordered mt-2 w-full" required />
                    <input name='purchaseDate' type="number" placeholder="Year of purchase" className="input input-bordered mt-2 w-full" required />
                    <input name='use' type="number" placeholder="How many years have you been using this phone?" className="input input-bordered mt-2 w-full" required />
                    <input name='description' type="text" placeholder="Short Description" className="input input-bordered mt-2 w-full" required />
                    <input name='sellerLocation' type="text" placeholder="Your Location" className="input input-bordered mt-2 w-full" required />
                    <input name='sellerPhoneNumber' type="Number" placeholder="Your Phone Number" className="input input-bordered mt-2 w-full" required />
                    <select className="select select-bordered select-sm w-full max-w-xs" required>
                        <option >Small</option>
                        <option>Small Apple</option>
                        <option>Small Orange</option>
                        <option>Small Tomato</option>
                    </select>
                    <select className="select select-bordered select-sm w-full max-w-xs" required>
                        <option disabled >Small</option>
                        <option>Small Apple</option>
                        <option>Small Orange</option>
                        <option>Small Tomato</option>
                    </select>
                    <input type="submit" value='Submit' className="input input-bordered mt-2 w-full btn btn-primary" />
                </form>
            </div>
        </div>
    );
};

export default AddAProduct;