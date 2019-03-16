import React, { Component } from 'react';
import { Row, Col } from 'antd';
import * as utils from '../utils.js'

class Description extends Component {
        constructor() {
                super();
                this.state = {
                        'info' : {}
                };
        }
        getData(id){
                var url = 'https://hacker-news.firebaseio.com/v0/item/'+id+'.json'
                fetch(url)
                .then(result => result.json())
                .then(info=> this.setState({info}));
        }
        componentDidMount() {
                this.getData(this.props.id);
        }
        render(){
                if (this.state.info.hasOwnProperty('title')) {
                        const tduration = utils.timeCal(this.state.info.time);
                        const domain= this.state.info.url ? this.state.info.url.split('/')[2] : '';
                        return(
                                <Row> <Col span={24} offset={4}>
                                <a className="storylink" href={this.state.info.url}> {this.props.ind+1+'.'} {this.state.info.title} </a>
                                <span className='subtext'> ({domain})</span>
                                <div className='subtext'>
                                <p>{this.state.info.hasOwnProperty('score')? this.state.info.score+' points by '+this.state.info.by+' ' : ''}
                                 {'| '+tduration+ ' ago'}
                                 {this.state.info.hasOwnProperty('kids')? ' | '+this.state.info.kids.length+' comments': ''} </p>
                                </div>
                                </Col></Row>
                        );
                } else {
                        return(<Row> <Col span={24} offset={8}> ... </Col></Row>)
                }
        }
}

export default Description
