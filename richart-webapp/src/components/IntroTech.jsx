import React from 'react';
import TechGroup from './TechGroup';

const IntroTech = () => {
    return (
        <div className="py-12 bg-white">
            <div className="max-w-sm mx-auto">
                <div className="text-center py-3">
                    <h2 className="text-base text-blue-500 font-semibold tracking-wide uppercase">應用程式技術線介紹</h2>
                    <p className="mt-2 text-2xl leading-8 font-bold tracking-tight text-gray-900 sm:text-3xl">使用技術</p>
                </div>
                <TechGroup />
            </div>
        </div>
    )
}

export default IntroTech;