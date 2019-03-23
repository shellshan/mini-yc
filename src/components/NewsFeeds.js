import React, { Component } from 'react';
import axios from 'axios';
import Description from './Description'

const API = 'https://hacker-news.firebaseio.com/v0/topstories.json'

class NewsFeeds extends Component {
        constructor() {
                super();
                this.state = {
                        ids: [],
                        isLoading: false,
                        error: null
                };
        }
        getData() {
                this.setState({ isLoading: true});
                axios.get(API)
                        .then(result => this.setState({
                                ids: result.data,
                                isLoading: false,
                                error: null
                        }))
                        .catch(error => this.setState({
                                error,
                                isLoading: false
                        }));
        }
        componentDidMount() {
                this.getData();
        }
        render(){
                const { ids, isLoading, error } = this.state;

                if (error) {
                        return(<div>{error.message}</div>);
                }

                if (isLoading) {
                        return(<div> Loading... </div>);
                }

                return(
                        <div className="newsfeeds">
                        {ids.slice(0, 20).map((item, i) => <Description ind={i} id={item} key={item}/>)}
                        </div>
                );
        }
}

export default NewsFeeds
