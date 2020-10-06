import React from "react";

import Wrapper from "../Wrapper";
import Logo from "../Logo";
import Search from "../Search";
import MovieAdd from "../MovieAdd";
import MovieDetailsHeaderContent from "../MovieDetailsHeader/MovieDetailsHeaderContent";

const Header = ({ movie, onClose }) => (
    <header className="header">
        <div className="header__cover"></div>
        <Wrapper>
            {movie ?
                <MovieDetailsHeaderContent movie={movie} onClose={onClose} /> :
                <div className="header__content">
                    <div className="header__top">
                        <Logo />
                        <MovieAdd />
                    </div>
                    <Search />
                </div>
            }

        </Wrapper>
    </header >
);

export default Header;
