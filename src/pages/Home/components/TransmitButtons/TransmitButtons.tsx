import { FC } from 'react';
import ButtonHexagon from '../../../../components/buttons/ButtonHexagon/ButtonHexagon';
import { IButton } from '../../../../components/buttons/IButton';

export interface ITransmitButtonsProps {
    buttons: IButton[];
}

const TransmitButtons: FC<ITransmitButtonsProps> = ({ buttons }) => {
    return (
        <div className="flex items-center justify-center gap-[84px] p-[25px]">
            {buttons.map((button, index) => (
                <ButtonHexagon key={`${button.label}-${index}`} onClick={() => {}}>
                    <div className="flex flex-col items-center justify-center">
                        {button?.icon}
                        {button.label}
                    </div>
                </ButtonHexagon>
            ))}
        </div>
    );
};

export default TransmitButtons;
