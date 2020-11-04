import React from "react";

import Wrapper from "../../Components/Wrapper";
import Logo from "../../Components/Logo";
import Footer from "../../Components/Footer";

export default function NotFound() {
    return (
        <div className="notfound-page__content">
            <Wrapper>
                <div className="page__body">
                    <Logo />
                    <img src="https://blog.vverh.digital/wp-content/uploads/2020/06/oblojka-404.png"></img>
                </div>
            </Wrapper>
            <Footer />
        </div>
    );
}
