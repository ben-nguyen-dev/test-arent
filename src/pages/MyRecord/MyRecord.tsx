import React from 'react';
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

const MyRecord = () => {
    return (
        <div>
            <div className="entry-button grid grid-flow-col grid-cols-3 px-[160px] gap-[48px] mt-[56px]">
                {entryButtons.map((button) => (
                    <EntryButton
                        backgroundUrl={button.backgroundUrl}
                        label={button.label}
                        description={button.description}
                    />
                ))}
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
