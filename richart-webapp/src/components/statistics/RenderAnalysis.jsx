import React from 'react';
import AnalysisBoard from './AnalysisBoard';
import Category from './Category';
import BarCahrtComponent from './BarChart';
import PieChartComponent from './PieChart';

const RenderAnalysis = ({ monthly, category, scattered }) => {
    return (
        <div className="md:grid grid-cols-4 row gap-4">
            <AnalysisBoard />
            <div className="col-span-full md:col-span-1 md:row-span-3 relative md:mb-0 mb-4">
                {
                    category && <Category categories={category} />
                }
            </div>
            <div className="col-span-full md:col-span-3 md:mb-0 mb-4">
                {
                    monthly && <div className="p-3 border rounded shadow">
                        <BarCahrtComponent
                            dataSet={scattered} title="消費日分佈" barSize={10}
                            dataKey={['billSpend', 'adjustSpend']} name={['調整前 $', '調整後 $']}
                            colorType="bar_scatter" />
                    </div>
                }
            </div>
            <div className="col-span-full md:col-span-3 md:mb-0 mb-4">
                {
                    monthly && <div className="p-3 border rounded shadow">
                        <BarCahrtComponent dataSet={monthly} title="各月份消費總額" dataKey={["spend"]} name={['$']} colorType="bar" />
                    </div>
                }
            </div>
            <div className="col-span-full md:col-span-3">
                {
                    category && <div className="p-3 border rounded shadow ">
                        <PieChartComponent dataSet={category.value} title="消費總額比例" />
                    </div>
                }
            </div>
        </div>
    )
}

export default RenderAnalysis;