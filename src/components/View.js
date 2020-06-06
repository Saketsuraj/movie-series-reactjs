import React, { Component } from 'react';
import './../assets/css/View.css';
import Card from './Card';
import { browserHistory } from 'react-router';
import { Redirect } from 'react-router-dom';
import { useHistory } from 'react-router-dom';

class View extends Component {

    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            items: []
        };
    }

    componentDidUpdate(prevProp) {
        console.log(prevProp);
    }

    componentWillReceiveProp(newprop) {
        console.log(newprop);
    }

    componentDidMount() {
        fetch("https://raw.githubusercontent.com/StreamCo/react-coding-challenge/master/feed/sample.json")
            .then(res => res.json())
            .then(
                (result) => {
                    this.setState({
                        isLoaded: true,
                        items: result.entries
                    });
                },
                // Note: it's important to handle errors here
                // instead of a catch() block so that we don't swallow
                // exceptions from actual bugs in components.
                (error) => {
                    this.setState({
                        isLoaded: true,
                        error
                    });
                }
            )
    }
    // constructor and states
    render() {
        const { error, isLoaded, items } = this.state;
        if (error) {
            return <div class="container movie-card-container">Oops, something went wrong.</div>;
        } else if (!isLoaded) {
            return <div class="container movie-card-container">Loading...</div>;
        } else {
            console.log(this.props);
            let path = window.location.pathname;
            console.log(path);
            let pathArr = path.split('/'), type = "";
            if (pathArr.length) {
                type = pathArr[1];
                var typeArr = [];
                if (type == "") {
                    typeArr = [
                        {
                            "title": "Movies",
                            "images": {
                                "Poster Art": {
                                    "url": "/movie.jpg"
                                }
                            },
                            "pageType": "home",
                            "linkTo": "/movie"
                        },
                        {
                            "title": "Series",
                            "images": {
                                "Poster Art": {
                                    "url": "/movie.jpg"
                                }
                            },
                            "pageType": "home",
                            "linkTo": "/series"
                        }
                    ]

                }
            }
            return (
                <div class="container">
                    <button class="moviebtn" onClick={event => window.location.href = '/movie'}>Click me to watch Movies</button>
                    <button class="seriesbtn" onClick={event => window.location.href = '/series'}>Click me to watch Series</button>
                    <button class="homebtn" onClick={event => window.location.href = '/'}>Go to home page</button>
                    <div class="container movie-card-container">
                        {type != "" ? items.filter(item => item.programType === type).filter(item => item.releaseYear >= 2010).slice(0, 21).map(item => (
                            <div class="col-md-3">
                                <Card data={item} />
                            </div>
                        )) : typeArr.map(item => (

                            <div class="col-md-3">

                                <Card data={item} />
                            </div>


                        ))
                        }
                    </div >
                </div>

            );
        }
    }
}

export default View;