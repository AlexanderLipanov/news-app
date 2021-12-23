import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import './hotNews.css';

export default function HotNewsCard(props) {

    console.log(props.item, 'ITEM');

    const dispatch = useDispatch();

    const indention = props.item.description.split(' ').slice(0,1).join('');
    const perviewDate = props.item.publishedAt.slice(0,10);
    const description = props.item.description.split(' ').slice(1).join(' ');
    console.log(description);

    const fullNewsParams = {
        image: props.item.urlToImage,
        title: props.item.title,
        date: perviewDate,
        author: props.item.author,
        article: props.item.description,
    }

    return(
        <div className="hot-news">
            <div className="view-hot-news-photo-block">
                <Link onClick={() => dispatch({ type: 'FULL_NEWS', fullNewsParams})} to='/fullNews' >
                <img src={props.item.urlToImage} alt="" className="view-hot-news-photo" />
                </Link>
                <div className="description-block">
                    <p className="description">
                    {props.item.title}
                    </p>
                    <div className="source-and-time">
                        <p className="time"> {perviewDate} </p>
                        <p className="source"> {props.item.author} </p>
                    </div>
                </div>
            </div>
            <article className="article">
                <span className="indention"> {indention} </span>
                {description}
            </article>
        </div>
    );
}

