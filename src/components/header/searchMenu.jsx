import React from "react";
import './searchMenu.css';
import { useDispatch, useSelector } from "react-redux";

const SearchMenu = () => {

    const dispatch = useDispatch();
    const {searchNewsReducer} = useSelector((state) => state);
    const whichCountry = searchNewsReducer.Country;
    const whichCategory = searchNewsReducer.Category;    

    return(
        <div className="search-menu">
            <div className="top-headlines-news-container">
                <p className="top-headlines-news">Top headlines</p>
                <p className="advice">Choose country:</p>
                { whichCountry === 'cz' 
                  ? <button className="choice-param-selected">Czechia</button>
                  : <button onClick={() =>dispatch({type: 'COUNTRY', Country: 'cz', CountryPresentation: 'Czechia'})} className="choice-param">Czechia</button>
                }

                { whichCountry === 'de' 
                  ? <button  className="choice-param-selected">Germany</button>
                  : <button onClick={() =>dispatch({type: 'COUNTRY', Country: 'de', CountryPresentation: 'Germany'})} className="choice-param">Germany</button>
                }

                { whichCountry === 'ua' 
                  ? <button  className="choice-param-selected">Ukraine</button>
                  : <button onClick={() =>dispatch({type: 'COUNTRY', Country: 'ua', CountryPresentation: 'Ukraine'})} className="choice-param">Ukraine</button>
                }

                { whichCountry === 'us' 
                  ? <button  className="choice-param-selected">USA</button>
                  : <button onClick={() =>dispatch({type: 'COUNTRY', Country: 'us', CountryPresentation: 'USA'})} className="choice-param">USA</button>
                }

                { whichCountry === 'ru' 
                  ? <button  className="choice-param-selected">Russia</button>
                  : <button onClick={() =>dispatch({type: 'COUNTRY', Country: 'ru', CountryPresentation: 'Russia'})} className="choice-param">Russia</button>
                }
            </div>
            <div className="category-container">
                <p className="category-news">Categories</p>
                <p className="advice">Choice category:</p>
                { whichCategory === 'business' 
                  ? <button  className="choice-param-selected">business</button>
                  : <button onClick={() =>dispatch({type: 'CATEGORY', Category: 'business'})} className="choice-param">business</button>
                }

                { whichCategory === 'entertainment' 
                  ? <button  className="choice-param-selected">entertainment</button>
                  : <button onClick={() =>dispatch({type: 'CATEGORY', Category: 'entertainment'})} className="choice-param">entertainment</button>
                }

                { whichCategory === 'general' 
                  ? <button  className="choice-param-selected">general</button>
                  : <button onClick={() =>dispatch({type: 'CATEGORY', Category: 'general'})} className="choice-param">general</button>
                }

                { whichCategory === 'health' 
                  ? <button  className="choice-param-selected">health</button>
                  : <button onClick={() =>dispatch({type: 'CATEGORY', Category: 'health'})} className="choice-param">health</button>
                }

                { whichCategory === 'science' 
                  ? <button  className="choice-param-selected">science</button>
                  : <button onClick={() =>dispatch({type: 'CATEGORY', Category: 'science'})} className="choice-param">science</button>
                }
          
                { whichCategory === 'technology' 
                  ? <button  className="choice-param-selected">technology</button>
                  : <button onClick={() =>dispatch({type: 'CATEGORY', Category: 'technology'})} className="choice-param">technology</button>
                }

                { whichCategory === 'sports' 
                  ? <button  className="choice-param-selected">sports</button>
                  : <button onClick={() =>dispatch({type: 'CATEGORY', Category: 'sports'})} className="choice-param">sports</button>
                }
            </div>
        </div>
    );
}

export default SearchMenu;