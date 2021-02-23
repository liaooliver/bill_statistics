import React from 'react';
import banner from '../assets/streamline-icon-home-finances-1@200x200.png';

const Banner = () => {
    return (
        <div className="bg-gray-200 py-3 md:py-4">
            <section className="max-w-4xl mx-auto md:flex justify-center items-center">
                <div className="py-6 lg:py-10 w-full md:w-1/2">
                    <p className="lg:text-left text-center text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">Credit Card Bill</p>
                    <p className="lg:text-left text-center text-2xl leading-8 font-bold tracking-tight text-gray-900 sm:text-3xl">in Your Hand</p>
                </div>
                <div className="py-6 lg:py-10 w-full md:w-1/2 ">
                    <img className="mx-auto md:m-0" src={banner} alt="banner" />
                </div>
            </section>
        </div>
    );
}

export default Banner;