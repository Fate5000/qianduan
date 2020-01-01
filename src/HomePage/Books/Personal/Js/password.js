import React from 'react';
import  { Input,Button} from 'antd';

var PasswordCss = require('../css/password.css');

export default class PasswordPage extends React.Component{
    render(){
        return(
            <div>
               
                <div className={PasswordCss.password}>
                    <div className={PasswordCss.h1}>
                        <h1>修改密码</h1>
                    </div>
                    
                    <Input id="password" type="password" placeholder="原密码" name="password" size="large"></Input>
                    <Input id="password" type="password" placeholder="输入新密码" name="password" size="large"></Input>
                    <Input id="password" type="password" placeholder="再次输入密码" name="password" size="large"></Input>
                    <Button type="primary" size="large"block >确定</Button>
                </div>
            </div>
            
        )
    }
}