import React, { useContext } from 'react';
import toast from 'react-hot-toast';
import { AuthContext } from '../../Contexts/AuthContext/AuthProvider';

const Modal = ({ phoneDetail, setPhoneDetail }) => {

    const { user } = useContext(AuthContext)

    const handelBooking = event => {
        event.preventDefault()
        const form = event.target;
        const buyerName = form.name.value;
        const buyerEmail = form.email.value;
        const phoneName = form.phoneName.value;
        const phonePrice = form.phonePrice.value;
        const buyerPhoneNumber = form.buyerPhoneNumber.value;
        const buyerMeetingLocation = form.meetingLocation.value;

        // console.log(buyerName, buyerEmail, phoneName, phonePrice, buyerMeetingLocation, buyerPhoneNumber);
        
        // setPhoneDetail(null)

        const bookingInfo = {
            phoneName,
            phonePrice,
            buyerName,
            buyerEmail,
            buyerPhoneNumber,
            buyerMeetingLocation,
            sellerName: phoneDetail.seller,
            sellerEmail: phoneDetail.sellerMail
        }

        console.log(bookingInfo)

        fetch('http://localhost:5000/bookings', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(bookingInfo)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.acknowledged) {
                    setPhoneDetail(null)
                    toast.success("Successfully Booking Done!")
                    // refetch()
                }
                else {
                    // setTreatment(null)
                    toast.error(data.message)
                }
            })

    }

    return (
        <>
            <input type="checkbox" id="booking-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label htmlFor="booking-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="text-lg font-bold mb-5">To book this phone please fill up this form!</h3>
                    <form onSubmit={handelBooking}>
                        <input name='name' type="text" placeholder="Your Name" defaultValue={user?.displayName} disabled className="input input-bordered mt-2 w-full" />
                        <input name='email' type="email" placeholder="Your Email" defaultValue={user?.email} disabled className="input input-bordered mt-2 w-full" />
                        <input name='phoneName' type="text" placeholder="Your Name" defaultValue={phoneDetail?.name} disabled className="input input-bordered mt-2 w-full" />
                        <input name='phonePrice' type="text" placeholder="Price" defaultValue={`${phoneDetail?.sellingPrice} taka`} disabled className="input input-bordered mt-2 w-full" />
                        <input name='buyerPhoneNumber' type="number" placeholder="Your Number" className="input input-bordered mt-2 w-full" required />
                        <input name='meetingLocation' type="text" placeholder="Where do you want o meet the seller?" className="input input-bordered mt-2 w-full" required />
                        <input type="submit" value='Submit' className="input input-bordered mt-2 w-full btn btn-primary" />
                    </form>
                </div>
            </div>
        </>
    );
};

export default Modal;