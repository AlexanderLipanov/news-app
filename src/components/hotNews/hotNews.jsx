import React from "react";
import './hotNews.css';
import PhotoArticle from '../../img/Rectangle1.png';

const HotNewsCard = () => {

    return(
        <div className="hot-news">
            <div className="view-hot-news-photo-block">
                <img src={PhotoArticle} alt="" className="view-hot-news-photo" />
                <div className="description-block">
                    <p className="description">
                    Massa tortor nibh nulla condimentum imperdiet scelerisque...
                    </p>
                    <div className="source-and-time">
                        <p className="time">2 Hours Ago</p>
                        <p className="source">CNN Indonesia</p>
                    </div>
                </div>
            </div>
            <article className="article">
            Nisi, sagittis aliquet sit rutrum. Nunc, 
            id vestibulum quam ornare adipiscing. Pellentesque 
            sed turpis nunc gravida pharetra, sit nec vivamus 
            pharetra. Velit, dui, egestas nisi, elementum mattis mauris, 
            magnis. Massa tortor nibh nulla condimentum imperdiet scelerisque...
            </article>
        </div>
    );
}

export default HotNewsCard;