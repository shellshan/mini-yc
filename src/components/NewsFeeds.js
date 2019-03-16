import React, { Component } from 'react';
import Description from './Description'

class NewsFeeds extends Component {
        constructor() {
                super();
                this.state = {
                        'ids': [],
                };
        }
        getData() {
                fetch('https://hacker-news.firebaseio.com/v0/topstories.json')
                .then(result=> result.json())
                .then(ids=> this.setState({ids})
                );
        }
        componentDidMount() {
                this.getData();
        }
        render(){
                if(this.state.ids.length > 0) {
                        const ids = this.state.ids.slice(0, 20);
                        return(
                                <div className="newsfeeds">
                                {ids.map((item, i) => <Description ind={i} id={item} key={item}/>)}
                                </div>
                        );
                }
                else {
                        return(<div> Loading... </div>);
                }
        }
}

export default NewsFeeds
