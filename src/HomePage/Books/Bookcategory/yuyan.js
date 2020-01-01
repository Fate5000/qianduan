import React from 'react';

var YuyanCss = require('./css/yuyan.css');

export default class YuyanPage extends React.Component{
    render(){
        return(
            <div className={YuyanCss.h5}>
                <div className={YuyanCss.h}>
                    <h1>图书信息</h1>
                </div>
                <div className={YuyanCss.y}>
                    <a href="https://baike.baidu.com/item/%E8%AF%AD%E8%A8%80%E8%AE%BA/9502083">《语言论》</a>
                </div>
            </div>
        )
    }
}