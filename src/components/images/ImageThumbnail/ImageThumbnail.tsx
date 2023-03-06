import React, { FC } from 'react';

export interface IImageThumbnailProps {
    imageUrl: string;
    description?: string;
    onClick: () => void;
    className?: string;
}

const ImageThumbnail: FC<IImageThumbnailProps> = ({ imageUrl, description, onClick, className }) => {
    return (
        <div className={`image-thumbnail ${className} relative cursor-pointer`} onClick={onClick}>
            <img className="w-full h-full object-cover" src={imageUrl} alt={description || ''} />
            {description ? (
                <div className="absolute bottom-0 left-0 bg-yellow text-white min-w-[120px] p-[5px] text-[15px]">
                    {description}
                </div>
            ) : null}
        </div>
    );
};

export default ImageThumbnail;
