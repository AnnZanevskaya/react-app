import React from "react";
import Wrapper from "../Wrapper";
import Filter from "../Filter";
import Sort from "../Sort";

const MovieContent = () => (
    <div className="content">
        <Wrapper>
            <div className="content__nav">
                <Filter />
                <Sort />
            </div>
        </Wrapper>
    </div >
);

export default MovieContent;