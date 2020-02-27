import React from 'react';
import ReactDOM from 'react-dom';

import tweets from 'tweets'

class App extends React.Component {
    render() {
        console.log(tweets)
        let tweetElements = tweets.tweets.map(tweet => {
            return <Tweet tweet={tweet} />
        })
        return (
            <div>
                {tweetElements}
            </div>
        );
    }
}

class Tweet extends React.Component {
    render() {
        return (
            <div>
                <User user={this.props.tweet.user} />
                <p>{this.props.tweet.text}</p>
                <Entities entities={this.props.tweet.entities} />
            </div>
        );
    }
}

class User extends React.Component {
    render() {
        return (
            <div>
                <p>{this.props.user.screen_name}</p>
                <a href={this.props.user.url}>{this.props.user.name}</a>
            </div>
        );
    }
}

class Entities extends React.Component {
    render() {
        let hashtags = this.props.entities.hashtags.map(hashtag => {
            return <p># {hashtag}</p>
        })
        return (
            <div>
                <p>Urls</p>
                <Urls urls={this.props.entities.urls} />
                <p>Hashtags</p>
                {hashtags}
            </div>
        );
    }
}

class Urls extends React.Component {
    render() {
        let urlEle = this.props.urls.map(url => {
            return(
                <div>
                    <a href={url.url}>URL</a>
                    <a href={url.expanded_url}>Extended URL</a>
                    <a href={url.display_url}>{url.display_url}</a>
                </div>
            )
        })
        return (
            <div>
                {urlEle}
            </div>
        );
    }
}


const element = document.getElementById('app');

ReactDOM.render(<App />, element );//
