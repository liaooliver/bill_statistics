import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import ListOption from './ListOption';
import InputText from './InputText';
import SelectInput from './SelectInput';

const KeywordTab = () => {

    const [lists, setLists] = useState([{
        key: "火車", category: "交通"
    }])

    const { register, handleSubmit, reset, errors } = useForm({
        mode: "onSubmit",
        reValidateMode: "onChange"
    });

    const [options] = useState([
        { value: "吃飯", text: "吃飯" },
        { value: "交通", text: "交通" },
        { value: "捐款", text: "捐款" },
        { value: "3C", text: "3C" },
        { value: "衣服", text: "衣服" },
        { value: "娛樂", text: "娛樂" },
        { value: "旅遊", text: "旅遊" },
        { value: "電話", text: "電話" },
        { value: "進修", text: "進修" },
        { value: "其他", text: "其他"}
    ])

    const onSubmit = (value) => {
        reset({
            keyname: "",
            category: "none"
        })
    }

    return ( 
        <div>
            <h4 className="text-sm pb-3 text-gray-700">新增關鍵字</h4>
            <form onSubmit={handleSubmit(onSubmit)} className="flex px-3">
                <InputText  {...{ register , errors}} />
                <SelectInput {...{ register , errors, options}} />
                <button type="submit" className="p-3 w-24 bg-yellow-400 rounded-r">儲存</button>
            </form>
            <h4 className="text-sm py-3 text-gray-700 mt-2">自動分類關鍵字</h4>
            <ListOption {...{lists}} ></ListOption>
        </div>
    );
}
 
export default KeywordTab;