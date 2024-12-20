import React, { useEffect, useState } from 'react';
import { background2, logo, speaker } from '../images/Images'; // Adjust the import paths as necessary
import { Link } from 'react-router-dom';
import WhatshappIcon from '../WhatshappIcon/WhatshappIcon';

const Home = () => {
    const [viewportHeight, setViewportHeight] = useState(window.innerHeight);

    useEffect(() => {
        const handleResize = () => {
            setViewportHeight(window.innerHeight);
        };

        window.addEventListener('resize', handleResize);

        // Clean up the event listener on component unmount
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <div className="home-container"> {/* Apply the new CSS class here */}
            <div style={{
                backgroundImage: `url(${background2})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundAttachment: "fixed",
                height: viewportHeight,  // Use dynamic height
            }}
                className='flex items-center relative PX-[20px]'>
                <div className='absolute inset-0 bg-black opacity-80'></div>

                <Link to="/Mutual-Funds-Expert" className='w-[100%] inline-block'>
                    <div 
                        className='flex items-center relative justify-center'>
                        <div className='absolute inset-0  opacity-80'></div>

                        <div className='z-[99] text-center'>
                            {/* <img src={logo} className='w-[200px] img_filter m-auto' alt='logo'/> */}
                            <h1 className='text-center sm:text-[55px] text-[57px] font-bold text-white font-oxanium'>
                               OUR SERVICES
                            </h1>
                            <Link to="inviteAsspeaker" className='text-white'>Learn More <span><i class="fa fa-angle-right" aria-hidden="true"></i></span></Link>
                        </div>
                    </div>
                </Link>
            </div>
            <WhatshappIcon/>
        </div>
    );
};

export default Home;
