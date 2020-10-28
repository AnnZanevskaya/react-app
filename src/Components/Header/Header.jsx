import React from "react";
import { useSelector } from "react-redux";
import { useHistory } from 'react-router-dom';

import Wrapper from "../Wrapper";
import Logo from "../Logo";
import Search from "../Search";
import MovieAdd from "../MovieAdd";
import MovieDetailsHeaderContent from "../MovieDetailsHeader/MovieDetailsHeaderContent";

const Header = ({ onClose }) => {
    const history = useHistory();
    const filmDetails = useSelector(state => state.movies.movie);

    if (filmDetails === undefined) {
        history.push("/404");
    }

    return (
        <header className="header">
            <div className="header__cover"></div>
            <Wrapper>
                {filmDetails ?
                    <MovieDetailsHeaderContent movie={filmDetails} onClose={onClose} /> :
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
    )
};

export default Header;
