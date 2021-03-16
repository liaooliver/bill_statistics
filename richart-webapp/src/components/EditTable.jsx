import React, { useContext, useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import Circle from '../components/Circle';
import { BillListContext } from '../context/BillListContext';
import { InteractiveContext } from '../context/InteractiveContext';

const EditTable = () => {

    const [ activeLoad, setActiveLoad ] = useState(false)
    const { register, handleSubmit, reset } = useForm();
    const { billDetail, setOpenEditMode } = useContext(InteractiveContext);
    const { updateBill, getBillList, billList } = useContext(BillListContext);

    const onSubmit = async (data) => {

        setActiveLoad(true)
        const updated = {
            ...billDetail,
            '類別': data["category"],
            '調整後金額': data["price"] ? Number(data["price"])*-1 : data["price"],
            '消費明細': data["detail"],
            '備忘錄': data["remark"]
        }

        const { page, limit} = billList
        updateBill(updated).then(res => {
            return getBillList(page, limit)
        }).then(res => {
            setActiveLoad(false)
            setOpenEditMode(false)
            sessionStorage.removeItem('StatisticsData')
        })
    }

    useEffect(() => {
        reset({
            category: billDetail['類別'],
            price: billDetail['調整後金額'],
            detail: billDetail['消費明細'],
            remark: billDetail['備忘錄']
        })        
    }, [billDetail, reset])

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="bg-white shadow w-full mx-auto my-16 rounded-lg sm:w-3/4 md:w-4/5 xl:w-2/5 relative z-20">
            <div className="px-4 py-5 sm:px-6 bg-gray-50">
                <h3 className="text-lg leading-6 font-medium text-gray-900">單筆資料明細</h3>
                <p className="text-sm font-medium text-gray-500">修改資料</p>
            </div>
            <div className="border-t border-gray-200">
                <dl className="sm:grid sm:grid-cols-4 sm:gap-2 sm:px-6 py-2">
                    <div className="bg-white px-4 py-1 col-span-2">
                        <dt className="text-sm font-medium text-gray-500">消費日期</dt>
                        <dd className="text-sm text-gray-900">
                            <div className="mt-2 relative">
                                <div className="absolute inset-y-0 left-0 pl-2 flex items-center pointer-events-none">
                                    <span className="text-gray-500 sm:text-sm inline-block w-5 h-5">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                        </svg>
                                    </span>
                                </div>
                                <p className="pl-8">{ billDetail['消費日期'] }</p>
                            </div>
                        </dd>
                    </div>
                    <div className="bg-white px-4 py-1 col-span-2">
                        <dt className="text-sm font-medium text-gray-500">入帳日期</dt>
                        <dd className="text-sm text-gray-900">
                            <div className="mt-2 relative">
                                <div className="absolute inset-y-0 left-0 pl-2 flex items-center pointer-events-none">
                                    <span className="text-gray-500 sm:text-sm inline-block w-5 h-5">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                        </svg>
                                    </span>
                                </div>
                                <p className="pl-8">{ billDetail['入帳日期'] }</p>
                            </div>
                        </dd>
                    </div>
                    <div className="bg-white px-4 py-1 col-span-2">
                        <dt className="text-sm font-medium text-gray-500">卡別</dt>
                        <dd className="text-sm text-gray-900">
                            <div className="mt-2 relative">
                                <div className="absolute inset-y-0 left-0 pl-2 flex items-center pointer-events-none">
                                    <span className="text-gray-500 sm:text-sm inline-block w-5 h-5">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                                        </svg>
                                    </span>
                                </div>
                                <p className="pl-8">{ billDetail['卡別'] }</p>
                            </div>
                        </dd>
                    </div>
                    <div className="bg-white px-4 py-1 col-span-2">
                        <dt className="text-sm font-medium text-gray-500">原始消費金額</dt>
                        <dd className="text-sm text-gray-900">
                            <div className="mt-2 relative">
                                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                    <span className="text-gray-500 sm:text-sm">$</span>
                                </div>
                                <p className="pl-7">{ billDetail['金額'] }</p>
                            </div>
                        </dd>
                    </div>
                    <div className="bg-white px-4 py-1 col-span-2">
                        <dt className="text-sm font-medium text-gray-500">消費分類</dt>
                        <dd className="text-sm text-gray-900">
                            <div className="mt-2 relative rounded shadow-sm">
                                <div className="absolute inset-y-0 left-0 pl-2 flex items-center pointer-events-none">
                                    <span className="text-gray-500 sm:text-sm inline-block w-5 h-5">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z" />
                                        </svg>
                                    </span>
                                </div>
                                <select id="category" name="category" ref={register} className="border outline-none bg-white focus:ring-1 focus:ring-indigo-400 focus:border-indigo-500 block w-full pl-8 pr-3 py-2 sm:text-sm border-gray-300 rounded">
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
                            </div>
                        </dd>
                    </div>
                    
                    <div className="bg-white px-4 py-1 col-span-2">
                        <dt className="text-sm font-medium text-gray-500">消費調整後金額</dt>
                        <dd className="text-sm text-gray-900">
                            <div className="mt-2 relative rounded shadow-sm">
                                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                    <span className="text-gray-500 sm:text-sm">$</span>
                                </div>
                                <input type="number" name="price" id="price"  ref={register} className="border outline-none focus:ring-1 focus:ring-indigo-400 focus:border-indigo-500 block w-full pl-7 pr-3 py-2 sm:text-sm border-gray-300 rounded" />
                            </div>
                        </dd>
                    </div>
                    <div className="bg-white px-4 py-1 col-span-4">
                        <dt className="text-sm font-medium text-gray-500 self-center">消費明細</dt>
                        <dd className="text-sm text-gray-900 self-center">
                            <div className="mt-2 relative rounded shadow-sm">
                                <textarea name="detail" ref={register} cols="30" rows="3" className="border outline-none focus:ring-1 focus:ring-indigo-400 focus:border-indigo-500 block w-full px-2 py-2 sm:text-sm border-gray-300 rounded resize-none"></textarea>
                            </div>
                        </dd>
                    </div>
                    <div className="bg-white px-4 py-1 col-span-4">
                        <dt className="text-sm font-medium text-gray-500 self-center">備忘錄</dt>
                        <dd className="text-sm text-gray-900 self-center">
                            <div className="mt-2 relative rounded shadow-sm">
                                <textarea name="remark" ref={register} cols="30" rows="3" className="border outline-none focus:ring-1 focus:ring-indigo-400 focus:border-indigo-500 block w-full px-2 py-2 sm:text-sm border-gray-300 rounded resize-none"></textarea>
                            </div>
                        </dd>
                    </div>

                    <div className="bg-white px-4 py-1 flex justify-end col-span-4">
                        <button
                            type="submit"
                            className="group px-4 py-2 btn-outline-none btn-rounded btn-color-blue btn-inner-circle">
                            {
                                activeLoad ? <><Circle />儲存中</> : '儲存'
                            }
                        </button>
                        <button onClick={()=>setOpenEditMode(false)} className="px-4 py-2 ml-4 btn-outline-none btn-rounded btn-color-red">取消</button>
                    </div>
                </dl>
            </div>
        </form>
    );
}

export default EditTable;