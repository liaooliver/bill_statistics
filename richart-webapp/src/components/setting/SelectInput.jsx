import React from 'react';

const SelectInput = ({ register, errors }) => {
    return (
        <div className="w-full relative">
            <select placeholder="類別"
                id="category"
                name="category"
                ref={register({
                    validate: value => !value.includes("none") || '必填',
                })}
                className="w-full h-full border border-l-0 p-2 focus:outline-none focus:border-0 focus:ring-2 focus:ring-indigo-400 focus:ring-inset bg-white">
                <option value="none">請選擇類別</option>
                <option value="吃飯">吃飯</option>
                <option value="交通">交通</option>
                <option value="捐款">捐款</option>
                <option value="3C">3C</option>
                <option value="衣服">衣服</option>
                <option value="娛樂">娛樂</option>
                <option value="旅遊">旅遊</option>
                <option value="電話">電話</option>
                <option value="進修">進修</option>
                <option value="其他">其他</option>
            </select>
            <p className="text-red-500 text-sm absolute">{errors.category && errors.category.message}</p>
        </div>
    );
}
 
export default SelectInput;