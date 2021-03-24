import React from 'react';

const ListNode = ({ item }) => {
    return ( 
        <li className="border p-3 mb-3 last:mb-0 flex justify-between">
            {item.keyname} - { item.category}
            
            <span className="w-6 inline-block cursor-pointer hover:text-red-600">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
            </span>
        </li>
     );
}
 
export default ListNode;