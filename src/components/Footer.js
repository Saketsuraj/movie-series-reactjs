import React, { Component } from 'react';
import './../assets/css/Footer.css';
import android from './../assets/images/android.png';

class Footer extends Component {

    componentDidMount() {

    }
    // constructor and states
    render() {
        const logo = require('./../assets/images/android.png');
        return (
            <div class="footer">
                <div class="container">
                    <div class="footer-links"><a>Home</a> | <a>Terms and Conditions</a> | <a>Privacy Policy</a></div>
                    <div class="copyright-section">Copyright Company Name</div>
                    <div class="icon-section">
                        <div><i class="fab fa-facebook-f"></i> <i class="fab fa-twitter"></i> <i class="fab fa-instagram-square"></i></div>
                        <br></br><div class="android"><img src={logo} /></div>


                    </div>
                    {/* <div class="collapse navbar-collapse" id="navbarNav">
                        <ul class="navbar-nav mr-auto">

                        </ul>
                        <ul class="navbar-nav">
                            <li class="nav-item">
                                <a class="nav-link" href="{{ url('/login') }}">Login</a>
                            </li>
                            <li class="nav-item">
                                <button class="btn btn-start">Start your free trial</button>
                            </li>
                        </ul>
                    </div> */}
                </div>
            </div>
        );
    }
}

export default Footer;