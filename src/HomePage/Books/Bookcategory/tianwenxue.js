import React from 'react';

var TianwenxueCss = require('./css/tianwenxue.css');

export default class TianwenxuePage extends React.Component{
    render(){
        return(
            <div className={TianwenxueCss.h5}>
                <div className={TianwenxueCss.t1}>
                    <h1>图书信息</h1>
                </div>
                <div className={TianwenxueCss.t2}>
                   <a href="https://baike.baidu.com/item/%E5%A4%A9%E6%96%87%E5%AD%A6%E6%96%B0%E6%A6%82%E8%AE%BA/10259548?fr=aladdin"> 《天文学新概论》</a>
                    <a href="https://baike.baidu.com/item/%E4%B8%AD%E5%9B%BD%E5%A4%A9%E6%96%87%E5%AD%A6%E5%8F%B2/3386467">《中国天文学史》</a>
                </div>
            </div>
        )
    }
}