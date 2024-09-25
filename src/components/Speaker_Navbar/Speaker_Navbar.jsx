import React from 'react';
import { Link } from 'react-router-dom';
import Drawer from 'react-modern-drawer'
import 'react-modern-drawer/dist/index.css'

const menuItems = [
    { name: 'HOME', path: '/' },
    { name: 'OUR SERVICES', path: '/The-Writer' },
    { name: 'PRESS KIT', path: '/press-kit' },
    { name: 'PHOTOS/VIDEOS', path: '/photos-videos' },
];

const Speaker_Navbar = () => {

    const [isOpen, setIsOpen] = React.useState(false)
    const toggleDrawer = () => {
        setIsOpen((prevState) => !prevState)
    }
    return (
        <>
            <div className='bg-white py-[25px] fixed lg:top-[58px] md:top-[166px] w-[100%] z-[99] border-b md:block hidden'>
                <div className='lg:max-w-[1900px] lg:px-[50px] m-auto px-[20px]'>
                    <div className='flex justify-between items-center'>
                        <div>
                            <Link to="/">
                                <h1>Logo</h1>
                            </Link>
                        </div>
                        <div>
                            <ul className='flex space-x-8 items-center'> {/* Add spacing between menu items */}
                                {menuItems.map((item, index) => (
                                    <li key={index} className='font-Mulish lg:text-[18px] md:text-[16px] font-semibold hover:text-blue'>
                                        <Link to={item.path} className=''>{item.name}</Link> {/* Add hover effect */}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            <div className='md:hidden block sticky sm:top-[163px] top-[140px] bg-white p-[15px] border-b-[1px] border-black'>
                <div className='flex justify-between items-center  '>
                    <div>
                        <Link to="/">Logo</Link>
                    </div>
                    <div>
                        <button onClick={toggleDrawer} className='text-[25px]'><i class="fa fa-bars" aria-hidden="true"></i></button>
                    </div>
                </div>

                <Drawer
                    open={isOpen}
                    onClose={toggleDrawer}
                    direction='right'
                    className='bla bla bla'
                >
                    <div>
                        <ul className='flex space-y-8 flex-col sm:pt-[190px] pt-[175px] p-[15px]'> {/* Add spacing between menu items */}
                                {menuItems.map((item, index) => (
                                    <li key={index} className='font-Mulish lg:text-[18px] md:text-[16px] font-semibold hover:text-blue'>
                                        <Link to={item.path} className=''>{item.name}</Link> {/* Add hover effect */}
                                    </li>
                                ))}
                            </ul></div>
                </Drawer>
            </div>
        </>
    );
};

export default Speaker_Navbar;