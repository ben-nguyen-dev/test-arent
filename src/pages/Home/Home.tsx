import React from 'react';
import DateAchievementRate, { DateAchievementRateProps } from './components/DateAchievementRate/DateAchievementRate';

const dataDefault: DateAchievementRateProps = {
    backgroundUrl: 'images/home/d01 (image).png',
    data: {
        date: '10/21',
        expect: 100,
        remaining: 75,
    },
};

function Home() {
    return (
        <div className="home">
            <div className="container-1 flex">
                <div className="basis-2/5 w-2/5 min-w-2/5">
                    <DateAchievementRate data={dataDefault.data} backgroundUrl={dataDefault.backgroundUrl} />
                </div>
                <div className="basis-6/10 h-[500px] bg-orange w-full"></div>
            </div>
        </div>
    );
}

export default Home;
