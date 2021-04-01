import React from 'react';
import { colorObj } from '../../utils/bill_category';

const ColorRow = ({ item }) => {
    return (
        <>
            <p>
                <span className={`${colorObj[item.category]}`}>
                    {item.category}
                </span>
            </p>
            {
                item.category === '其他' ? <span className="text-sm text-gray-800">預設</span> : <Remove />
            }
        </>
    )
}

const Row = ({ item }) => {
    return (
        <>
            <p>{item.key} - {item.category}</p>
            <Remove />
        </>
    )
}

const Remove = () => {
    return (<button className="w-6 inline-block cursor-pointer hover:text-red-600">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
    </button>)
}

const ListNode = ({ item, styleType }) => {
    return (
        <li className="border p-3 mb-3 last:mb-0 flex justify-between">
            {
                styleType === 'color' ? <ColorRow item={item} /> : <Row item={item} />
            }
        </li>
    );
}

export default ListNode;