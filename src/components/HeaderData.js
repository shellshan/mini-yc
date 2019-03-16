import React, { Component } from 'react';
import { Row, Col } from 'antd';

class HeaderData extends Component {
        render(){
                return(
                        <div className='header'><Row><Col span={24} offset={4}><span className='ystyle'>Y</span>Mini-YC</Col></Row></div>
                );
        }
}

export default HeaderData
