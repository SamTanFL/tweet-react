import React from 'react';
import ReactDOM from 'react-dom';

import tweets from 'tweets'

class App extends React.Component {
    render() {
        const kanyeTweets = tweets.map(tweet => {

        });
        return (
            <div>
                {kanyeTweets}
            </div>
        );
    }
}

class Tweet extends React.Component {
    render() {
        return (
            <div>

            </div>
        );
    }
}

const element = document.getElementById('app');

ReactDOM.render(<App />, element );//
