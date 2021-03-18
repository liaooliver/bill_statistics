import React from 'react';
import { displayNTD } from '../../utils/currency';

const AnalysisBoard = ({ category }) => {
    return ( 
        <div className="grid grid-cols-3 gap-3 md:gap-6">
            <div className="col-span-full md:col-span-1 md:mb-0 p-3 pb-5 bg-blue-500 text-white rounded">
                <span className="text-xs font-semibold">總刷卡金額(調整前)</span>
                <h4 className="text-center text-4xl font-extrabold">{ displayNTD(category.accumulatedCost) }</h4>
            </div>
            <div className="col-span-full md:col-span-1 md:mb-0 p-3 pb-5 bg-yellow-500 text-white rounded">
                <span className="text-xs font-semibold">總刷卡金額(調整後)</span>
                <h4 className="text-center text-4xl font-extrabold">{ displayNTD(category.accumulatedRealCost) }</h4>
            </div>
            <div className="col-span-full md:col-span-1 md:mb-0 p-3 pb-5 bg-gray-600 rounded">
                
            </div>
        </div>
     );
} 
export default AnalysisBoard;