import React from 'react';
import { Link } from 'react-router-dom';

const The_Writer_Navbar = () => {
    // Create an array of navigation links
    const navLinks = [
        { name: 'Home', path: '/' },
        { name: 'Books', path: '/books' },
        { name: 'Pictures', path: '/pictures' },
        { name: 'Speaker', path: '/inviteAsspeaker' }
    ];

    return (
        <div className='bg-white py-[25px] fixed lg:top-[58px] md:top-[168px] w-[100%] z-[99] border-b'>
            <div className='lg:max-w-[1900px] lg:px-[50px] m-auto px-[20px]'>
                <div className='flex justify-between'>
                    <div>
                        <Link to="/">
                            <h1>Logo</h1>
                        </Link>
                    </div>

                    <div>
                    <ul className='flex space-x-8 items-center'> 
                            {navLinks.map((item, index) => (
                                <li key={index} className='font-Mulish text-[18px] font-semibold hover:text-blue'>
                                    <Link to={item.path} className=''>{item.name}</Link> 
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default The_Writer_Navbar;
