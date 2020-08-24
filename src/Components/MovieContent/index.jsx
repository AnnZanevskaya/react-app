import React from "react";
import Wrapper from "../Wrapper";

const MovieContent = () => (
    <div className="content">
        <Wrapper>
            <div className="content__nav">
                <div className="content__filter">
                    <ul className="filter">
                        <li className="filter__item filter__item_active">all</li>
                        <li className="filter__item">documentary</li>
                        <li className="filter__item">comedy</li>
                        <li className="filter__item">horror</li>
                        <li className="filter__item">crime</li>
                    </ul>
                </div>
                <div className="content__sort">
                    <h4 className="sort__title">Sort by</h4>
                    <select className="sort__select">
                        <option selected>Release Date</option>
                    </select>
                </div>
            </div>
        </Wrapper>
    </div >
);

export default MovieContent;