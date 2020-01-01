import Axios from 'axios';
import React from 'react';
import {Link} from 'react-router-dom';
import { BrowserRouter, Route, Switch, Redirect} from 'react-router-dom';
import MessagePage from './Js/message';
import HistoryPage from './Js/history';
import PasswordPage from './Js/password';
import {message} from 'antd';

var PersonalCss = require('./personal.css')


export default class PersonalPage extends React.Component{

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
                message.info("输入旧密码")
            }
            else if(result.state==1){
                message.info("修改成功")
            }
        })
    }
  

    render(){
        
        return(   
         
            <div className={PersonalCss.personal}>
               
               <div className={PersonalCss.div1}>
                 
                      <div className={PersonalCss.i}>
                      </div>
                      <div className={PersonalCss.n}>
                        昵称
                      </div>
                  
               </div>

               <BrowserRouter basename="personal">
                   <div className={PersonalCss.div2}>
                     <div className={PersonalCss.a1}>
                        <Link to="/message">个人信息</Link>
                     </div>
                   <div className={PersonalCss.a2}>
                        <Link to="/history">历史记录</Link>
                   </div>
                    <div className={PersonalCss.a3}>
                         <Link to="password">修改密码</Link>
                    </div>
                    <div className={PersonalCss.a4}>
                         <a href="/homePage">退出登录</a>
                    </div>  
                  
                    <div>
                </div>
                 </div>
      

                <div className={PersonalCss.div3}>
                    <Switch>
                        <Route path="/message" exact component={MessagePage}></Route>
                        <Route path="/history" exact component={HistoryPage}></Route>
                        <Route path="/password" exact component={PasswordPage}></Route>
                        <Redirect to="/personal"></Redirect>
                    </Switch>
                </div>
              </BrowserRouter>
              
            </div>
        )
    }
}
