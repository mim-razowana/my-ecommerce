import React, { useState } from 'react';

const NewsletterBox = () => {
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const onSubmitHandler = (e) => {
        e.preventDefault();
        
        // Regular expression for basic email validation
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (emailPattern.test(email)) { // Validate email format
            setMessage("Thank you for subscribing!");
            // Here you could add logic to send the email to your backend or mailing list
            setEmail('');
        } else {
            setMessage("Please enter a valid email address.");
        }
    };

    return (
        <div className='text-center'> 
            <p className='text-2xl font-medium text-gray-800'>
                Subscribe now and get 15% discount
            </p>
            <p className='text-gray-400 mt-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam, quas.</p>

            <form onSubmit={onSubmitHandler} className="w-full sm:w-1/2 mx-auto my-6 flex items-center justify-center gap-3 border pl-3">
                <input
                    type="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="flex-1 outline-none py-2 px-3 border border-gray-300 rounded-md"
                    required
                />
                <button
                    type="submit"
                    className="bg-red-600 text-white rounded-md hover:bg-red-900 transition duration-200 px-10 py-4"
                >
                    Subscribe Now
                </button>
            </form>
            {message && <p className="text-center mt-4 text-green-500">{message}</p>}
        </div>
    );
};

export default NewsletterBox;
