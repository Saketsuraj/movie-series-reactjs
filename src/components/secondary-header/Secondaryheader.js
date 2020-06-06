import React, { Component } from 'react';
import './../../assets/css/secondary-header.css';

class Secondaryheader extends Component {

    componentDidMount() {

    }
    // constructor and states
    render() {
        return (
            <nav class="navbar secondary-header navbar-expand-md">
                <div class="container">
                    <a class="navbar-brand" href="#">Popular Titles</a>
                </div>
            </nav>
        );
    }
}

export default Secondaryheader;