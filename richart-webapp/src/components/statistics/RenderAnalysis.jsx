import React from 'react';
import AnalysisBoard from './AnalysisBoard';
import Category from './Category';
import BarCahrtComponent from './BarChart';
import PieChartComponent from './PieChart';
import TableClassic from './TableClassic';

const RenderAnalysis = ({ monthly, category, scattered }) => {
    return (
        <>
            <div className="mb-3">
                <span className="badge-yellow w-auto">統計期間 { category.begin } ~ { category.last }</span>
            </div>
            <AnalysisBoard category={category} />
            <div className="md:grid grid-cols-4 row gap-4 mt-3">
                <div className="col-span-full md:col-span-1 md:row-span-3 relative md:mb-0 mb-4">
                    {
                        category && <Category categories={category} />
                    }
                </div>
                <div className="col-span-full md:col-span-3 md:mb-0 mb-4">
                    {
                        monthly && <div className="p-3 border rounded shadow">
                            <h4 className="text-center mb-3">單日消費分佈</h4>
                            <div style={{ width: '100%', height: 400 }}>
                                <BarCahrtComponent
                                    dataSet={scattered} barSize={10} dataKey={['billSpend', 'adjustSpend']}
                                    name={['調整前 $', '調整後 $']} colorType="bar_scatter" />
                            </div>
                        </div>
                    }
                </div>
                <div className="col-span-full md:col-span-3 md:mb-0 mb-4">
                    {
                        monthly && <div className="p-3 border rounded shadow">
                            <h4 className="text-center mb-3">各月份消費總額</h4>
                            <div style={{ width: '100%', height: 400 }}>
                                <BarCahrtComponent
                                    dataSet={monthly} barSize={15} dataKey={['spend', 'realSpend']}
                                    name={['調整前 $', '調整後 $']} colorType="bar" />
                            </div>
                        </div>
                    }
                </div>
                <div className="col-span-full md:col-span-3">
                    {
                        category && <div className="p-3 border rounded shadow">
                            <h4 className="text-center mb-3">消費總額比例</h4>
                            <div style={{ width: '100%', height: 400 }}>
                                <PieChartComponent dataSet={category.value} />
                            </div>
                            <TableClassic value={category.value}></TableClassic>
                            {/* <table className="rounded-t-lg m-5 w-5/6 mx-auto bg-gray-200 text-gray-800">
                                <thead>
                                    <tr className="text-left border-b-2 border-gray-300">
                                        <th className="px-4 py-3">類別</th>
                                        <th className="px-4 py-3">百分比</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        category.value.map((item, index) => 
                                            (<tr className="bg-gray-100 border-b border-gray-200" key={uuidv4()}>
                                                <td className="px-4 py-3">
                                                    <span className="w-4 h-4 rounded-full inline-block mr-2" style={{ background: `${COLORS[item.category]}`}}></span>
                                                    {item.category}
                                                </td>
                                                <td className="px-4 py-3">{item.by_percentage}</td>
                                            </tr>)
                                        )
                                    }
                                </tbody>
                            </table> */}
                        </div>
                    }
                </div>
            </div>
        </>
    )
}

export default RenderAnalysis;