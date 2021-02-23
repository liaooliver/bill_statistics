import React from 'react';
import SocialGroup from './SocialGroup';

const Footer = () => {
    return ( 
        <footer>
            <div className="bg-gray-500 w-full">
                <div className="max-w-7xl mx-auto py-4 px-4 sm:px-6 lg:px-8 text-white md:flex justify-between items-center">
                    <div class="mb-6 md:m-0">
                        <span className="font-bold">Last modified:</span> 2021年02月18日, by Oliver
                    </div>
                    <SocialGroup />
                </div>
            </div>
            <div className="bg-gray-200">
                <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
                    Copyright © 2021 僅為個人用途，非商業使用
                </div>
            </div>
        </footer>
     );
}
 
export default Footer;