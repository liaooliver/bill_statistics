import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

const SelectInput = ({ register, errors, options, attr }) => {

    const [initOption] = useState({
        color: '請選擇代表色',
        keyword: '請選擇類別'
    })

    return (
        <div className="w-full relative">
            <select placeholder="類別"
                id="category"
                name="category"
                ref={register({
                    validate: value => !value.includes("none") || '必填',
                })}
                className="w-full h-full border border-l-0 p-2 focus:outline-none focus:border-0 focus:ring-2 focus:ring-indigo-400 focus:ring-inset bg-white">
                <option value="none">{ initOption[attr] }</option>
                {
                    options.map(option => <option key={uuidv4()} value={option.value}>{option.text}</option>)
                }
            </select>
            <p className="text-red-500 text-sm absolute">{errors.category && errors.category.message}</p>
        </div>
    );
}
 
export default SelectInput;