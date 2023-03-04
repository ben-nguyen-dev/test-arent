import React, { FC } from 'react';

export interface IImageThumbnailProps {
    imageUrl: string;
    description?: string;
    onClick: () => void;
    className?: string;
}

const ImageThumbnail: FC<IImageThumbnailProps> = ({ imageUrl, description, onClick, className }) => {
    return (
        <div className={`image-thumnail ${className} relative`} onClick={onClick}>
            <img className="w-full h-full object-cover" src={imageUrl} alt={description || ''} />
            {description ? (
                <div className="absolute bottom-0 left-0 bg-yellow text-white w-[120px] p-[7px]">{description}</div>
            ) : null}
        </div>
    );
};

export default ImageThumbnail;
