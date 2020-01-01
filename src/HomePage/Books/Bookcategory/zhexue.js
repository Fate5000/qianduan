import React from 'react'

var ZhexueCss = require('./css/zhexue.css')

export default class ZhexuePage extends React.Component{
    render(){
        return(
            <div className={ZhexueCss.h5}>

                <div className={ZhexueCss.z1}> 
                    <h1>图书信息</h1>
                </div>

                <div className={ZhexueCss.z2}>
                   <a href="https://baike.baidu.com/item/%E8%A5%BF%E6%96%B9%E5%93%B2%E5%AD%A6%E5%8F%B2/15450505?fr=aladdin">《西方哲学史》</a>
                </div>
            </div>
        )
    }
}