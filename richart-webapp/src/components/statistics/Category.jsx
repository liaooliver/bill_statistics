import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import { colorObj } from '../../utils/bill_category.js';
import { displayNTD } from '../../utils/currency';

const Category = ({ categories }) => {

    return (
        <div className="p-3 border rounded shadow md:sticky md:top-4">
            <div className="flex mb-3">
                <h5 className="flex-grow">帳單分類</h5>
            </div>
            <ul className="flex flex-wrap">
                {
                    categories && colorObj && categories.value.map(item => (
                        <li key={uuidv4()} className="mb-2 w-1/2 md:w-full">
                            <span className={`${colorObj[item.category]}`}>{ item.category }</span>
                            <span className="ml-3">{ displayNTD(item.by_spend)}</span>
                        </li>
                    ))    
                }
            </ul>
        </div>
    );
}

export default Category;