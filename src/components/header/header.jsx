import React from "react";
import './header.css'
import Search from '../../svg/Search.svg'
import { useDispatch } from "react-redux";

export default function Header(props) {

    const dispatch = useDispatch();

    let fetchParams = {
        Country: props.Country,
        Category: props.Category,
    }

    console.log(fetchParams);

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
                {props.CountryPresentation === '' ? null : <p className="search-params"> {props.CountryPresentation} </p>}
                {props.Category === '' ? null : <p className="search-params"> {props.Category} </p>}
                <div className="search">
                    <button onClick={()=> dispatch({type: 'FETCH_NEWS'})} className="open-search">
                        <img src={Search} alt="" className="search-icon" />
                    </button>
                </div>
                <div className="menu">
                    <button onClick={()=> dispatch({type: 'MENU', fetchParams })} className="open-menu">
                        <p className="menu-icon"></p>
                        <p className="menu-icon"></p>
                        <p className="menu-icon"></p>
                    </button>
                </div>
            </div>
        </div>
    )
}