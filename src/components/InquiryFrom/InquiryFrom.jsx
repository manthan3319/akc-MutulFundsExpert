import React, { useState } from 'react';
import Speaker_Navbar from '../Speaker_Navbar/Speaker_Navbar';
import Footer from '../Footer/Footer';
import WhatsAppIcon from '../WhatshappIcon/WhatshappIcon';
import Title from '../Function/Function';

const InquiryForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        message: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // यहाँ आप सबमिशन हैंडलिंग लॉजिक जोड़ सकते हैं
        console.log('Form submitted:', formData);
    };

    return (
        <div>
            <Speaker_Navbar />
            <div className='lg:max-w-[1900px] lg:px-[50px] m-auto px-[20px] min-h-[80vh] lg:pt-[200px] md:pt-[300px] sm:pt-[190px] pt-[180px]'>
                <div className='text-center'>
                    <Title text="Inquiry Form" />
                </div>

                <div className='flex flex-col gap-y-8 mt-[50px] md:w-[50%] m-auto'>
                    <form onSubmit={handleSubmit} className="bg-[#0000000a] p-[20px] rounded-[10px] shadow-md">
                        <div className='flex flex-col gap-y-4'>
                            <div className='grid sm:grid-cols-2 grid-cols-1 sm:gap-[15px]'>
                                <input
                                    type="text"
                                    name="name"
                                    placeholder="Your Name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                    className="p-[10px] border border-gray-300 rounded-[5px] focus:outline-none focus:ring focus:ring-blue-300"
                                />
                                <input
                                    type="email"
                                    name="email"
                                    placeholder="Your Email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                    className="p-[10px] border border-gray-300 rounded-[5px] focus:outline-none focus:ring focus:ring-blue-300"
                                />
                            </div>

                            <div className='grid sm:grid-cols-2 grid-cols-1 sm:gap-[15px] '>
                                <input
                                    type="tel"
                                    name="phone"
                                    placeholder="Your Phone Number"
                                    value={formData.phone}
                                    onChange={handleChange}
                                    required
                                    className="p-[10px] border border-gray-300 rounded-[5px] focus:outline-none focus:ring focus:ring-blue-300"
                                />

                                <input
                                    type="text"
                                    name="subject"
                                    placeholder="Your Subject"
                                    value={formData.phone}
                                    onChange={handleChange}
                                    required
                                    className="p-[10px] border border-gray-300 rounded-[5px] focus:outline-none focus:ring focus:ring-blue-300"
                                />
                            </div>

                            <textarea
                                name="message"
                                placeholder="Your Message"
                                value={formData.message}
                                onChange={handleChange}
                                required
                                className="p-[10px] border border-gray-300 rounded-[5px] focus:outline-none focus:ring focus:ring-blue-300 h-[100px]"
                            />
                        </div>

                        <div className='text-center'>
                            <button
                                type="submit"
                                className="mt-4 bg-blue-600 text-white inline-block text-center p-[10px] rounded-[5px] hover:bg-blue-700 transition duration-300 bg-black"
                            >
                                Submit Inquiry
                            </button>
                        </div>
                    </form>
                </div>

                <WhatsAppIcon />
            </div>
            <Footer />
        </div>
    );
};

export default InquiryForm;
