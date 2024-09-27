import React from 'react'

const Navbar = () => {
    return (
        <div className='bg-black py-[10px] fixed w-[100%] z-[99999]'>
            <div className='lg:max-w-[1900px] lg:px-[50px] m-auto px-[20px]'>
                <div className='flex lg:flex-row flex-col text-center items-center lg:justify-between'>
                    
                    {/* Email Section */}
                    <div className='flex items-center gap-[5px]'>
                        <a href="mailto:ankit474@ymail.com" className="flex items-center gap-[5px]">
                            <p className='text-white sm:text-[25px]'>
                                <i className="fa fa-envelope" aria-hidden="true"></i>
                            </p>
                            <p className='text-white font-roboto sm:text-[18px] mt-[6px]'>ankit474@ymail.com</p>
                        </a>
                    </div>

                    {/* Phone Call Section */}
                    <div className='flex items-center gap-[5px]'>
                        <a href="tel:+919974870436" className="flex items-center gap-[5px]">
                            <p className='text-white sm:text-[25px]'>
                                <i className="fa fa-phone-square" aria-hidden="true"></i>
                            </p>
                            <p className='text-white font-roboto sm:text-[18px] mt-[6px]'>+91 9974870436</p>
                        </a>
                    </div>

                    {/* WhatsApp Section */}
                    <div className='flex items-center gap-[5px]'>
                        <a
                            href="https://wa.me/919974870436"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-[5px]"
                        >
                            <p className='text-white sm:text-[25px]'>
                                <i className="fa fa-whatsapp" aria-hidden="true"></i>
                            </p>
                            <p className='text-white font-roboto sm:text-[18px] mt-[6px]'>Chat with me</p>
                        </a>
                    </div>

                    {/* Message Section */}
                    <div className='flex items-center gap-[5px]'>
                        <p className='text-white font-roboto sm:text-[18px] mt-[6px]'>Your success starts with us!</p>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Navbar;
