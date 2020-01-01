import React from 'react';
import {Input,Divider, Button} from 'antd';
var ResetCss = require('../css/reset.css');

export default class ResetPage extends React.Component{

    render(){
        return(
           
           <div>
            <div className={ResetCss.h1}>
               <h1>重置密码</h1>
            </div>   

            <div className={ResetCss.h2}>
                <form>
                <Input  placeholder="输入原密码"  size="large"></Input>
                <br/>
                <Input id="password" type="password" placeholder="输入新密码" name="username" size="large"></Input>
                <br/>
                <Input id="password" type="password" placeholder="确认新密码·" name="password" size="large"></Input>
                </form>
               <button>确认</button>
            </div>
             
            </div>
        )
    }
}


           