import React from "react";
import pic4ws from "../images/4ws.png";
import pic4ws2 from "../images/4ws-2.png";
import pic4ws3 from "../images/4ws-3.png";
import pic4ws4 from "../images/4ws-4.png";
import myPortfolio from "../images/my-portfolio.png";

const Projects = () => {
    return (
        <div className="continer-fluid vh-100 vw-100 project-container">
            <div className="container m-5">
                <div className="row">
                    <h1 className = "text-prim">Projects That I Have Worked On / My Own Projects</h1>
                </div>
                <div className="row d-flex flex-wrap flex-row">
                    {/* Triggers */}
                    {/* 4 Web Services */}
                    <div className="card image-card w-25 m-5">
                        <img src={pic4ws} className="card-img-top" alt="4 Web Services" />
                        <div className="card-body">
                            <h5 className="card-title text-center">4 Web Services</h5>
                            <button data-bs-toggle="modal" data-bs-target="#fourwsModal" tabIndex="-1" className="btn card-btn stretched-link" />
                        </div>
                    </div>
                    
                    {/* My Portfolio */}
                    <div className="card image-card w-25 m-5">
                        <img src={myPortfolio} className="card-img-top" alt="My Portfolio" />
                        <div className="card-body">
                            <h5 className="card-title text-center">My Portfolio</h5>
                            <button data-bs-toggle="modal" data-bs-target="#myPortModal" tabIndex="-1" className="btn card-btn stretched-link" />
                        </div>
                    </div>

                    {/* Modals */}
                    {/* 4 Web Services */}
                    <div className="modal fade" id="fourwsModal" tabIndex="-1" aria-labelledby="4wsLabel" aria-hidden="true">
                        <div className="modal-dialog modal-xl">
                            <div className="modal-content">
                                <div className="modal-header">
                                    <h5 className="modal-title" id="4wsLabel">4 Web Services</h5>
                                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
                                </div>
                                <div className="modal-body">
                                    <div id="fourWSCarousel" className="carousel slide" data-bs-ride="carousel">
                                        <div className="carousel-inner">
                                            <div className="carousel-item active">
                                                <img src={pic4ws} className="d-block w-100" alt="4 Web Services" />
                                            </div>
                                            <div className="carousel-item">
                                                <img src={pic4ws2} className="d-block w-100" alt="4 Web Services" />
                                            </div>
                                            <div className="carousel-item">
                                                <img src={pic4ws3} className="d-block w-100" alt="4 Web Services" />
                                            </div>
                                            <div className="carousel-item">
                                                <img src={pic4ws4} className="d-block w-100" alt="4 Web Services" />
                                            </div>
                                            <button className="carousel-control-prev" type="button" data-bs-target="#fourWSCarousel" data-bs-slide="prev">
                                                <span className="carousel-control-prev-icon" aria-hidden="true" />
                                            </button>
                                            <button className="carousel-control-next" type="button" data-bs-target="#fourWSCarousel" data-bs-slide="next">
                                                <span className="carousel-control-next-icon" aria-hidden="true" />
                                            </button>
                                        </div>
                                    </div>
                                </div>
                                <div className="modal-footer">
                                    <a href="https://shadowlight016.github.io/4WebServices/" target="_blank" rel="noreferrer" className="btn btn-siteprim">Go To Project</a>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* My Portfolio */}
                    <div className="modal fade" id="myPortModal" tabIndex="-1" aria-labelledby="myPortLabel" aria-hidden="true">
                        <div className="modal-dialog modal-xl">
                            <div className="modal-content">
                                <div className="modal-header">
                                    <h5 className="modal-title" id="myPortLabel">My Portfolio</h5>
                                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
                                </div>
                                <div className="modal-body">
                                    <img src={myPortfolio} className="w-100" alt="My Portfolio" />
                                </div>
                                <div className="modal-footer">
                                    <a href="https://shadowlight016.github.io/DemelNovoPortfolio/" target="_blank" rel="noreferrer" className="btn btn-siteprim">Go To Project</a>
                                </div>
                            </div>
                        </div>
                    </div>

                    
                </div>
            </div>
        </div>
        
    )
}

export default Projects
