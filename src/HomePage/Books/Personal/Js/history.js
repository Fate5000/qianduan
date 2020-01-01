import React from 'react';
import { Divider } from 'antd';

var HistoryCss = require('../css/history.css');

export default class HistoryPage extends React.Component{
    render(){
        return(
            <div>
                     <Divider><h1>历史记录</h1></Divider>
                <div className={HistoryCss.history}>
                    <a>借书记录</a>
                    <Divider type="vertical" />
                    <a>归还记录</a>
                    <Divider/>

                </div>
                <div className={HistoryCss.t}>
                    <span>时间</span>
                    <span>|</span>
                    <span>书名</span>
                    <span>|</span>
                    <span>借书期限</span>
                    <Divider/>
                </div>
            </div>
        )
    }
}