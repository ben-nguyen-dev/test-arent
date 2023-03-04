import React from 'react';
import { IButton } from '../../components/buttons/IButton';
import DateAchievementRate, { DateAchievementRateProps } from './components/DateAchievementRate/DateAchievementRate';
import TransmitButtons from './components/TransmitButtons/TransmitButtons';
import { ReactComponent as KnifeIcon } from '../../assets/icons/KnifeIcon.svg';
import { ReactComponent as CupIcon } from '../../assets/icons/CupIcon.svg';
import ImageThumbnail, { IImageThumbnailProps } from '../../components/images/ImageThumbnail/ImageThumbnail';
import Button from '../../components/buttons/Button/Button';

const dataDefault: DateAchievementRateProps = {
    backgroundUrl: 'images/home/d01 (image).png',
    data: {
        date: '10/21',
        expect: 100,
        remaining: 75,
    },
};

const transmitButtons: IButton[] = [
    {
        label: 'Morning',
        icon: <KnifeIcon />,
    },

    {
        label: 'Lunch',
        icon: <KnifeIcon />,
    },
    {
        label: 'Dinner',
        icon: <KnifeIcon />,
    },
    {
        label: 'Snack',
        icon: <CupIcon />,
    },
];

const mintHistorys = [
    {
        imageUrl: '/images/home/m01.jpg',
        description: '05.21.Morning',
    },

    {
        imageUrl: '/images/home/m01.jpg',
        description: '05.21.Morning',
    },
    {
        imageUrl: '/images/home/m01.jpg',
        description: '05.21.Morning',
    },
    {
        imageUrl: '/images/home/m01.jpg',
        description: '05.21.Morning',
    },
    {
        imageUrl: '/images/home/m01.jpg',
        description: '05.21.Morning',
    },
    {
        imageUrl: '/images/home/m01.jpg',
        description: '05.21.Morning',
    },
    {
        imageUrl: '/images/home/m01.jpg',
        description: '05.21.Morning',
    },
    {
        imageUrl: '/images/home/m01.jpg',
        description: '05.21.Morning',
    },
];

function Home() {
    return (
        <div className="home">
            <div className="container-1 flex">
                <div className="basis-2/5 w-2/5 min-w-2/5 h-[315px]">
                    <DateAchievementRate data={dataDefault.data} backgroundUrl={dataDefault.backgroundUrl} />
                </div>
                {/* <div className="basis-6/10 h-[500px] bg-orange w-full"></div> */}
            </div>

            <div className="container-2 flex flex-col justify-center">
                <TransmitButtons buttons={transmitButtons} />
                <div>
                    <div className="grid grid-cols-4 gap-[8px] px-[160px]">
                        {mintHistorys.map((history, index) => (
                            <ImageThumbnail
                                key={`${history.imageUrl}-${index}`}
                                className="min-h-[234px] aspect-square"
                                imageUrl={history.imageUrl}
                                description={history.description}
                                onClick={() => {}}
                            />
                        ))}
                    </div>

                    <div className="w-full flex items-center justify-center py-[28px]">
                        <Button className="w-[288px] h-[56px]" onClick={() => {}}>
                            '記録をもっと見る'
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;
