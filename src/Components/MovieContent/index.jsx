import React from "react";
import Wrapper from "../Wrapper";

const MovieContent = () => (
    <div className="content">
        <Wrapper>
            <div>
                <ul>
                    <li>all</li>
                    <li>documentary</li>
                    <li>comedy</li>
                    <li>comedy</li>
                    <li>horror</li>
                    <li>crime</li>
                </ul>
                <div>
                    <h4>Sort by</h4>
                    <select>
                        <option selected>Release Date</option>
                    </select>
                </div>
            </div>
        </Wrapper>
    </div>
);

export default MovieContent;