import { data } from 'autoprefixer';
import React, { useContext } from 'react';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../Contexts/AuthContext/AuthProvider';

const AddAProduct = () => {

    const navigate = useNavigate();
    const { user } = useContext(AuthContext)

    const handelAddProduct = (event) => {
        event.preventDefault()
        const form = event.target;
        const name = form.name.value;
        const price = form.price.value;
        const sellingPrice = form.sellingPrice.value;
        const location = form.sellerLocation.value;
        const seller = user.displayName;
        const sellerMail = user.email;
        const use = form.use.value;
        const date = new Date();
        const purchaseDate = form.purchaseDate.value;
        const description = form.description.value;
        const sellerPhoneNumber = form.sellerPhoneNumber.value;
        const condition = form.condition.value;
        const category_id = form.category_id.value;
        const image = form.image.files[0];
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

                const phoneInfo = {
                    name,
                    price,
                    sellingPrice,
                    location,
                    seller,
                    sellerMail,
                    use,
                    date,
                    purchaseDate,
                    description,
                    sellerPhoneNumber,
                    condition,
                    category_id,
                    image: photoURL,
                    status : false
                }

                fetch(`http://localhost:5000/products?email=${user.email}`, {
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
                            toast.success("Successfully Done!")
                            navigate('/dashboard/myproduct')
                        }
                        else {
                            toast.error(data.message)
                        }
                    })
            })
    }

    return (
        <div className='mt-2 mb-10'>
            <h1 className="ml-5 mb-5 text-3xl font-semibold">Add a product</h1>
            <h3 className='mt-5 text-center text-xl'>To add a product please fill up the form and submit it</h3>
            <div className='w-10/12 mx-auto'>
                <form onSubmit={handelAddProduct} className="grid grid-cols-1 md:grid-cols-2 gap-3 mt-3 mx-auto">
                    <input name='name' type="text" placeholder="Product Name" className="input input-bordered mt-2 w-full" required />
                    <input name='price' type="number" placeholder="Buying Price" className="input input-bordered mt-2 w-full" required />
                    <input name='sellingPrice' type="number" placeholder="Selling Price" className="input input-bordered mt-2 w-full" required />
                    <input name='purchaseDate' type="number" placeholder="Year of purchase" className="input input-bordered mt-2 w-full" required />
                    <input name='use' type="number" placeholder="How many years have you been using this phone?" className="input input-bordered mt-2 w-full" required />
                    <input name='description' type="text" placeholder="Short Description" className="input input-bordered mt-2 w-full" required />
                    <input name='sellerLocation' type="text" placeholder="Your Location" className="input input-bordered mt-2 w-full" required />
                    <input name='sellerPhoneNumber' type="Number" placeholder="Your Phone Number" className="input input-bordered mt-2 w-full" required />
                    <div>
                        <label className="label">
                            <span className="label-text">Select your product condition</span>
                        </label>
                        <select name='condition' className="select select-bordered select-sm w-full max-w-xs" required>
                            <option value='excellent'>Excellent</option>
                            <option value='Good'>Good</option>
                            <option value='Fair'>Fair</option>
                        </select>
                    </div>
                    <div>
                        <label className="label">
                            <span className="label-text">Select your brand</span>
                        </label>
                        <select name='category_id' className="select select-bordered select-sm w-full max-w-xs" required>
                            <option value='1'>Apple</option>
                            <option value='2'>Samsung</option>
                            <option value='3'>Xiaomi</option>
                        </select>
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Chose Your Photo</span>
                        </label>
                        <input type="file" name='image' className="file-input file-input-bordered w-full max-w-xs" required />
                    </div>
                    <br />
                    <input type="submit" value='Submit' className="input input-bordered mt-2 w-full btn btn-primary" />
                </form>
            </div>
        </div>
    );
};

export default AddAProduct;