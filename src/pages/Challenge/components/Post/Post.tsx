import React, { FC } from 'react';
import ImageThumbnail from '../../../../components/images/ImageThumbnail/ImageThumbnail';

export interface PostProps {
    imageUrl: string;
    descriptionImage?: string;
    descriptionPost?: string;
    tags: {
        text: string;
    }[];
    onClick: () => void;
    className?: string;
}

const Post: FC<PostProps> = ({ imageUrl, descriptionImage, descriptionPost, tags, onClick, className }) => {
    return (
        <div className="post-item h-full flex flex-col" onClick={onClick}>
            <ImageThumbnail imageUrl={imageUrl} onClick={onClick} description={descriptionImage} className="flex-1" />
            <div className="text-[15px] mt-[8px] cursor-pointer hover:underline">{descriptionPost}</div>
            <div className="mt-[8px]">
                {tags.map((tag) => (
                    <span className="text-[12px] text-orange mr-[5px] cursor-pointer hover:underline" onClick={onClick}>
                        #{tag.text}
                    </span>
                ))}
            </div>
        </div>
    );
};

export default Post;
