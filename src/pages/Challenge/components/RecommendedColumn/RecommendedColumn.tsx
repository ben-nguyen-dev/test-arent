import React, { FC } from 'react';

export interface RecommendedColumnProps {
    title: string;
    description: string;
    onClick: () => void;
}

const RecommendedColumn: FC<RecommendedColumnProps> = ({ title, description, onClick }) => {
    return (
        <div className="recommended-column bg-black p-[24px] text-center flex flex-col items-center justify-center">
            <div className="text-yellow uppercase text-[22px] whitespace-pre-line">{title}</div>
            <div className="bg-white w-[56px] h-[1px] my-[8px]"></div>
            <span className="text-white text-[18px]">{description}</span>
        </div>
    );
};

export default RecommendedColumn;
