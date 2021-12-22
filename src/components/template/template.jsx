import React from "react";
import './template.css';
import Header from "../header/header";
import HotNewsCard from "../hotNews/hotNews";
import LatestNewsCard from "../latestNewsCard/latestNewsCard";
import SearchMenu from "../header/searchMenu";
import { useSelector } from 'react-redux';

export default function Template() {

    const {searchNewsReducer} = useSelector((state) => state);
    const isMenu = searchNewsReducer.menu;
    console.log(searchNewsReducer.articles, 'articles');

    const HotNews = searchNewsReducer.articles.slice(0,1);
    const HotNewsKey = HotNews.indexOf(0,1);
    const HotNewsPresentation = HotNews.map(item => <HotNewsCard item={item} key={HotNewsKey} />);
    
    const LatestNews = searchNewsReducer.articles.slice(1,19);
    const LatestNewsPresentation = LatestNews.map( item => <LatestNewsCard key={Math.random()} item={item} /> );    

    return(
        <div className="template">
            <div className="template-wrapper">
                <Header />
                <div className="search-menu-block">
                    {isMenu === true ? <SearchMenu /> : null }
                </div>
                <div className="hot-news-block">
                    <p className="hot-news-title">
                    Hot Topics
                    </p>
                    {HotNewsPresentation}
                </div>
                <div className="latest-news-block">
                    <p className="latest-news-title">
                        Latest News
                    </p>
                    <div className="latest-news-block-card-container">
                        <div className="latest-news-block-card-scroll-container">
                            {LatestNewsPresentation}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};