import { url } from 'inspector';
import React, { FC } from 'react';
import Button from '../../../../components/buttons/Button/Button';

export interface IMyDiaryProps {
    dataDetails: {
        date: string;
        time: string;
        title: string;
        description: string;
    }[];
}

const MyDiary: FC<IMyDiaryProps> = ({ dataDetails }) => {
    return (
        <div className="bg-white text-midnight">
            <div className="flex items-start">
                <p className="text-[22px]">MY DIARY</p>
            </div>
            <div className="grid grid-flow-row grid-cols-4 gap-[12px]">
                {dataDetails.map((data) => (
                    <div className="p-4 border-gray border-[2px] aspect-square">
                        <p className="text-[18px]">{data.date}</p>
                        <p className="text-[18px] mb-[10px]">{data.time}</p>
                        <p className="mb-[5px]">{data.title}</p>
                        <p>{data.description}</p>
                    </div>
                ))}
            </div>
            <div className="mt-[26px] w-full flex justify-center">
                <Button className="w-[296px] h-[56px]" onClick={() => {}}>
                    自分の日記をもっと見る
                </Button>
            </div>
        </div>
    );
};

export default MyDiary;
