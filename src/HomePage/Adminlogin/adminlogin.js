import axios from 'axios';
import  React from 'react';
import {Input,Button,message} from 'antd';
var AdminloginCss = require('./adminlogin.css');

export default class AdminloginPage extends React.Component{

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
            
            "学号":this.state.学号,
            "手机号":this.state.手机号,
            "密码":this.state.密码,
        }
        axios.post({
            url:"/Register/register",
             data:JSON.stringify(data)
         }).then(result=>{
            if(result.state==2){
               message.info("登陆失败")
           }
            else if(result.state==1){
                message.info("登陆成功")
             }
         })
    }
    
    render() {
       
        return(
           
            <div className={AdminloginCss.adminlogin}>
                <h1>管理员登录</h1>
            <div className={AdminloginCss.h1}>
                <form>  
                    <Input id="accountnumber" type="text" placeholder="学号" name="accountnumber" size="large"></Input>
                    <br/>
                    <Input id="phonenumber" type="text" placeholder="手机号" name="phonenumber" size="large"></Input>
                    <br/>
                    <Input id="password" type="password" placeholder="密码至少8位(含字符)" name="password" size="large"></Input>

                    <Button type="primary" size="large" href="/adminis" target="view_frame" block>登录</Button>
                </form>
            </div>
      </div>
          
        )

 
        
    }
}