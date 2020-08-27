import React from 'react';

const OopsText = () => (
    <h2 className="text-error">Sorry, something went wrong</h2>
)

class ErrorBoundary extends React.Component {
    constructor(props) {
        super(props);
        this.state = { hasError: false };
    }

    static getDerivedStateFromError(error) {
        return { hasError: true };
    }

    componentDidCatch(error, errorInfo) {
        console.error(`Error: ${error}. Error Info: ${errorInfo}`);
    }

    render() {
        if (this.state.hasError) {
            return <OopsText />
        }

        return this.props.children;
    }
}

export default ErrorBoundary;