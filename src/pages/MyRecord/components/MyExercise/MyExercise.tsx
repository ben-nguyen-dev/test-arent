import { FC } from 'react';

export interface IMyExerciseProps {
    date: string;
    dataDetails: {
        title: string;
        energy: number;
        time: number;
    }[];
}

const MyExercise: FC<IMyExerciseProps> = ({ date, dataDetails }) => {
    return (
        <div className="bg-midnight p-[24px] text-white">
            <div className="flex items-start">
                <p className="w-[70px] mr-[24px]">MY EXERCISE</p>
                <span className="text-[22px] font-normal">{date}</span>
            </div>
            <div className="grid grid-flow-row grid-cols-2 overflow-auto max-h-[260px] scroll-custom">
                {dataDetails.map((data, index) => (
                    <div key={`${data.title}-${index}`} className="pr-[40px]">
                        <div className="flex items-start w-full py-[5px] border-b-[1px]">
                            <span className="pr-[5px]">•</span>
                            <div className="flex-1">
                                <p className="text-[15px] font-light">{data.title}</p>
                                <span className="text-[15px] text-yellow">{data.energy}kcal</span>
                            </div>
                            <div className="text-yellow text-[18px]">{data.time} min</div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default MyExercise;
