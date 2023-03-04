import { url } from 'inspector';
import React, { FC } from 'react';

export interface IEntryButtonProps {
    backgroundUrl: string;
    label: string;
    description: string;
}

const EntryButton: FC<IEntryButtonProps> = ({ backgroundUrl, label, description }) => {
    return (
        <div className="aspect-square p-[24px] bg-yellow relative">
            <div className="h-full w-full bg-blend-luminosity" style={{ backgroundImage: `url(${backgroundUrl})` }}>
                <div className="w-full h-full bg-blend-luminosity relative flex justify-center items-center bg-cover bg-midnight opacity-75"></div>
            </div>
            <div className="text-center w-full inset-center">
                <p className="text-yellow text-3xl uppercase mb-[10px]">{label}</p>
                <button className="bg-orange w-3/5 py-1 text-white text-base">{description}</button>
            </div>
        </div>
    );
};

export default EntryButton;
