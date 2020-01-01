import React from 'react';
import { BrowserRouter, Route, Switch, Link, Redirect } from 'react-router-dom';
import { Divider,Avatar} from 'antd';

import WenxuePage from './Bookcategory/wenxue';
import YuanPage from './Bookcategory/yuyan';
import ZhexuePage from './Bookcategory/zhexue';
import TianwenxuePage from './Bookcategory/tianwenxue';
import NascinencePage from './Bookcategory/nascience';
var BooksCss = require('./books.css')





export default class BooksPage extends React.Component {
    render() {
        return (
            
            <div className={BooksCss.clearfix}>
                <div>
                    <div className={BooksCss.main}>
                        <div className={BooksCss.div1}>
                           <div className={BooksCss.user}>
                               <Link to='./personal'>
                               <Avatar  style={{ backgroundColor: '#87d068' }} icon="user"/>
                               </Link>
                            </div>
                            <div className={BooksCss.book}>图书</div>
                        </div>
                        <BrowserRouter basename="books">
                            <div className={BooksCss.div2}>
                                    <div className={BooksCss.b}>
                                        <Link to="/wenxue">文学</Link>
                                        <br/>
                                        <Divider />
                                        <Link to="/yuyan">语言</Link>
                                        <br/>
                                        <Divider />
                                        <Link to="/zhexue">哲学</Link>
                                        <br/>
                                        <Divider />
                                        <Link to="/tianwenxue">天文学</Link>
                                        <br/>
                                        <Divider />
                                        <Link to="nascience">自然科学</Link>
                                        <Divider />
                                    </div>
                            </div>
                            <div>
                              
                                <div>
                                    <Switch>
                                        <Route path='/wenxue' exact component={WenxuePage}></Route>
                                        <Route path='/yuyan' exact component={YuanPage}></Route>
                                        <Route path='/zhexue' exact component={ZhexuePage}></Route>
                                        <Route path='/tianwenxue' exact component={TianwenxuePage}></Route>
                                        <Route path='/nascience' exact component={NascinencePage}></Route>
                                        <Redirect path='/wenxue'></Redirect>
                                    </Switch>
                                </div>
                                
                            </div>
                        </BrowserRouter>
                    </div>
                </div>
            </div>

           
          
        )
    }
}