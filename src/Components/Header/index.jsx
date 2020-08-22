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
            </div>
        </Wrapper>
    </header>
);

export default Header;