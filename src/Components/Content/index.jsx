import React from "react";
import Wrapper from "../Wrapper";
import Filter from "../Filter";
import Sort from "../Sort";
import MovieList from "../MovieList";
import ErrorBoundary from "../ErrorBoundary";

const Content = () => (
    <div className="content">
        <Wrapper>
            <div className="content__nav">
                <Filter />
                <Sort />
            </div>

            <ErrorBoundary>
                <MovieList />
            </ErrorBoundary>
        </Wrapper>
    </div >
);

export default Content;