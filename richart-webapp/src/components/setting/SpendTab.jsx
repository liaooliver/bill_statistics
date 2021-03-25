import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import ListOption from './ListOption';
import InputText from './InputText';
import SelectInput from './SelectInput';

const SpendTab = () => {

    const [lists] = useState([{
        category: "交通", color: "灰色"
    }])

    const { register, handleSubmit, errors } = useForm({
        mode: "onSubmit",
        reValidateMode: "onChange"
    });

    const [options] = useState([
        { value: "badge-gray", text: "灰色" },
        { value: "badge-red", text: "紅色" },
        { value: "badge-yellow", text: "黃色" },
        { value: "badge-green", text: "綠色" },
        { value: "badge-blue", text: "藍色" },
        { value: "badge-indigo", text: "青色" },
        { value: "badge-purple", text: "紫色" },
        { value: "badge-pink", text: "桃紅色"}
    ])

    const onSubmit = (value) => {
        console.log(value)
    }

    return ( 
        <div>
            <h4 className="text-sm pb-3 text-gray-700">新增分類</h4>
            <form onSubmit={handleSubmit(onSubmit)} className="flex px-3">
                <InputText  {...{ register , errors}} />
                <SelectInput {...{ register , errors, options}} />
                <button type="submit" className="p-3 w-24 bg-yellow-400 rounded-r">儲存</button>
            </form>
            <h4 className="text-sm py-3 text-gray-700 mt-2">分類列表</h4>
            <ListOption {...{lists}} ></ListOption>
        </div>
    );
}
 
export default SpendTab;