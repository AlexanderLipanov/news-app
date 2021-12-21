import React from "react";
import './template.css';
import Header from "../header/header";
import HotNewsCard from "../hotNews/hotNews";
import LatestNewsCard from "../latestNewsCard/latestNewsCard";
import SearchMenu from "../header/searchMenu";
import { useSelector, useDispatch } from 'react-redux';

export default function Template() {

    const {searchNewsReducer} = useSelector((state) => state);
    const isMenu = searchNewsReducer.menu;

    console.log(searchNewsReducer.Country, searchNewsReducer.Category, searchNewsReducer.CountryPresentation);

    return(
        <div className="template">
            <div className="template-wrapper">
                <Header CountryPresentation={searchNewsReducer.CountryPresentation}
                        Category={searchNewsReducer.Category}
                        Country={searchNewsReducer.Country} />
                <div className="search-menu-block">
                    {isMenu === true ? <SearchMenu /> : null }
                </div>
                <div className="hot-news-block">
                    <p className="hot-news-title">
                    Hot Topics
                    </p>
                    <HotNewsCard />
                </div>
                <div className="latest-news-block">
                    <p className="latest-news-title">
                        Latest News
                    </p>
                    <div className="latest-news-block-card-container">
                        <div className="latest-news-block-card-scroll-container">
                            <LatestNewsCard />
                            <LatestNewsCard />
                            <LatestNewsCard />
                            <LatestNewsCard />
                            <LatestNewsCard />
                            <LatestNewsCard />
                            <LatestNewsCard />
                            <LatestNewsCard />
                            <LatestNewsCard />
                            <LatestNewsCard />
                            <LatestNewsCard />
                            <LatestNewsCard />
                            <LatestNewsCard />
                            <LatestNewsCard />
                            <LatestNewsCard />
                            <LatestNewsCard />
                            <LatestNewsCard />
                            <LatestNewsCard />
                            <LatestNewsCard />
                            <LatestNewsCard />
                            <LatestNewsCard />
                            <LatestNewsCard />
                            <LatestNewsCard />
                            <LatestNewsCard />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}