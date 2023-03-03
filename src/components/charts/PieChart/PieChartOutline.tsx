import React, { FC } from 'react';
import { PieChart, Cell, Pie } from 'recharts';

export interface PieChartOutlineProps {
    data: any;
    label: string;
    width: number;
    height: number;
}

export const COLORS = ['#FFFFFF', 'transparent'];

const PieChartOutline: FC<PieChartOutlineProps> = ({ data, width, height, label }) => {
    return (
        <div className="pie-chart-outline h-full w-full relative">
            <PieChart width={width} height={height} className="m-auto min-h-full flex items-center">
                <Pie
                    data={data}
                    className="flex justify-center items-center m-auto"
                    innerRadius={width / 2 - 4}
                    outerRadius={width / 2}
                    dataKey="value"
                    stroke="0"
                    rotate={180}
                    startAngle={90}
                    endAngle={-270}
                >
                    {data.map((entry: any, index: number) => (
                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                </Pie>
            </PieChart>
            <div className="text-white inset-center">{label}</div>
        </div>
    );
};

export default PieChartOutline;
