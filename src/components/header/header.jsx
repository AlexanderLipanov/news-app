import React from "react";
import './header.css'
import Search from '../../svg/Search.svg'

export default function Header() {

    return(
        <div className="header">
            <div className="logo">
                <div className="logo-black-part">
                    <p className="logo-name-black-part">
                    News
                    </p>
                </div>
                <div className="logo-white-part">
                    <p className="logo-name-white-part">
                    Portal
                    </p>
                </div>
            </div>
            <div className="search-and-menu">
                <div className="search">
                    <button className="open-search">
                        <img src={Search} alt="" className="search-icon" />
                    </button>
                </div>
                <div className="menu">
                    <button className="open-menu">
                        <p className="menu-icon"></p>
                        <p className="menu-icon"></p>
                        <p className="menu-icon"></p>
                    </button>
                </div>
            </div>
        </div>
    )
}