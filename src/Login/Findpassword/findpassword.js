import Axios from 'axios';
import React from 'react';
import {Input, Button,message} from 'antd';
const {Search}=Input;
var FindpasswordCss = require('../Findpassword/findpassword.css');


export default class FindpasswordPage extends React.Component{

    constructor(props){
        super(props);
        this.state={}
    }
    changeValue=(e)=>{
        this.setState({
            [e.target.name]:e.target.value
        })
    }
    upload = ()=>{
        var data
        var data={
            
            
            "手机号":this.state.手机号,
            "密码":this.state.密码,
        }
        Axios.post({
            url:"/findpassword",
            data:JSON.stringify(data)
        }).then(result=>{
            if(result.state==2){
                message.info("确认密码")
            }
            else if(result.state==1){
                message.info("修改成功")
            }
        })
    }

    render(){
        return(
            <div className={FindpasswordCss.h6}>

                <body className={FindpasswordCss.h7}>
                <div className={FindpasswordCss.h1}>找回密码</div>
                <div className={FindpasswordCss.input}>
                <Search
                placeholder="输入手机号"
                enterButton="获取验证码"
                size="large"
                onSearch={value => console.log(value)}
                /><br/>
                <Input  placeholder="输入验证码"  size="large"></Input>
                <br/>
                <Input id="password" type="password" placeholder="输入新密码" name="username" size="large"></Input>
                <br/>
                <Input id="password" type="password" placeholder="确认密码·" name="password" size="large"></Input>
                <br/>
                <Button type="primary" size="large" target="view_frame" href='/homePage' block >确认</Button>
                </div>
                </body>
            </div>
        )
    }
}