import React, { Component } from 'react';
import axios from 'axios';
import { Row, Col } from 'antd';
import * as utils from '../utils.js'

const API = 'https://hacker-news.firebaseio.com/v0/item/';

class Description extends Component {
        constructor() {
                super();
                this.state = {
                        info: {},
                        isLoading: false,
                        error: null
                };
        }
        getData(id){
                this.setState({ isLoading: true});
                axios.get(API + id + '.json')
                        .then(result => this.setState({
                                info: result.data,
                                isLoading: false,
                                error: null
                        }))
                        .catch(error => this.setState({
                                error,
                                isLoading: false
                        }));
        }
        componentDidMount() {
                this.getData(this.props.id);
        }
        render(){
                const { info, isLoading, error } = this.state;

                if (error) {
                        return(<Row> <Col span={24} offset={8}>{error.message}</Col></Row>)
                }

                if (isLoading) {
                        return(<Row> <Col span={24} offset={8}> ... </Col></Row>)
                }

                const tduration = utils.timeCal(info.time);
                const domain= info.url ? info.url.split('/')[2] : '';

                return(
                        <Row> <Col span={24} offset={4}>
                        <a className="storylink" href={info.url}> {this.props.ind+1+'.'} {info.title} </a>
                        <span className='subtext'> ({domain})</span>
                        <div className='subtext'>
                        <p>{info.hasOwnProperty('score')? info.score+' points by '+info.by+' ' : ''}
                         {'| '+tduration+ ' ago'}
                         {info.hasOwnProperty('kids')? ' | '+info.kids.length+' comments': ''} </p>
                        </div>
                        </Col></Row>
                );
        }
}

export default Description
