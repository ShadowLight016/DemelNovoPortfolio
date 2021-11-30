import React from "react";
import Typed from "react-typed";
import Particles from "react-particles-js";


const Header = () => {
    return (
        <>
            <Particles params={{
                particles: {
                    number:{
                        value: 30,
                        density: {
                            enable: true,
                            value_area: 900
                        }
                    },
                    shape: {
                        type: "star",
                        stroke: {
                            width: 6,
                            color: "#03c03c"
                        }
                    }
                }
            }} />
            <div className="header-wrapper">
                <div className="main-info">
                    <h1>Demel Novo</h1>
                    <Typed
                        className="typed-text"
                        strings={["I am a Developer", "I am a Gamer",  "I Love Coding"]}
                        typeSpeed={40}
                        backSpeed={60}
                        loop
                    />
                </div>
            </div>
        </>
    )
}

export default Header
