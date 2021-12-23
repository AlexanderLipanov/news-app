import React from "react";
import { useDispatch } from "react-redux";
import './latestNewsCard.css';
import { Link } from "react-router-dom";

export default function LatestNewsCard(props) {

    const previewTitle = props.item.title.slice(0,30);
    const perviewDate = props.item.publishedAt.slice(0,10);
    console.log(previewTitle.length);

    const dispatch = useDispatch();

    const fullNewsParams = {
        image: props.item.urlToImage,
        title: props.item.title,
        date: perviewDate,
        author: props.item.author,
        article: props.item.description,
    }

    return(
        <div className="latest-news-card">
            <Link onClick={() => dispatch({ type: 'FULL_NEWS', fullNewsParams})} to='/fullNews' >
                <img src={props.item.urlToImage} alt="" className="latest-news-card-photo" />
            </Link>
            <p className="latest-news-card-title">
                {props.item.title.length > 30 
                ? (previewTitle + '...')
                : previewTitle }
            </p>
            <div className="from-information-container">
                <p className="latest-time">
                    {perviewDate}
                </p>
                <p className="latest-sourse">
                    {props.item.author}
                </p>
            </div>
        </div>
    );
}

