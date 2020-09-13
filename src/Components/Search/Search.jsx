import React from "react";

const Search = () => (
    <>
        <h2 className="header__description">Find your movie</h2>

        <div className="header__search search">
            <form className="search__form">
                <input className="search__input" placeholder="What do you want to watch?"></input>
                <button className="search__button button button-red">Search</button>
            </form>
        </div>
    </>
);

export default Search
