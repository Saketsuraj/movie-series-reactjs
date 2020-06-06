import React, { Component } from 'react';
import './../assets/css/card.css';

class Card extends Component {
    render() {
        let data = this.props.data;
        return (
            <div>
                <div class="card">
                    <div class="card-body">
                        {data.pageType == "home" ? <span class="overlay">{data.title}</span> : ""}
                        <img src={data.images['Poster Art'].url} />
                    </div>
                </div>
                <p class="card-title">{data.title}</p>
            </div>
        )
    }
}

export default Card;