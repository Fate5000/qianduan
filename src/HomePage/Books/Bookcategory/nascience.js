import React from 'react';

var NascinenceCss = require('./css/nascience.css');

export default class NascinencePage extends React.Component{
    render(){
        return(
            <div className={NascinenceCss.h5}>
                <div className={NascinenceCss.n1}>
                    <h1>图书信息</h1>
                </div>
                <div className={NascinenceCss.n2}>
                    <a href="https://baike.baidu.com/item/%E7%89%A9%E7%A7%8D%E8%B5%B7%E6%BA%90/819555?fr=aladdin">《物种起源》</a>
                    <a href="https://baike.baidu.com/item/%E6%97%B6%E9%97%B4%E7%AE%80%E5%8F%B2/215129?fr=aladdin">《时间简史》</a>
                </div>
            </div>
        )
    }
}