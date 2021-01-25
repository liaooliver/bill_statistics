import React, { useEffect, useContext } from 'react';
import { InteractiveContext } from '../context/InteractiveContext';

const Table = ({ billList }) => {

    const { setOpenEditMode } = useContext(InteractiveContext)

    useEffect(() => {
        console.log(billList)
    })

    return (
        <>
            {
                <div className="flex flex-col">
                    <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                        <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
                            <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
                                <table className="min-w-full divide-y divide-gray-200">
                                    <thead className="bg-gray-50">
                                        <tr>
                                            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">消費日期</th>
                                            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">卡別</th>
                                            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">刷卡金額</th>
                                            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">金額調整</th>
                                            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">消費明細</th>
                                            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">類別</th>
                                            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">備忘錄</th>
                                            <th scope="col" className="relative px-6 py-3"><span className="sr-only">Edit</span></th>
                                        </tr>
                                    </thead>
                                    <tbody className="bg-white divide-y divide-gray-200">
                                        {
                                            billList.payload.map((data, index) => (
                                                <tr key={index}>
                                                    <td className="px-6 py-4 whitespace-nowrap">
                                                        <div>{data['入帳日期']}</div>
                                                    </td>
                                                    <td className="px-6 py-4 whitespace-nowrap">
                                                        <div>{data['卡別']}</div>
                                                    </td>
                                                    <td className="px-6 py-4 whitespace-nowrap">
                                                        <div>{data['金額']}</div>
                                                    </td>
                                                    <td className="px-6 py-4 whitespace-nowrap">
                                                        <div>{data['isEdit']}</div>
                                                    </td>
                                                    <td className="px-6 py-4 whitespace-nowrap">
                                                        <div>{data['消費明細']}</div>
                                                    </td>
                                                    <td className="px-6 py-4 whitespace-nowrap">
                                                        <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                                                            {data['類別']}
                                                        </span>
                                                    </td>
                                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                                        {data['備忘錄']}
                                                    </td>
                                                    <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                                                        <button onClick={()=> setOpenEditMode(true)} className="py-1 px-3 rounded bg-indigo-200 text-indigo-700 hover:text-indigo-100 hover:bg-indigo-600">編輯</button>
                                                    </td>
                                                </tr>
                                            ))
                                        }
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            }
        </>
    );
}

export default Table;