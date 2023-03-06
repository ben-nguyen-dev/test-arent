import React, { FC } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

export interface LineChartCustomProps {
    data: any;
    height?: number;
}

const LineChartCustom: FC<LineChartCustomProps> = ({ data, height }) => {
    console.log({ data });

    return (
        <ResponsiveContainer width="100%" height="100%">
            <LineChart
                width={10000}
                height={height}
                data={data}
                margin={{
                    top: 5,
                    right: 30,
                    left: 20,
                    bottom: 5,
                }}
            >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="pv" stroke="#8FE9D0" activeDot={{ r: 8 }} />
                <Line type="monotone" dataKey="uv" stroke="#FFCC21" />
            </LineChart>
        </ResponsiveContainer>
    );
};

export default LineChartCustom;
