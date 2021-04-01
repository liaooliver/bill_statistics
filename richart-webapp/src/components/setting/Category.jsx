import React from 'react';
import Title from './Title';

const Category = ({ handleChange }) => {
    return (
        <ul className="hidden sm:block w-1/4 p-2">
            <li className="hover:bg-gray-100 p-2 py-3 cursor-pointer" onClick={() => handleChange(0)}>
                <Title title="自動分類設定"></Title>
            </li>
            <li className="hover:bg-gray-100 p-2 py-3 cursor-pointer" onClick={() => handleChange(1)}>
                <Title title="消費類別設定"></Title>
            </li>
        </ul>
    );
}

export default Category;