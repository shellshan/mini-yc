import React from 'react';
import ReactDOM from 'react-dom';
import 'antd/dist/antd.css';
import './index.css';
import moment from 'moment'
import { Layout } from 'antd';
import { Row, Col } from 'antd';

const { Content } = Layout;

function timeCal(t){
        const st = moment.unix(t).utc();
        const et = moment.utc();
        return moment.duration(st.diff(et)).humanize();
}

class Description extends React.Component {
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
                        const tduration = timeCal(this.state.info.time);
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

class NewsFeeds extends React.Component {
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

class HeaderData extends React.Component {
        render(){
                return(
                        <div className='header'><Row><Col span={24} offset={4}><span className='ystyle'>Y</span>Mini-YC</Col></Row></div>
                );
        }
}

ReactDOM.render(
  <div>
    <Layout>
      <Content>
        <HeaderData/>
        <NewsFeeds/>
      </Content>
    </Layout>
  </div>,
 document.getElementById('root')
);
