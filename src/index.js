import React from 'react';
import ReactDOM from 'react-dom';
import 'antd/dist/antd.css';
import './index.css';
import { Layout } from 'antd';
import NewsFeeds from './components/NewsFeeds'
import HeaderData from './components/HeaderData'

const Content = Layout;

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
