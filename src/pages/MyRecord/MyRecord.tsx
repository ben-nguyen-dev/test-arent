import React from 'react';
import Button from '../../components/buttons/Button/Button';
import LineChartCustom from '../../components/charts/LineChart/LineChartCustom';
import EntryButton from './components/EntryButton/EntryButton';
import MyDiary from './components/MyDiary/MyDiary';
import MyExercise from './components/MyExercise/MyExercise';

const entryButtons = [
    {
        label: 'BODY RECORD',
        description: '自分のカラダの記録',
        backgroundUrl: '/images/myRecord/MyRecommend-1.jpg',
    },

    {
        label: 'MY EXERCISE',
        description: '自分の運動の記録',
        backgroundUrl: '/images/myRecord/MyRecommend-2.jpg',
    },
    {
        label: 'MY DIARY',
        description: '自分の日記',
        backgroundUrl: '/images/myRecord/MyRecommend-3.jpg',
    },
];

const myExercises = {
    date: '2021.05.21',
    dataDetail: [
        {
            title: '家事全般（立位・軽い）',
            energy: 26,
            time: 10,
        },

        {
            title: '家事全般（立位・軽い）',
            energy: 26,
            time: 10,
        },
        {
            title: '家事全般（立位・軽い）',
            energy: 26,
            time: 10,
        },
        {
            title: '家事全般（立位・軽い）',
            energy: 26,
            time: 10,
        },
        {
            title: '家事全般（立位・軽い）',
            energy: 26,
            time: 10,
        },
        {
            title: '家事全般（立位・軽い）',
            energy: 26,
            time: 10,
        },
        {
            title: '家事全般（立位・軽い）',
            energy: 26,
            time: 10,
        },
        {
            title: '家事全般（立位・軽い）',
            energy: 26,
            time: 10,
        },
        {
            title: '家事全般（立位・軽い）',
            energy: 26,
            time: 10,
        },
        {
            title: '家事全般（立位・軽い）',
            energy: 26,
            time: 10,
        },
        {
            title: '家事全般（立位・軽い）',
            energy: 26,
            time: 10,
        },
        {
            title: '家事全般（立位・軽い）',
            energy: 26,
            time: 10,
        },
        {
            title: '家事全般（立位・軽い）',
            energy: 26,
            time: 10,
        },
        {
            title: '家事全般（立位・軽い）',
            energy: 26,
            time: 10,
        },
        {
            title: '家事全般（立位・軽い）',
            energy: 26,
            time: 10,
        },
        {
            title: '家事全般（立位・軽い）',
            energy: 26,
            time: 10,
        },
        {
            title: '家事全般（立位・軽い）',
            energy: 26,
            time: 10,
        },
        {
            title: '家事全般（立位・軽い）',
            energy: 26,
            time: 10,
        },
        {
            title: '家事全般（立位・軽い）',
            energy: 26,
            time: 10,
        },
        {
            title: '家事全般（立位・軽い）',
            energy: 26,
            time: 10,
        },
        {
            title: '家事全般（立位・軽い）',
            energy: 26,
            time: 10,
        },
        {
            title: '家事全般（立位・軽い）',
            energy: 26,
            time: 10,
        },
        {
            title: '家事全般（立位・軽い）',
            energy: 26,
            time: 10,
        },
        {
            title: '家事全般（立位・軽い）',
            energy: 26,
            time: 10,
        },
        {
            title: '家事全般（立位・軽い）',
            energy: 26,
            time: 10,
        },
        {
            title: '家事全般（立位・軽い）',
            energy: 26,
            time: 10,
        },
        {
            title: '家事全般（立位・軽い）',
            energy: 26,
            time: 10,
        },
        {
            title: '家事全般（立位・軽い）',
            energy: 26,
            time: 10,
        },
        {
            title: '家事全般（立位・軽い）',
            energy: 26,
            time: 10,
        },
        {
            title: '家事全般（立位・軽い）',
            energy: 26,
            time: 10,
        },
        {
            title: '家事全般（立位・軽い）',
            energy: 26,
            time: 10,
        },
        {
            title: '家事全般（立位・軽い）',
            energy: 26,
            time: 10,
        },
        {
            title: '家事全般（立位・軽い）',
            energy: 26,
            time: 10,
        },
        {
            title: '家事全般（立位・軽い）',
            energy: 26,
            time: 10,
        },
    ],
};

