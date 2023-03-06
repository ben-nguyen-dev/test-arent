import React, { FC, ReactComponentElement } from 'react';
import { useHistory } from 'react-router-dom';

export interface NavItemProps {
    icon?: any;
    label: string;
    path: string;
    isActive: boolean;
    numberOfNoti?: number;
}

const NavItem: FC<NavItemProps> = ({ icon, label, path, isActive, numberOfNoti }) => {
    const history = useHistory();
    console.log(isActive);

    const handleClick = () => {
        console.log('sss', path, history, { useHistory });

        history.push(path);
    };

    return (
        <div className="pr-4 cursor-pointer flex justify-center items-center gap-1">
            <div className="relative">
                {icon}
                {numberOfNoti ? (
                    <span className="absolute text-[10px] text-white bg-orange w-[14px] h-[14px] text-center rounded-full top-0 right-[-5px]">
                        {numberOfNoti}
                    </span>
                ) : null}
            </div>

            <span onClick={handleClick} className={`hover:text-orange ${isActive ? 'text-orange' : 'text-white'}`}>
                {label}
            </span>
        </div>
    );
};

export default NavItem;
