import React, {useEffect} from "react";
import './header.css'
import Search from '../../svg/Search.svg'
import { useDispatch, useSelector } from "react-redux";

export default function Header() {

    const {searchNewsReducer} = useSelector((state) => state);
    const dispatch = useDispatch();

    let fetchParams = {
        Country: searchNewsReducer.Country,
        Category: searchNewsReducer.Category,
    };

    console.log(fetchParams, searchNewsReducer);

    const setLocalStorage = () => {
        localStorage.setItem('country', searchNewsReducer.Country);
        localStorage.setItem('category', searchNewsReducer.Category);
    }

    const removeLocalStorage = () => {
        localStorage.removeItem('country');
        localStorage.removeItem('category');
    }

    useEffect(() => {
        removeLocalStorage();
        dispatch({type: 'FETCH_NEWS', params: fetchParams});
        setLocalStorage();
    }, [searchNewsReducer.Country && searchNewsReducer.Category]);

    let localParams = {
        Country: localStorage.getItem('country'),
        Category: localStorage.getItem('category'),
    }

    console.log( localStorage.getItem('country'),
     localStorage.getItem('category'), localParams);

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
                {searchNewsReducer.CountryPresentation === '' ? null : <p className="search-params"> {searchNewsReducer.CountryPresentation} </p>}
                {searchNewsReducer.Category === '' ? null : <p className="search-params"> {searchNewsReducer.Category} </p>}
                <div className="search">
                    <button onClick={()=> {
                        removeLocalStorage();
                        dispatch({type: 'FETCH_NEWS', params: fetchParams});
                        setLocalStorage();
                        }} className="open-search">
                        <img src={Search} alt="" className="search-icon" />
                    </button>
                </div>
                <div className="menu">
                    <button onClick={()=> dispatch({type: 'MENU'})} className="open-menu">
                        <p className="menu-icon"></p>
                        <p className="menu-icon"></p>
                        <p className="menu-icon"></p>
                    </button>
                </div>
            </div>
        </div>
    )
}