import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
    return (
        <div>
            <footer className='mt-10 p-5 bg-gray-900 text-white text-center lg:fixed w-[100%] lg:bottom-0 '>
                <div className='flex sm:flex-row flex-col gap-[15px] sm:gap-0 justify-between items-center'>
                    <div>
                        <h2 className='sm:text-lg text-[22px] font-bold mb-2'>Contact Us</h2>
                        <p className='mb-1'>For any queries related to mutual funds or to invite Ankit as a Mutual Funds Expert, reach out to.
                        </p>
                    </div>

                    <div className='flex flex-col items-center'>
                    <h2 className='sm:text-lg text-[22px] font-bold mb-2'>Email</h2>
                        <div className='flex flex-col gap-y-2'>
                            <p>ankit474@ymail.com</p>
                        </div>

                    </div>

                    <div className='flex flex-col items-center mt-[10px]'>
                    <h2 className='sm:text-lg text-[22px] font-bold mb-2'>Call/SMS/Whatsapp</h2>
                        <div className='flex xl:flex-row flex-col gap-x-3'>
                            <p>+91 9974870436</p>
                        </div>

                    </div>

                    <div className='flex flex-col items-center mt-[10px]'>
                    <h2 className='sm:text-lg text-[22px] font-bold mb-2'>Social Media</h2>
                        <div className='flex xl:flex-row flex-col gap-x-3'>
                            <p>+91 9974870436</p>
                        </div>

                    </div>
                </div>

                <div className='border-t-[1px] mt-[15px] pt-[15px]'>
                    <Link to="https://brightensolutions.com/" className='sm:text-[18px] text-[14px] font-roboto'><p>Copyright © 2016-24 brighten solutions| All Right Reserved</p></Link>
                </div>
            </footer>
        </div>
    )
}

export default Footer
