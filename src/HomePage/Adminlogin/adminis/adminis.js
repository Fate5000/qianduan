import React from 'react';
import { BrowserRouter, Route, Switch, Link, Redirect } from 'react-router-dom';
import DeleteaddPage from './js/deleteadd';
import LoanreturnPage from './js/loanreturn'
import ResetPage from './js/reset'
var AdminisCss = require('./adminis.css');

export default class AdminisPage extends React.Component{

    render(){
        return(
            <div>
                <div className={AdminisCss.header}>管理图书</div>
                <BrowserRouter basename="adminis">
                <div className={AdminisCss.h1}>
                <Link to="/deleteadd">图书管理</Link>
                <br/>
                <Link to="/loanreturn">借还管理</Link>
                <br/>
                <Link to="/reset">重置密码</Link>
                <br/>
                <a href="/homepage">退出登录</a>
                </div>
                <div className={AdminisCss.h2}>
                    <Switch>
                        <Route path="/deleteadd" exact component={DeleteaddPage}></Route>
                        <Route path="/loanreturn" exact component={LoanreturnPage}></Route>
                        <Route path="/reset" exact component={ResetPage}></Route>
                        <Redirect to="/adminis"></Redirect>
                    </Switch>
                </div>
                </BrowserRouter>
            </div>
        )
    }
}
