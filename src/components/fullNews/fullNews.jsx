import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import './fullNews.css';

const FullNewsCard = () => {

    const {searchNewsReducer} = useSelector((state) => state);

    console.log(searchNewsReducer, 'FULL');


    return(
        <div className="full-hot-news">
            <div className="full-view-hot-news-photo-block">
                <img src={searchNewsReducer.image} alt="" className="full-view-hot-news-photo" />
                <div className="full-description-block">
                    <div className="full-source-and-time">
                        <p className="full-time"> {searchNewsReducer.date} </p>
                        <p className="full-source"> {searchNewsReducer.author} </p>
                    </div>
                </div>
            </div>
            <p className="full-description">
                    {searchNewsReducer.title}
            </p>
            <article className="full-article">
                {searchNewsReducer.article}
            </article>
            <Link to='/template' ><p className="back">_____back_____</p></Link>
        </div>
    );
}

export default FullNewsCard;