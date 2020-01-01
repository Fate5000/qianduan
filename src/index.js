import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';

import HomePage from './HomePage/homePage';
import LoginPage from './Login/login';
import RegisterPage from './Register/register'
import FindpasswordPage from './Login/Findpassword/findpassword'
import {BrowserRouter,Route,Switch,Redirect} from 'react-router-dom';
import AdminloginPage from './HomePage/Adminlogin/adminlogin';
import AdminisPage from './HomePage/Adminlogin/adminis/adminis'
import PersonalPage from './HomePage/Books/Personal/personal';
import BooksPage from './HomePage/Books/books';


var IndexCss = require('./index.css');

class IndexPage extends React.Component{
    render(){
        return (
            <div>
                <div className={IndexCss.p}>
                    <p>书籍是朋友，虽然没有热情，但是非常忠实。</p>
                </div>
                <div>
                   <BrowserRouter basename='react'>
                            <Switch>
                            <Route path='/homePage' exact component={HomePage}></Route>
                            <Route path='/login' exact component={LoginPage}></Route>
                            <Route path='/register'exact component={RegisterPage}></Route>
                            <Route path='/findpassword'exact component={FindpasswordPage}></Route>
                            <Route path='/adminlogin' exact component={AdminloginPage}></Route>
                            <Route path="/adminis" exact component={AdminisPage}></Route>
                            <Route path="/books" exact component={BooksPage}></Route>
                            <Route path="/personal" exact component={PersonalPage}></Route>
                            <Redirect to="/homePage"></Redirect>
                            </Switch>
                   </BrowserRouter>
                </div>
            
            </div>
        )
    }
}


//直接在html上渲染组件
ReactDOM.render(<IndexPage />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
