import React from "react";
import './template.css';
import Header from "../header/header";
import HotNewsCard from "../hotNews/hotNews";
import LatestNewsCard from "../latestNewsCard/latestNewsCard";
import SearchMenu from "../header/searchMenu";

export default function Template() {

    return(
        <div className="template">
            <div className="template-wrapper">
                <Header />
                <div className="search-menu-block">
                    <SearchMenu />
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