import React from 'react';
import {Link} from 'react-router-dom'
var WenxueCss = require('./css/wenxue.css')

export default class WenxuePage extends React.Component{
    render(){
        return(
            
            <div className={WenxueCss.h5}>
                <div className={WenxueCss.h1}>
                    <h1>图书信息</h1>
                </div>
               <div>
                   <div className={WenxueCss.s}>
                        <div className={WenxueCss.h3}>世界文学</div>
                        <div className={WenxueCss.h4}>
                           
                            <a href="https://baike.baidu.com/item/%E4%B8%89%E4%BD%93/5739303?fr=aladdin">《三体》</a>
                            <a href="https://baike.baidu.com/item/%E8%BF%BD%E9%A3%8E%E7%AD%9D%E7%9A%84%E4%BA%BA/3708735?fr=aladdin">《追风筝的人》</a>
                            <a href="https://baike.baidu.com/item/%E7%A6%8F%E5%B0%94%E6%91%A9%E6%96%AF%E6%8E%A2%E6%A1%88%E9%9B%86/63438?fr=aladdin">《福尔摩斯探案集》</a>
                          <div>
                            <a href="https://baike.baidu.com/item/%E4%B8%89%E4%BD%93/5739303?fr=aladdin">《三体》</a>
                            <a href="https://baike.baidu.com/item/%E8%BF%BD%E9%A3%8E%E7%AD%9D%E7%9A%84%E4%BA%BA/3708735?fr=aladdin">《追风筝的人》</a>
                            <a href="https://baike.baidu.com/item/%E7%A6%8F%E5%B0%94%E6%91%A9%E6%96%AF%E6%8E%A2%E6%A1%88%E9%9B%86/63438?fr=aladdin">《福尔摩斯探案集》</a>
                      </div> </div>  </div>
                   </div>
               </div>

            
           
        )
    }
}