import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

const SelectInput = ({ register, errors, options, attr, ...rest }) => {

    const [initOption] = useState({
        color: '請選擇代表色',
        keyword: '請選擇類別'
    })

    const [initKey] = useState({
        color: 'color',
        keyword: 'category'
    })

    return (
        <div className="w-full relative">
            <select
                id={initKey[attr]}
                name={initKey[attr]}
                ref={register()}
                className="w-full h-full border md:border-l-0 rounded md:rounded-none mb-3 md:mb-0 p-2 focus:outline-none focus:border-0 focus:ring-2 focus:ring-indigo-400 focus:ring-inset bg-white">
                {
                    options.map(option => <option key={uuidv4()} value={option.value}>{option.text}</option>)
                }
            </select>
            
            <p className="text-red-500 text-sm absolute">{errors.category && errors.category.message}</p>
        </div>
    );
}
 
export default SelectInput;