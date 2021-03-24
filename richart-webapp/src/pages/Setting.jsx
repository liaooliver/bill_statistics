import React, { useEffect, useState, useContext } from 'react';
import { useForm } from 'react-hook-form';
import { SettingContext } from '../context/SettingContext';
import InputText from '../components/setting/InputText';
import SelectInput from '../components/setting/SelectInput';
import Category from '../components/setting/Category';
import ListOption from '../components/setting/ListOption';


const Tabs = ({ children, index }) => {
    useEffect(()=>{ console.log(index) }, [index])
    return (
        <div className="w-3/4 p-2 border-l">{children[index]}</div>
    )
}

const Setting = () => {

    const { keynames, addKeyNames } = useContext(SettingContext)
    const { register, handleSubmit, reset, errors } = useForm({
        mode: "onSubmit",
        reValidateMode: "onChange"
    });
    const [index, setIndex] = useState(0)

    useEffect(()=>{ console.log(keynames) }, [])
    
    const handleChange = (index) => setIndex(index)

    const onSubmit = (value) => {
        addKeyNames(value)
        // setKeynames([...keynames, value])
        // reset({
        //     keyname: "",
        //     category: "none"
        // })
    }

    return ( 
        <div className="max-w-4xl mx-auto py-6 sm:px-6 lg:px-8">
            <div className="p-3 border shadow rounded">
                <div className="flex items-center py-2 border-b">
                    <span className="w-6 inline-block">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                    </span>
                    <h4 className="text-base ml-1">設定功能</h4>
                </div>
                <div className="flex pt-3">
                    <Category handleChange={handleChange} />
                    <Tabs index={index}>
                        {/* 自動分類 */}
                        <div>
                            <h4 className="text-sm pb-3 text-gray-700">新增關鍵字</h4>
                            <form onSubmit={handleSubmit(onSubmit)} className="flex px-3">
                                <InputText  {...{ register , errors}} />
                                <SelectInput {...{ register , errors}} />
                                <button type="submit" className="p-3 w-24 bg-yellow-400 rounded-r">儲存</button>
                            </form>
                            <h4 className="text-sm py-3 text-gray-700 mt-2">自動分類關鍵字</h4>
                            <ListOption {...{keynames}} ></ListOption>
                        </div>
                        {/* 類別 */}
                        <div>2</div>
                    </Tabs>
                </div>
            </div>
        </div>
    );
}
 
export default Setting;