import React from 'react';
import Button from '../../components/buttons/Button/Button';
import Post, { PostProps } from './components/Post/Post';
import RecommendedColumn from './components/RecommendedColumn/RecommendedColumn';

const recommendedColumns = [
    {
        title: 'RECOMMENDED \n COLUMN',
        description: 'オススメ',
    },

    {
        title: 'RECOMMENDED \n DIET',
        description: 'ダイエット',
    },
    {
        title: 'RECOMMENDED \n BEAUTY',
        description: '美容',
    },
    {
        title: 'RECOMMENDED \n HEALTH',
        description: '健康',
    },
];

const posts = [
    {
        imageUrl: 'images/challenge/column-1.jpg',
        descriptionImage: '2021.05.17   23:25',
        descriptionPost: '魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ…',
        tags: [{ text: '魚料理' }, { text: '和食' }, { text: 'DHA' }],
    },

    {
        imageUrl: 'images/challenge/column-2.jpg',
        descriptionImage: '2021.05.17   23:25',
        descriptionPost: '魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ…',
        tags: [{ text: '魚料理' }, { text: '和食' }, { text: 'DHA' }],
    },
    {
        imageUrl: 'images/challenge/column-3.jpg',
        descriptionImage: '2021.05.17   23:25',
        descriptionPost: '魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ…',
        tags: [{ text: '魚料理' }, { text: '和食' }, { text: 'DHA' }],
    },
    {
        imageUrl: 'images/challenge/column-4.jpg',
        descriptionImage: '2021.05.17   23:25',
        descriptionPost: '魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ…',
        tags: [{ text: '魚料理' }, { text: '和食' }, { text: 'DHA' }],
    },
    {
        imageUrl: 'images/challenge/column-5.jpg',
        descriptionImage: '2021.05.17   23:25',
        descriptionPost: '魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ…',
        tags: [{ text: '魚料理' }, { text: '和食' }, { text: 'DHA' }],
    },
    {
        imageUrl: 'images/challenge/column-6.jpg',
        descriptionImage: '2021.05.17   23:25',
        descriptionPost: '魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ…',
        tags: [{ text: '魚料理' }, { text: '和食' }, { text: 'DHA' }],
    },
    {
        imageUrl: 'images/challenge/column-7.jpg',
        descriptionImage: '2021.05.17   23:25',
        descriptionPost: '魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ…',
        tags: [{ text: '魚料理' }, { text: '和食' }, { text: 'DHA' }],
    },
    {
        imageUrl: 'images/challenge/column-8.jpg',
        descriptionImage: '2021.05.17   23:25',
        descriptionPost: '魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ…',
        tags: [{ text: '魚料理' }, { text: '和食' }, { text: 'DHA' }],
    },
];

const Challenge = () => {
    return (
        <div>
            <div className="recommended-columns grid grid-flow-col grid-cols-4 gap-[32px] px-[160px] mt-[56px]">
                {recommendedColumns.map((col) => (
                    <RecommendedColumn title={col.title} description={col.description} onClick={() => {}} />
                ))}
            </div>
            <div className="posts px-[160px] mt-[56px]">
                <div className="grid grid-flow-row grid-cols-4 gap-[8px]">
                    {posts.map((post) => (
                        <Post
                            imageUrl={post.imageUrl}
                            descriptionImage={post.descriptionImage}
                            descriptionPost={post.descriptionPost}
                            tags={post.tags}
                            onClick={() => {}}
                        />
                    ))}
                </div>

                <div className="mt-[26px] w-full flex justify-center">
                    <Button className="w-[288px] h-[56px]" onClick={() => {}}>
                        コラムをもっと見る
                    </Button>
                </div>
                <div className="mt-[56px]"></div>
            </div>
        </div>
    );
};

export default Challenge;
