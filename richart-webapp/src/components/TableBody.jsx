import React, { useContext, useEffect, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { InteractiveContext } from '../context/InteractiveContext';
import { displayNTD } from '../utils/currency';
import { colorObj } from '../utils/bill_category';

const LoadingRow = () => {
    return (
        <tr>
            <td className="px-6 py-4 whitespace-nowrap">
                <div className="w-full h-7 bg-gray-400 rounded"></div>
            </td>
            <td className="px-6 py-4 whitespace-nowrap">
                <div className="w-full h-7 bg-gray-400 rounded"></div>
            </td>
            <td className="px-6 py-4 whitespace-nowrap">
                <div className="w-full h-7 bg-gray-400 rounded"></div>
            </td>
            <td className="px-6 py-4 whitespace-nowrap">
                <div className="w-full h-7 bg-gray-400 rounded"></div>
            </td>
            <td className="px-6 py-4 whitespace-nowrap">
                <div className="w-full h-7 bg-gray-400 rounded"></div>
            </td>
            <td className="px-6 py-4 whitespace-nowrap">
                <div className="w-full h-7 bg-gray-400 rounded"></div>
            </td>
            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                <div className="w-full h-7 bg-gray-400 rounded"></div>
            </td>
            <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                <div className="py-1 px-1 h-7 rounded bg-indigo-200 text-indigo-700 hover:text-indigo-100 hover:bg-indigo-600"></div>
            </td>
        </tr>
    )
}

const RenderRow = ({ data, activeEdit }) => {
    
    return (  
        <tr>
            <td className="px-6 py-4 whitespace-nowrap">
                <div>{data['消費日期']}</div>
            </td>
            <td className="px-6 py-4 whitespace-nowrap">
                <div>{data['卡別']}</div>
            </td>
            <td className="px-6 py-4 whitespace-nowrap">
                <div>{ displayNTD(data['金額']) }</div>
            </td>
            <td className="px-6 py-4 whitespace-nowrap">
                <div>{ displayNTD(data['調整後金額']) }</div>
            </td>
            <td className="px-6 py-4 whitespace-nowrap">
                <div>{data['消費明細']}</div>
            </td>
            <td className="px-6 py-4 whitespace-nowrap">
                <span className={`${colorObj[data['類別']]}`}>
                    {data['類別']}
                </span>
            </td>
            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                {data['備忘錄']}
            </td>
            <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                <button onClick={()=> activeEdit(data)} className="py-1 px-3 btn-outline-none btn-rounded btn-color-indigo">編輯</button>
            </td>
        </tr>
    )
}

const TableBody = ({ loading, data }) => {

    const [rows, setRows] = useState([]);
    const { setOpenEditMode, setBillDetail } = useContext(InteractiveContext);

    useEffect(() => {
        
        const activeEdit = (data) => {
            setBillDetail(data)
            setOpenEditMode(true)
        }

        if (loading === true) {
            let rowsObj = []
            for (let i = 0; i < 10; i++) {
                rowsObj.push(<LoadingRow key={uuidv4()} />);
            }
            setRows(rowsObj)
        } else {
            let renderObj = data && data.map((item) =>
                <RenderRow
                    key={uuidv4()}
                    data={item}
                    activeEdit={activeEdit}
                />
            )
            setRows(renderObj)
        }

    }, [loading, data, setOpenEditMode, setBillDetail])
    


    return (
        <tbody className={`bg-white divide-y divide-gray-200 ${loading ? "animate-pulse" : ""}`}>
            {rows}
        </tbody>
    );
}

export default TableBody;