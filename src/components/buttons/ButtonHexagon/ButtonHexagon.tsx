import React, { FC } from 'react';

export interface IButtonHexagonProps {
    children: any;
    onClick: () => void;
}

const ButtonHexagon: FC<IButtonHexagonProps> = ({ children, onClick }) => {
    return (
        <button className="btn-hexagon" onClick={onClick}>
            {children}
        </button>
    );
};

export default ButtonHexagon;
