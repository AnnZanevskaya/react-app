import React from 'react';

const ErrorBoundary = (props) => {
    const OopsText = () => (
        <h2 className="text-error">Sorry, something went wrong</h2>
    )

    let isLoaded = true;

    return <>{isLoaded ? props.children : <OopsText />}</>
}

export default ErrorBoundary;