import React from 'react';
import Speaker_Navbar from '../Speaker_Navbar/Speaker_Navbar';
import Footer from '../Footer/Footer';
import Title from '../Function/Function';

const Presskit = () => {
    return (
        <>
            <Speaker_Navbar />
            <div className='lg:max-w-[1900px] lg:px-[50px] m-auto px-[20px] scroll_section lg:pt-[150px] md:pt-[250px] sm:pt-[190px] pt-[180px]'>
                <div className='text-center'>
                    <Title text="Mutual Funds Press Kit" />
                </div>

                <div className='flex flex-col gap-y-8 mt-[10px]'>
                    <div>
                        <h1 className='font-bold'>Publicity Contact</h1>
                        <p className='text-sm italic'>For any PR related inquiries, including requests for promotional materials, interviews, or events, please contact the details provided below.</p>
                    </div>

                    <div>
                        <h1 className='font-bold'>John Doe</h1>
                        <p className='text-sm'><span className='font-bold'>Email: </span>john.doe@mutualfunds.com</p>
                        <p className='text-sm'><span className='font-bold'>Call/SMS: </span> +91 9004 111 123</p>
                    </div>

                    <div>
                        <p className='text-sm'>For images and graphics related to our mutual funds, <span className='italic'>(Click here)</span> or <span className='italic'>(here)</span></p>
                        <h1 className='font-bold'>To Download the Logos and Covers of Our Mutual Funds, visit:</h1>

                        <div className='mt-2 flex flex-col gap-y-2'>
                            <p className='text-sm'>– Equity Fund – <span className='italic'>(High Res | AI File)</span></p>
                            <p className='text-sm'>– Debt Fund – <span className='italic'>(High Res | AI File)</span></p>
                            <p className='text-sm'>– Balanced Fund – <span className='italic'>(High Res | AI File)</span></p>
                            <p className='text-sm'>– Tax Saving Fund – <span className='italic'>(High Res | AI File)</span></p>
                            <p className='text-sm'>– Index Fund – <span className='italic'>(High Res | AI File)</span></p>
                            <p className='text-sm'>– Mutual Fund Brochure – <span className='italic'>(High Res | PDF File)</span></p>
                        </div>

                        <p className='text-sm italic mt-[10px]'>You are free to use all information and images from this website for promotional purposes.</p>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
}

export default Presskit;
