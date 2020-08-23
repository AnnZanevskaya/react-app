import React from "react";
import Wrapper from "../Wrapper";
import Logo from "../Logo";
import AddMovie from "../AddMovie";
import Search from "../Search";


const Header = () => (
    <header className="header">
        <div className="header__cover"></div>
        <Wrapper>
            <div className="header__content">
                <div className="header__top">
                    <Logo />
                    <AddMovie />
                </div>
                <Search />
            </div>
        </Wrapper>
    </header >
);

export default Header;