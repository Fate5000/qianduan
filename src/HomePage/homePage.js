import React from 'react';
import Login from '../Login/login';
import {Link} from 'react-router-dom';
import { Input } from 'antd';
const { Search } = Input;
var HomepageCss = require("./Css/homePage.css")



export default class Homepage extends React.Component{
    render(){
        return (
            <div className={HomepageCss.homePage}>
                <div className={HomepageCss.header}>
                    <div className={Homepage.p}>
                        <p>图书管理系统</p>
                    </div>
                    <div>
                    <Search placeholder="输入关键字" onSearch={value => console.log(value)} enterButton />

                    </div>
                        <div className={HomepageCss.a1}>
                        <Link to='/register'>注册</Link>
                                              
                    </div>
                    
                </div>

                    <Login/>
                    
                   
            </div>
        )
    }
}   
