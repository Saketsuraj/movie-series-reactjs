import React, { Component } from 'react';
import './../assets/css/Header.css';

class Header extends Component {

    componentDidMount() {

    }
    // constructor and states
    render() {
        return (
            <nav class="navbar navbar-expand-md">
                <div class="container">
                    <a class="navbar-brand" href="#">DEMO Streaming</a>
                    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNav">
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
                    </div>
                </div>
            </nav>
        );
    }
}

export default Header;