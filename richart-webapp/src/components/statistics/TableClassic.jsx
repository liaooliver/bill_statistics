import React from 'react';
import { COLORS } from '../../utils/bill_category.js';
import { v4 as uuidv4 } from 'uuid';

const TableClassic = ({ value }) => {
    return ( <table className="rounded-t-lg m-5 w-5/6 mx-auto bg-gray-200 text-gray-800">
    <thead>
        <tr className="text-left border-b-2 border-gray-300">
            <th className="px-4 py-3">類別</th>
            <th className="px-4 py-3">百分比</th>
        </tr>
    </thead>
    <tbody>
        {
            value.map((item, index) => 
                (<tr className="bg-gray-100 border-b border-gray-200" key={uuidv4()}>
                    <td className="flex items-center px-4 py-3">
                        <span className="w-4 h-4 rounded-full inline-block mr-2" style={{ background: `${COLORS[item.category]}`}}></span>
                        {item.category}
                    </td>
                    <td className="px-4 py-3 font-semibold">{item.by_percentage}</td>
                </tr>)
            )
        }
    </tbody>
</table> );
}
 
export default TableClassic;