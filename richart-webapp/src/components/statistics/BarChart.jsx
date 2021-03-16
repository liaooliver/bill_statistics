import React from 'react';
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { color_month } from '../../utils/bill_category.js';
import { v4 as uuidv4 } from 'uuid';

const BarChartComponent = ({ dataSet, title, dataKey, name, barSize, colorType }) => {

    return ( 
        <ResponsiveContainer>
            <BarChart data={dataSet} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="category" />
                <YAxis />
                <Tooltip />
                {
                    dataKey.map((key, bar_index) => {
                        console.log(key, bar_index)
                        return (
                            < Bar name={name[bar_index]} dataKey = { key } fill = "#1e90ff" barSize = { barSize } key={uuidv4()}>
                            {
                                dataSet.map((entry, index) => {
                                    return (<Cell
                                        key={`cell-${index}`}
                                        fill={ colorType === 'bar' ? color_month['bar'][bar_index] : color_month['bar_scatter'][bar_index]}
                                    />)}
                                )
                            }
                        </Bar>
                        )
                    })
                }
            </BarChart>
        </ResponsiveContainer>
     );
}
 
export default BarChartComponent;