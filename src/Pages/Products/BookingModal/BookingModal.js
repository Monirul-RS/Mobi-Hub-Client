import React from 'react';

const BookingModal = ({ selectedProduct }) => {
    const { products_name, rePrice } = selectedProduct;
    // console.log(selectedProduct);

    const handleBooking = event =>{
        event.preventDefault();
        const form = event.target;
        const name= form.name.value;
        const email= form.email.value;
        const price= form.price.value;
        const phone = form.phone.value;
        const location = form.location.value;

        const booking ={
            products_name,
            Buyer: name,
            email,
            price,
            phone,
            location

        }


        console.log(booking);
    }
    return (
        <>
            <input type="checkbox" id="booking-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label htmlFor="booking-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="text-xl font-bold mb-10">{products_name}</h3>
                    <form onSubmit={handleBooking} className='grid grid-cols-1 gap-4'>
                        <input name='name' type="text" placeholder="Your Name" className="input input-bordered w-full" />
                        <input name='email' type="text" placeholder="Email" className="input input-bordered w-full" />
                        <input name='price' type="text" placeholder="Products Price" defaultValue={rePrice} disabled className="input input-bordered w-full" />
                        <input name='phone' type="text" placeholder="Your Phone" className="input input-bordered w-full" />
                        <input name='location' type="text" placeholder="Location" className="input input-bordered w-full" />
                        <input className='w-full btn btn-accent' type="submit" value="Submit" />
                    </form>
                </div>
            </div>
        </>
    );
};

export default BookingModal;