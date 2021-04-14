import React, { useContext, useState } from 'react';
import { SettingContext } from '../../context/SettingContext';
import refresh from '../../assets/icons/refresh.png';

const ColorRow = ({ item, type }) => {
    return (
        <>
            <p>
                <span className={`${item.color}`}>
                    {item.category}
                </span>
            </p>
            {
                item.category === '其他' ? <span className="text-sm text-gray-700 font-semibold">預設</span> : <Remove type={type} item={item} />
            }
        </>
    )
}

const Row = ({ item, type }) => {
    return (
        <>
            <p>{item.key} - {item.category}</p>
            <Remove type={type} item={item} />
        </>
    )
}

const Remove = ({ type, item }) => {

    const { deleteSetting } = useContext(SettingContext)
    const [process, setProcess] = useState(false)

    const remove = (item, type) => {
        deleteSetting(item, type)
        setProcess(true)
    }

    return (
        <>
            {
                process ?
                    <span className="animate-spin-slow w-6 h-6">
                        <img width="100%" src={refresh} alt="" />
                    </span> :
                    <button type="button" onClick={() => remove(item, type)} className="w-6 inline-block cursor-pointer hover:text-red-600">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                    </button>
            }
        </>
    )
}

const ListNode = ({ item, styleType }) => {

    return (
        <li className="border p-3 mb-3 last:mb-0 flex justify-between">
            {
                styleType === 'color' ? <ColorRow type={styleType} item={item} /> : <Row type={styleType} item={item} />
            }
        </li>
    );
}

export default ListNode;