import React from 'react';
import Speaker_Navbar from '../Speaker_Navbar/Speaker_Navbar';
import Footer from '../Footer/Footer';
import Title from '../Function/Function';
import { photo1 } from '../images/Images'; // Import your images

const PhotosVideos = () => {
    // Create an array of image sources
    const photos = [
        photo1,
        photo1,
        photo1,
        photo1,
        photo1,
        photo1,
        photo1,
        photo1,
        photo1,
        photo1,
    ];

    return (
        <>
            <Speaker_Navbar />
            <div className='lg:max-w-[1900px] lg:px-[50px] m-auto px-[20px] scroll_section lg:pt-[150px] md:pt-[250px] sm:pt-[190px] pt-[180px]'>
                <div className='text-center'>
                    <Title text="Photos / Videos" />
                </div>

                <div className='mt-[25px] gap-[15px] grid 2xl:grid-cols-6 xl:grid-cols-5 lg:grid-cols-5 md:grid-cols-4 sm:grid-cols-3 grid-cols-2'>
                    {photos.map((photo, index) => (
                        <img key={index} src={photo} alt={`img${index + 1}`} className='w-[100%] rounded-md border-[1px] border-black' />
                    ))}
                </div>
            </div>
            <Footer />
        </>
    );
}

export default PhotosVideos;
