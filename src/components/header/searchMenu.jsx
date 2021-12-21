import React from "react";
import './searchMenu.css';

const SearchMenu = () => {

    return(
        <div className="search-menu">
            <div className="top-headlines-news-container">
                <p className="top-headlines-news">Top headlines</p>
                    <button className="choice-country">Czechia</button>
                    <button className="choice-country">Germany</button>
                    <button className="choice-country">Ukraine</button>
                    <button className="choice-country">USA</button>
                    <button className="choice-country">Russia</button>
            </div>
        </div>
    );
}

export default SearchMenu;