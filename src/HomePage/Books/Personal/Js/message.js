import React from 'react';
import { Divider } from 'antd';

var MessageCss = require('../css/message.css');

export default class MessagePage extends React.Component{
    render(){
        return(
            <div>
                 <Divider><h1>个人信息</h1></Divider>
                <div className={MessageCss.message}>

                    <p>昵称: 时光、依旧</p>
                    <p>学号：20181078</p>
                    <p>手机号:18090726382</p>
                </div>
            </div>
        )
    }
}