import React from "react";
import PropTypes from 'prop-types';

const ResultsCount = (props) => (
    <h4 className="results__description"><span className="results__count">{props.count}</span> movies found</h4>
);

ResultsCount.propTypes = {
    count: PropTypes.number.isRequired,
}

ResultsCount.defaultProps = {
    count: 0
}

export default ResultsCount;
