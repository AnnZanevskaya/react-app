import React from "react";
import Wrapper from "../Wrapper";

const Header = () => (
    <header className="header">
        <div className="header__cover"></div>
        <Wrapper>
            <div className="header__content">
                <div className="header__top">
                    <h1 className="logo">
                        <span className="logo-bold">netflix</span>roulette
                        </h1>

                    <button className="header__button button button-gray">+ ADD MOVIE</button>
                </div>
                <h2 className="header__description">Find your movie</h2>
                <div className="header__search search">
                    <form className="search__form">
                        <input className="search__input" placeholder="What do you want to watch?"></input>
                        <button className="search__button button button-red">Search</button>
                    </form>
                </div>
            </div>
        </Wrapper>
    </header >
);

export default Header;