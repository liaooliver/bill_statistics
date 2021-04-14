import React, { useState, useEffect, useContext } from 'react';
import { useForm } from 'react-hook-form';
import { SettingContext } from '../context/SettingContext';
import Category from '../components/setting/Category';
import SelectInput from '../components/common/SelectInput';
import InputText from '../components/common/InputText';
import ListOption from '../components/setting/ListOption';
import ScaleLoading from '../components/loadingStyle/ScaleLoading';

const Tabs = ({ children, index }) => {
    return (
        <div className="w-full sm:w-3/4 p-2 sm:border-l">{children[index]}</div>
    )
}

const Setting = () => {

    const { initSetting, keywords, categories, categoryOptions, submitNewSetting } = useContext(SettingContext)

    const { register, handleSubmit, errors, unregister } = useForm({
        mode: "onChange"
    });

    const [isloading, setIsloading] = useState(false)
    const [index, setIndex] = useState(0)
    const handleChange = (index) => setIndex(index)

    // fixed
    const [colors] = useState([
        { value: "badge-gray", text: "灰色" },
        { value: "badge-red", text: "紅色" },
        { value: "badge-yellow", text: "黃色" },
        { value: "badge-green", text: "綠色" },
        { value: "badge-blue", text: "藍色" },
        { value: "badge-indigo", text: "青色" },
        { value: "badge-purple", text: "紫色" },
        { value: "badge-pink", text: "桃紅色" }
    ])

    const onSubmit = async (value) => {
        console.log(value, errors)
        // setIsloading(true)
        // await submitNewSetting(value)
        // Object.keys(value).forEach(key => unregister(key))
        // setIsloading(false)
    }

    useEffect(() => {
        async function init() {
            await initSetting()
        }
        init()
    }, [])

    return (
        <div className="max-w-4xl mx-auto py-6 px-3 sm:px-6 lg:px-8">
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
                            {/* add form */}
                            <h4 className="text-sm pb-3 text-gray-700">新增關鍵字</h4>
                            <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col md:flex-row px-3">
                                <InputText  {...{ register, errors }} attr={'keyword'} />
                                <SelectInput {...{ register, errors }} options={categoryOptions} attr={'keyword'} />
                                <button type="submit" className="py-2 px-3 w-56 bg-yellow-400 rounded-r">
                                    {
                                        isloading ? <p className="flex items-center text-white font-bold"><svg className="animate-spin -ml-1 mr-2 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                        </svg>儲存中</p> : <p className="text-white font-bold">儲存</p>
                                    }
                                </button>
                            </form>
                            <h4 className="text-sm py-3 text-gray-700 mt-2">自動分類關鍵字</h4>
                            {/* exist list */}
                            {
                                keywords.length > 0 ? <ListOption items={keywords} styleType={'keyword'} /> : <ScaleLoading />
                            }
                        </div>
                        {/* 類別 */}
                        <div>
                            {/* add form */}
                            <h4 className="text-sm pb-3 text-gray-700">新增消費類別</h4>
                            <form onSubmit={handleSubmit(onSubmit)} className="flex px-3">
                                <InputText  {...{ register, errors }} attr={'color'} />
                                <SelectInput {...{ register, errors }} options={colors} attr={'color'} />
                                <button type="submit" className="py-2 px-3 w-56 bg-yellow-400 rounded-r">
                                    {
                                        isloading ? <p className="flex items-center text-white font-bold"><svg className="animate-spin -ml-1 mr-2 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                        </svg>儲存中</p> : <p className="text-white font-bold">儲存</p>
                                    }
                                </button>
                            </form>
                            <h4 className="text-sm py-3 text-gray-700 mt-2">消費類別</h4>
                            {
                                categories.length > 0 ? <ListOption items={categories} styleType={'color'} /> : <ScaleLoading />
                            }
                        </div>
                    </Tabs>
                </div>
            </div>
        </div>
    );
}

export default Setting;