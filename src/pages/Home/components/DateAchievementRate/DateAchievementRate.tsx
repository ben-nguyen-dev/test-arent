import React, { FC, useMemo, useState } from 'react';
import PieChartOutline from '../../../../components/charts/PieChart/PieChartOutline';

interface IDataChart {
    date: string;
    expect: number;
    remaining: number;
}

export interface DateAchievementRateProps {
    backgroundUrl: string;
    data: IDataChart;
}

const DateAchievementRate: FC<DateAchievementRateProps> = ({ backgroundUrl, data }) => {
    const dataChart = useMemo(() => {
        return [
            {
                name: '',
                value: data.remaining / data.expect,
            },
            {
                name: '',
                value: (data.expect - data.remaining) / data.expect,
            },
        ];
    }, [data]);

    return (
        <div className="date-achievement-rate relative w-full h-full">
            <img className="absolute w-full h-full object-cover" src={backgroundUrl} alt="" />
            <PieChartOutline
                data={dataChart}
                width={180}
                height={180}
                label={`${data.date} ${(data.remaining / data.expect) * 100}%`}
            />
        </div>
    );
};

export default DateAchievementRate;
