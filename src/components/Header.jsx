import React from "react";
import Typed from "react-typed";

const Header = () => {
    return (
        <div className="header-wrapper">
            <div className="main-info">
                <h1>HI! I AM DEMEL NOVO</h1>
                <Typed
                    className="typed-text"
                    strings={["I am a Developer", "I am a Gamer", "I Watch a Lot of Videos", "I Love Codes"]}
                    typeSpeed={40}
                    backSpeed={60}
                    loop
                />
            </div>
        </div>
    )
}

export default Header
