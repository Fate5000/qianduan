import Axios from 'axios';
import React from 'react';
import {Button,Input, message} from 'antd';
var RegisterCss=require('../Register/register.css');

export default class RegisterPage extends React.Component{
    
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
            "昵称":this.state.昵称,
            "学号":this.state.学号,
            "手机号":this.state.手机号,
            "密码":this.state.密码,
        }
        Axios.post({
            url:"/Register/register",
            data:JSON.stringify(data)
        }).then(result=>{
            if(result.state==2){
                message.info("用户名已存在")
            }
            else if(result.state==1){
                message.info("注册成功")
            }
        })
    }

    render(){
        return(
            <div className={RegisterCss.register}>
                <div className={RegisterCss.h1}>图书管理系统</div>

                <div className={RegisterCss.h2}></div>
                <div className={RegisterCss.input}>
                <Input placeholder="昵称" className={RegisterCss.h3} name="昵称" value={this.state.昵称} onChange={e=>this.changeValue(e)}></Input>
                <br/>
                <Input placeholder="学号" className={RegisterCss.h3} name="学号" value={this.state.学号} onChange={e=>this.changeValue(e)}></Input>
                <br/>
                <Input  placeholder="手机号" className={RegisterCss.h3} name="手机号" value={this.state.手机号} onChange={e=>this.changeValue(e)}></Input>
                <br/>
                <Input  placeholder="密码" className={RegisterCss.h3} name="密码" value={this.state.密码} onChange={e=>this.changeValue(e)}></Input>
                </div>
                <div><Button size="large" href="/homePage"
                className={RegisterCss.button}>注册</Button></div>

            </div>
        )
    }
}