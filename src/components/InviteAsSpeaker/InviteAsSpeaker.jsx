import React from 'react';
import Speaker_Navbar from '../Speaker_Navbar/Speaker_Navbar';
import Footer from '../Footer/Footer';
import Title from '../Function/Function';
import WhatshappIcon from '../WhatshappIcon/WhatshappIcon';

const InviteAsSpeaker = () => {
    return (
        <>
            <Speaker_Navbar />
            <div className='lg:max-w-[1900px] lg:px-[50px] m-auto px-[20px] relative lg:pt-[190px] md:pt-[300px] sm:pt-[190px] pt-[180px]'>
                <div>
                    <Title text="Become a Part of Mutual Funds Expert!" />
                </div>

                <div className='flex sm:flex-row flex-col gap-[30px] mt-[25px]'>
                    {/* <div className='sm:w-[30%] w-[100%]'>

                        <iframe
                            src="https://www.youtube.com/embed/YOUR_VIDEO_ID" // Replace with your YouTube video ID
                            title="Demo Video"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                            className='sm:w-[100%] sm:h-[400px] h-[200px] w-[100%]'
                        ></iframe>
                    </div> */}

                    <div className='xl:w-[100%] sm:w-[100%] w-[100%] overflow-y-auto max-h-[calc(100vh-100px)] '> 
                        <p className='md:text-[21px] pb-[12px] font-Mulish font-normal'>Mutual Funds Expert, founded by Ankit Kumar Chaudhari, is a leading financial advisory firm focused on helping clients navigate the intricacies of investment strategies. Our mission is to empower individuals and businesses to achieve their financial goals through informed decisions and personalized investment solutions.</p>

                        <p className='md:text-[21px] pb-[12px] font-Mulish'>At Mutual Funds Expert, we prioritize building strong relationships with our clients by offering transparent and trustworthy financial advice. Our client-centric approach ensures we understand your unique financial needs and tailor our services accordingly. With a team of seasoned professionals, we are dedicated to guiding you through the dynamic financial landscape, enabling you to make the best choices for your future.</p>

                        <p className='md:text-[21px] pb-[12px] font-Mulish'>We specialize in a wide array of services including:</p>
                        <ul className='list-disc ml-5'>
                            <li className='md:text-[21px] pb-[12px] font-Mulish'>Daily SIP</li>
                            <li className='md:text-[21px] pb-[12px] font-Mulish'>Digital Gold</li>
                            <li className='md:text-[21px] pb-[12px] font-Mulish'>Mutual Funds</li>
                            <li className='md:text-[21px] pb-[12px] font-Mulish'>Fixed Deposits</li>
                            <li className='md:text-[21px] pb-[12px] font-Mulish'>Health Insurance</li>
                            <li className='md:text-[21px] pb-[12px] font-Mulish'>RBI Bonds</li>
                            <li className='md:text-[21px] pb-[12px] font-Mulish'>Tax Saving strategies</li>
                            <li className='md:text-[21px] pb-[12px] font-Mulish'>Demat Account services</li>
                        </ul>

                        <p className='md:text-[21px] pb-[12px] font-Mulish'>Our extensive experience and dedication to our clients have allowed us to work with a diverse range of organizations, ensuring tailored financial advice for every unique situation.</p>

                        <p className='md:text-[21px] pb-[12px] font-Mulish'>Join us at Mutual Funds Expert and take the first step towards a secure financial future!</p>
                    </div>
                </div>
                <WhatshappIcon/>
            </div>
            <Footer />
        </>
    );
};

export default InviteAsSpeaker;
