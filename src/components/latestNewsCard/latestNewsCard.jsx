import React from "react";
import LatestNesCardPhoto from '../../img/Rectangle3.png';
import './latestNewsCard.css';

const LatestNewsCard = () => {

    return(
        <div className="latest-news-card">
            <img src={LatestNesCardPhoto} alt="" className="latest-news-card-photo" />
            <p className="latest-news-card-title">
            News Title Lorem Ipsum Dolor Sit Amet
            </p>
            <div className="from-information-container">
                <p className="latest-time">
                1 Hour Ago
                </p>
                <p className="latest-sourse">
                CNN Indonesia
                </p>
            </div>
        </div>
    );
}

export default LatestNewsCard;