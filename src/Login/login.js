import React from 'react'
import {Link} from 'react-router-dom';
import  { Input,Button,Checkbox, Modal} from 'antd';
var LoginCss = require('./login.css');




function onChange(e) {
    console.log(`checked = ${e.target.checked}`);
  }


  function info() {
    Modal.info({
        okText: '知道了',
      title: '客服信息',
      content: (
        <div>
          <p>客服qq：1547553368</p>
          <p>客服电话：18078425642</p>
        </div>
      ),
      onOk() {
        console.log('知道了');
      },
    });
  }



export default class LoginPage extends React.Component{

    render(){
        return(
          
        
            <div className={LoginCss.h1}>
                 <div className={LoginCss.login}>
                <div className={LoginCss.a1}>
                   用户登录
                    <span>|</span>
                    <Link to='/adminlogin'>管理员登录</Link> 
                </div>

                   <form>
                   <Input id="username" type="text" placeholder="学号/手机号" name="username" size="large"
                    ></Input>
                    <br/>
    
                    <Input id="password" type="password" placeholder="密码至少8位(含字符)" name="password" size="large"
                     ></Input>
                    <br/>
                    <div className={LoginCss.a2}>
                        <Checkbox onChange={onChange}>记住密码</Checkbox>
                        <Link to="/findpassword">找回密码</Link>
                        <Button onClick={info}>联系客服</Button>
                        
                    </div>
                    
                    <div>
                    
                    </div>
                      <Button type="primary" size="large" target="view_frame" href='/books' onClick={this.login} block >登录</Button>
                      <div className={LoginCss.a3}> 
                      </div>
                   </form>     
            </div>
            </div>
            
           
        )
    }
}
