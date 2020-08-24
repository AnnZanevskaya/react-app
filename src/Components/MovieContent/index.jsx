import React from "react";
import Wrapper from "../Wrapper";
import Filter from "../Filter";
import Sort from "../Sort";
import ResultsCount from "../ResultsCount";

const MovieContent = () => (
    <div className="content">
        <Wrapper>
            <div className="content__nav">
                <Filter />
                <Sort />
                <ResultsCount />
            </div>
        </Wrapper>
    </div >
);

export default MovieContent;