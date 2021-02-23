import React from 'react';

const SocialItem = ({ img, url, size }) => {
    return ( 
        <li className="mr-3 last:mr-0">
            <a className="w-8 h-8 ring-2 ring-gray-300 hover:ring-blue-300   rounded-full overflow-hidden bg-white flex justify-center items-center"
                href={url}>
                <img className="hover:scale-150" width={size} src={img} alt="img" />
            </a>
        </li>
    );
}
 
export default SocialItem;