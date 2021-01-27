import React, { useContext, useEffect, useState } from 'react';
import { InteractiveContext } from '../context/InteractiveContext';

const LoadingRow = ({index}) => {
    return (
        <tr key={index}>
            <td className="px-6 py-4 whitespace-nowrap">
                <div className="w-full h-5 bg-gray-400 rounded"></div>
            </td>
            <td className="px-6 py-4 whitespace-nowrap">
                <div className="w-full h-5 bg-gray-400 rounded"></div>
            </td>
            <td className="px-6 py-4 whitespace-nowrap">
                <div className="w-full h-5 bg-gray-400 rounded"></div>
            </td>
            <td className="px-6 py-4 whitespace-nowrap">
                <div className="w-full h-5 bg-gray-400 rounded"></div>
            </td>
            <td className="px-6 py-4 whitespace-nowrap">
                <div className="w-full h-5 bg-gray-400 rounded"></div>
            </td>
            <td className="px-6 py-4 whitespace-nowrap">
                <div className="w-full h-5 bg-gray-400 rounded"></div>
            </td>
            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                <div className="w-full h-5 bg-gray-400 rounded"></div>
            </td>
            <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                <div className="py-1 px-1 h-5 rounded bg-indigo-200 text-indigo-700 hover:text-indigo-100 hover:bg-indigo-600"></div>
            </td>
        </tr>
    )
}

const RenderRow = ({data, index, setOpenEditMode}) => {
    return (  
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
    )
}

const TableBody = ({ loading, data }) => {

    const [rows, setRows] = useState([])
    const { setOpenEditMode } = useContext(InteractiveContext)

    useEffect(() => {
        let rowsObj = []

        if (loading === true) {
            for (let i = 0; i < 10; i++) {
                rowsObj.push(<LoadingRow index={i} />);
            }
            setRows(rowsObj)
        } else {
            let renderObj = data && data.map((item, index) => <RenderRow data={item} index={index} setOpenEditMode={setOpenEditMode} />)
            setRows(renderObj)
        }

    },[loading])

    return (
        <tbody className={`bg-white divide-y divide-gray-200 ${loading ? "animate-pulse" : ""}`}>
            {rows}
        </tbody>
    );
}

export default TableBody;