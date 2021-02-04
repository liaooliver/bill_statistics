import React from 'react';
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { color_month } from '../../utils/bill_category.js';


const BarChartComponent = ({ dataSet }) => {
    return ( 
        <>
            <h4 className="text-center mb-3">月份消費總額</h4>
            <div style={{ width: '100%', height: 400 }}>
                <ResponsiveContainer>
                    <BarChart data={dataSet} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="category" />
                        <YAxis />
                        <Tooltip />
                        <Bar name="$" dataKey="spend" fill="#1e90ff">
                            {
                                dataSet.map((entry, index) => {
                                    return (<Cell
                                        key={`cell-${index}`}
                                        fill={color_month[index]}
                                    />)}
                                )
                            }
                        </Bar>
                    </BarChart>
                </ResponsiveContainer>
            </div>
        </>
     );
}
 
export default BarChartComponent;