const myDiary = [
    {
        date: '2021.05.21',
        time: '23:25',
        title: `私の日記の記録が一部表示されます`,
        description: ` テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト…`,
    },
    {
        date: '2021.05.21',
        time: '23:25',
        title: `私の日記の記録が一部表示されます`,
        description: ` テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト…`,
    },
    {
        date: '2021.05.21',
        time: '23:25',
        title: `私の日記の記録が一部表示されます`,
        description: ` テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト…`,
    },
    {
        date: '2021.05.21',
        time: '23:25',
        title: `私の日記の記録が一部表示されます`,
        description: ` テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト…`,
    },
    {
        date: '2021.05.21',
        time: '23:25',
        title: `私の日記の記録が一部表示されます`,
        description: ` テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト…`,
    },
    {
        date: '2021.05.21',
        time: '23:25',
        title: `私の日記の記録が一部表示されます`,
        description: ` テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト…`,
    },
    {
        date: '2021.05.21',
        time: '23:25',
        title: `私の日記の記録が一部表示されます`,
        description: ` テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト…`,
    },
    {
        date: '2021.05.21',
        time: '23:25',
        title: `私の日記の記録が一部表示されます`,
        description: ` テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト…`,
    },
];

export const bodyRecords = [
    {
        name: '6 月',
        uv: 4000,
        pv: 2400,
        amt: 2400,
    },
    {
        name: '7 月',
        uv: 3000,
        pv: 1398,
        amt: 2210,
    },
    {
        name: '8 月',
        uv: 2000,
        pv: 9800,
        amt: 2290,
    },
    {
        name: '9 月',
        uv: 2780,
        pv: 3908,
        amt: 2000,
    },
    {
        name: '10 月',
        uv: 1890,
        pv: 4800,
        amt: 2181,
    },
    {
        name: '11 月',
        uv: 2390,
        pv: 3800,
        amt: 2500,
    },
    {
        name: '12 月',
        uv: 3490,
        pv: 4300,
        amt: 2100,
    },

    {
        name: '1 月',
        uv: 3490,
        pv: 4300,
        amt: 2100,
    },
    {
        name: '2 月',
        uv: 3490,
        pv: 4300,
        amt: 2100,
    },
    {
        name: '3 月',
        uv: 2500,
        pv: 2800,
        amt: 2100,
    },
    {
        name: '4 月',
        uv: 2000,
        pv: 2200,
        amt: 2100,
    },
    {
        name: '5 月',
        uv: 1900,
        pv: 2000,
        amt: 2100,
    },
];

const MyRecord = () => {
    return (
        <div>
            <div className="entry-button grid grid-flow-col grid-cols-3 px-[160px] gap-[48px] mt-[56px]">
                {entryButtons.map((button, index) => (
                    <EntryButton
                        key={`${button.label}-${index}`}
                        backgroundUrl={button.backgroundUrl}
                        label={button.label}
                        description={button.description}
                    />
                ))}
            </div>

            <div className="line-chart w-full mt-[56px] px-[160px]">
                <div className="flex flex-col bg-midnight pt-[16px] px-[24px] w-full h-[400px]">
                    <div className="flex items-start text-white">
                        <p className="w-[70px] mr-[24px]">BODY RECORD</p>
                        <span className="text-[22px] font-normal">{'2021.05.21'}</span>
                    </div>
                    <div className="max-h-full flex-1">
                        <LineChartCustom data={bodyRecords} />
                    </div>
                    <div className="pb-[16px] flex gap-[16px]">
                        <button
                            className="bg-white rounded-[11px] text-yellow px-[20px] py-[2px] text-[15px]"
                            onClick={() => {}}
                        >
                            日
                        </button>
                        <button
                            className="bg-white rounded-[11px] text-yellow px-[20px] py-[2px] text-[15px]"
                            onClick={() => {}}
                        >
                            週
                        </button>
                        <button
                            className="bg-white rounded-[11px] text-yellow px-[20px] py-[2px] text-[15px]"
                            onClick={() => {}}
                        >
                            月
                        </button>
                        <button
                            className="bg-yellow rounded-[11px] text-white px-[20px] py-[2px] text-[15px]"
                            onClick={() => {}}
                        >
                            年
                        </button>
                    </div>
                </div>
            </div>
            <div className="my-exercise px-[160px] mt-[56px]">
                <MyExercise date={myExercises.date} dataDetails={myExercises.dataDetail} />
            </div>

            <div className="my-diary px-[160px] mt-[56px] mb-[56px]">
                <MyDiary dataDetails={myDiary} />
            </div>
        </div>
    );
};

export default MyRecord;
