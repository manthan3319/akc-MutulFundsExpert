import React from 'react'

const Navbar = () => {
    return (
        <div className='bg-black py-[10px] fixed w-[100%] z-[99999]'>
            <div className='lg:max-w-[1900px] lg:px-[50px] m-auto px-[20px]'>
                <div className='flex lg:flex-row flex-col text-center items-center lg:justify-between'>
                    <div className='flex items-center gap-[5px]'>
                        <p className='text-white sm:text-[25px]'>
                            <i className="fa fa-envelope" aria-hidden="true"></i>
                        </p>
                        <p className='text-white font-roboto sm:text-[18px] mt-[6px]'>info@thespeaker@gmail.com</p>
                    </div>

                    <div className='flex items-center gap-[5px]'>
                        <p className='text-white sm:text-[25px]'><i className="fa fa-phone-square" aria-hidden="true"></i></p>
                        <p className='text-white font-roboto sm:text-[18px] mt-[6px]'>+91 9974870436</p>
                    </div>

                    <div className='flex items-center gap-[5px]'>
                        <p className='text-white sm:text-[25px]'><i className="fa fa-whatsapp" aria-hidden="true"></i></p>
                        <p className='text-white font-roboto sm:text-[18px] mt-[6px]'>Chat with me</p>
                    </div>

                    <div className='flex items-center gap-[5px]'>
                        <p className='text-white font-roboto sm:text-[18px] mt-[6px]'>Your success starts with us!</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar;
