import React, { FC, ReactComponentElement } from 'react';
import { useHistory } from 'react-router-dom';

export interface NavItemProps {
    icon?: any;
    label: string;
    path: string;
    isActive: boolean;
}

const NavItem: FC<NavItemProps> = ({ icon, label, path, isActive }) => {
    const history = useHistory();
    const handleClick = () => {
        console.log('sss', path, history, { useHistory });

        history.push(path);
    };

    return (
        <div className="pr-4 cursor-pointer flex justify-center items-center gap-1">
            {/* {icon ? <img src={icon} alt={label} /> : null} */}
            {icon}
            <span onClick={handleClick} className="text-white hover:text-orange">
                {label}
            </span>
        </div>
    );
};

export default NavItem;
