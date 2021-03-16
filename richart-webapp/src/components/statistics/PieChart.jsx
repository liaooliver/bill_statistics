import React from 'react';
import { PieChart, Pie, Tooltip, Cell, ResponsiveContainer } from 'recharts';
import { COLORS } from '../../utils/bill_category.js';


// const RADIAN = Math.PI / 180;
// const renderCustomizedLabel = ({
//   cx, cy, midAngle, innerRadius, outerRadius, percent, index,
// }) => {
//    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
//   const x = cx + radius * Math.cos(-midAngle * RADIAN);
//   const y = cy + radius * Math.sin(-midAngle * RADIAN);

//   return (
//     <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
//       {`${(percent * 100).toFixed(0)}%`}
//     </text>
//   );
// };

const PieChartComponent = ({ dataSet }) => {
    return (
    <ResponsiveContainer>
        <PieChart>
            <Pie nameKey="category"
                dataKey="by_percentage"
                isAnimationActive={false}
                data={dataSet}
                cx="50%" cy="50%"
                outerRadius={120}
                fill="#8884d8"
                label
            >
                {
                    dataSet.map((entry, index) =>
                        <Cell
                            key={`cell-${index}`}
                            fill={COLORS[entry.category]}
                        />
                    )
                }
            </Pie>
            <Tooltip />
        </PieChart>
    </ResponsiveContainer>);
}

export default PieChartComponent;