import React from 'react';
import banner from '../assets/streamline-icon-home-finances-1@200x200.png';

const Banner = () => {
    return (
        <div className="bg-gray-200 py-0 md:py-3">
            <section className="max-w-7xl mx-auto md:flex justify-center items-center">
                <div className="p-6 w-full md:w-1/2">
                    <p className="text-center text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">Credit Card Bill</p>
                    <p className="text-center text-2xl leading-8 font-bold tracking-tight text-gray-900 sm:text-3xl">in Your Hand</p>
                </div>
                <div className="p-6 w-full md:w-1/2 ">
                    <img className="mx-auto md:m-0" src={banner} alt="" />
                </div>
            </section>
        </div>
    );
}

export default Banner;