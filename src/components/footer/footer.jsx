import React from "react"
import 'font-awesome/css/font-awesome.min.css';

const Footer = () => <footer className="footer positionFooter sticky-bottom page-footer font-small blue pt-4" style={{backgroundColor: "#e9ecef"}}>
    <div className="container-fluid text-center text-md-left container">
        <div className="row">
            <div className="col-md-6 mt-md-0 mt-3 px-3">
                <div>
                    <h5 className="text-uppercase text-primary">Instagram Clone</h5>
                    <p>This Clone application is completely for learning purpose.</p>
                </div>
            </div>

            <hr className="clearfix w-100 d-md-none pb-0"/>

            <div className="col-md-6 mb-md-0 mb-3">
                <div>
                    <h5 className="text-uppercase">Please support with you lovable froke and star<span role="img" aria-label="img">🔥❤</span></h5>
                    <ul className="list-unstyled">
                        <li>
                            <a href="https://github.com/Afranzio/Instagram-Clone-Quazi">
                                <i className="fa fa-github"></i> Github
                            </a>
                        </li>
                        <li>
                            <a href="https://www.linkedin.com/in/afranzio/">
                                <i className="fa fa-linkedin"></i> LinkedIn
                            </a>
                        </li>
                        <li>
                            <a href="https://www.instagram.com/afranzio/">
                                <i className="fa fa-instagram"></i> Instagram
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>

    <div className="footer-copyright text-center py-3">© 2020 Copyright:
        <a href="https://mdbootstrap.com/"> afranzio.github.io</a>
    </div>

</footer>

export default Footer