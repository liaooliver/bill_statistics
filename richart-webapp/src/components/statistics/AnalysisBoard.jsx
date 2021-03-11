import React from 'react';

const AnalysisBoard = () => {
    return ( 
        <>
            <div className="col-span-full md:col-span-1 md:mb-0 mb-4 items-stretch">
                <div className=" p-3 bg-blue-500 text-white rounded h-100">
                    <div className="flex items-center">
                        <span className="text-xs font-semibold">統計期間</span>
                        <span className="text-sm pl-3 font-bold">2020/10/20 ~ 2020/12/31</span>
                    </div>
                    <div>
                        <span className="text-xs font-semibold">總刷卡金額(調整前)</span>
                        <h4 className="text-center text-4xl font-extrabold">100,100</h4>
                    </div>
                </div>
            </div>
            <div className="col-span-full md:col-span-1 md:mb-0 mb-4 p-3 bg-yellow-500 text-white rounded">
                <div className="flex items-center">
                    <span className="text-xs font-semibold">統計期間</span>
                    <span className="text-sm pl-3 font-bold">2020/10/20 ~ 2020/12/31</span>
                </div>
                <div>
                    <span className="text-xs font-semibold">總刷卡金額(調整後)</span>
                    <h4 className="text-center text-4xl font-extrabold">80,100</h4>
                </div>
            </div>
            <div className="col-span-full md:col-span-1 md:mb-0 mb-4 p-3 border rounded shadow">
                
            </div>
            <div className="col-span-full md:col-span-1 md:mb-0 mb-4 p-3 border rounded shadow">
                
            </div>
        </>
     );
}
 
export default AnalysisBoard;