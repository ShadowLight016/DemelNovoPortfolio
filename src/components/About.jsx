import React from "react";
import picture from "../images/demel.jpg";

const About = () => {
    return (
        <>
            <div className="container vw-100 vh-100 p-5 d-flex justify-items-center align-items-center" id="about">
                <div className="row">
                    <div className="col p-2 m-5">
                        <img className="avatar avatar-xl-64 bg-dark rounded-circle text-white" src={picture} alt="Demel" />
                    </div>
                    <div className="container col d-flex flex-column justify-content-center">
                        <div className="row">
                            <h2 className="introduction">Hi, My Name is Demel</h2>
                        </div>
                        <div className="row">
                            <p className="fs-3 introduction-description">I am a Web Developer, I love playing Video Games, Watching Youtube Videos, and help other people.</p>
                        </div>
                        
                    </div>
                </div>
            </div>
        </>
    )
}

export default About
