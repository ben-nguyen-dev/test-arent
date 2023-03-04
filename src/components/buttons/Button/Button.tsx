import React, { FC } from 'react';

export interface IButtonProps {
    children: string;
    className?: string;
    onClick: () => void;
}

const Button: FC<IButtonProps> = ({ children, className, onClick }) => {
    return (
        <button className={`btn-default px-[4px] py-[14px] text-white cursor-pointer ${className}`} onClick={onClick}>
            {children}
        </button>
    );
};

export default Button;
