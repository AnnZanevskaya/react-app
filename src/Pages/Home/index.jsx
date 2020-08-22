import React from "react";
import Header from "../../Components/Header";

class Container extends React.Component {
  render() {
    return <h2 className="container">React.Component</h2>;
  }
}

class Footer extends React.PureComponent {
  render() {
    return <h2 className="footer">React.PureComponent</h2>;
  }
}

export default function HomePage() {
  return (
    <>
      <Header />
      {React.createElement(
        "h2",
        { id: 1, className: "navigation" },
        "React.CreateElement"
      )}
      <Container />
      <Footer />
    </>
  );
}